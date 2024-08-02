import { JWT } from 'next-auth/jwt';
import KeycloakProvider, {KeycloakProfile} from 'next-auth/providers/keycloak';
import NextAuth from 'next-auth';
import * as process from "process";

const refreshAccessToken = async (token) => {
    try {
        if (Date.now() > token.refreshTokenExpired) throw Error;
        const details = {
            client_id: process.env.KEYCLOAK_ID,
            client_secret: process.env.KEYCLOAK_SECRET,
            grant_type: 'refresh_token',
            refresh_token: token.refreshToken,
        };
        const formBody = [];
        Object.entries(details).forEach(([key, value]) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(value);
            formBody.push(encodedKey + '=' + encodedValue);
        });
        const formData = formBody.join('&');
        const url = `${process.env.KEYCLOAK_URL}/protocol/openid-connect/token`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formData,
        });
        const refreshedTokens = await response.json();
        if (!response.ok) throw refreshedTokens;
        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpired: Date.now() + (refreshedTokens.expires_in - 15) * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
            refreshTokenExpired: Date.now() + (refreshedTokens.refresh_expires_in - 15) * 1000,
        };
    } catch (error) {
        return {
            ...token,
            error: 'RefreshAccessTokenError',
        };
    }
};


const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID || '',
            clientSecret: process.env.KEYCLOAK_SECRET || '',
            issuer: process.env.KEYCLOAK_URL || '',
            profile: (profile) => {
                return {
                    ...profile,
                    username: capitalize(profile.preferred_username),
                    id: profile.sub,
                };
            },
        }),
    ],
    events: {
        async signOut({ token }) {
            const issuerUrl = process.env.KEYCLOAK_URL;
            const logOutUrl = new URL(`${issuerUrl}/protocol/openid-connect/logout`)
            logOutUrl.searchParams.set("id_token_hint", token.id_token)
            await fetch(logOutUrl);
        },
    },
    callbacks: {
        signIn: async ({ user, account }) => {
            if (account && user) {
                return true;
            } else {
                // TODO : Add unauthorized page
                return '/unauthorized';
            }
        },
        jwt: async ({ token, account, user }) => {
            // Initial sign in
            if (account && user) {
                // Add access_token, refresh_token and expirations to the token right after signin
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.accessTokenExpired = Date.now() + (account.expires_in - 15) * 1000;
                token.refreshTokenExpired = Date.now() + (account.refresh_expires_in - 15) * 1000;
                token.user = user;
                token.id_token = account.id_token;
                return token;
            }
            // Return previous token if the access token has not expired yet
            if (Date.now() < token.accessTokenExpired) return token;

            // Access token has expired, try to update it
            return refreshAccessToken(token);
        },
        session: async ({ session, token }) => {
            if (token) {
                session.user = token.user;
                session.error = token.error;
                session.accessToken = token.accessToken;
            }
            return session;
        },
    }
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default handler;

