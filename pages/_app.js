import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';
import '../styles/globals.css'
import {createTheme, MantineProvider} from "@mantine/core";
import {RouterTransition} from "../components/RouterTransition";
import {appWithTranslation} from "next-i18next";
import Footer from "../components/Footer";
import {SessionProvider} from "next-auth/react";
import {ModalsProvider} from "@mantine/modals";
import {Notifications} from "@mantine/notifications";
import '@mantine/notifications/styles.css';
import Head from "next/head";
import React, {useEffect} from "react";
import CookieBanner from "../components/CookieBanner";
import formbricks from "@formbricks/js/app";
import {useRouter} from "next/router";


if (typeof window !== "undefined") {
    formbricks.init({
        environmentId: "clxvw74bg0037p0njaa81ly5z",
        apiHost: "https://forms.bte-germany.de",
    });
}

function MyApp({Component, pageProps}) {
    const router = useRouter();

    const theme = createTheme({
        headings: {
            fontFamily: "Lexend Deca",
        }
    });

    useEffect(() => {
        var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        (function () {
            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.async = true;
            g.src = 'https://analytics.bte-germany.de/js/container_uhweMTLz.js';
            s.parentNode.insertBefore(g, s);
        })();
    }, []);

    useEffect(() => {
        // Connect next.js router to Formbricks
        const handleRouteChange = formbricks?.registerRouteChange;
        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, []);


    return (

        <MantineProvider theme={theme} defaultColorScheme="dark" withCSSVariables withGlobalStyles withNormalizeCSS>

                <Head>
                    <title>BTE Germany</title>
                </Head>

                <ModalsProvider modalProps={{
                    centered: true
                }}>
                    <Notifications/>
                    <SessionProvider>
                        <RouterTransition/>
                        <CookieBanner/>
                        <div style={{display: "flex", minHeight: "100vh", flexDirection: "column"}}>
                            <div style={{flex: 1}}>


                                <Component {...pageProps} />

                            </div>
                            <Footer/>
                        </div>
                    </SessionProvider>
                </ModalsProvider>
        </MantineProvider>
    )
}

export default appWithTranslation(MyApp)
