/*
 * index.js
 *
 * Copyright (c) 2023 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

import Navbar from "../../../components/Navbar";
import {Alert, Anchor, Button, Container, Title} from "@mantine/core";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {IconAlertTriangle} from "@tabler/icons";
import {signIn, useSession} from "next-auth/react";

export default function Apply() {

    const {t} = useTranslation("apply")
    const {status} = useSession();

    return <>

            <Navbar disableAnimation/>

            <div style={{height: "150px"}}></div>


            <Container size={"xl"}>
                <Title>{t('application.title')}</Title>

                {
                    status === "unauthenticated" &&
                    <Alert my={"md"} color={"red"} icon={<IconAlertTriangle size={20}/>}>
                        {t('application.signInRequired')}
                        <Anchor onClick={() => signIn("keycloak")} ml={5}>
                            {t('common:signIn')}
                        </Anchor>
                    </Alert>
                }


            </Container>
    </>
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'apply',
            ])),
        },
    }
}
