import Navbar from "../../../components/Navbar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Box, Button, Code, Container, Group, PinInput, Stack, Stepper, Text, Title} from "@mantine/core";
import {Trans, useTranslation} from "next-i18next";
import {IconCheck, IconCode, IconCommand, IconInfoCircle, IconInputSearch} from "@tabler/icons-react";
import React, {useState} from "react";
import ConfettiExplosion from "react-confetti-explosion";
import Link from "next/link";
import axios from "axios";
import {showNotification} from "@mantine/notifications";
import {signIn, useSession} from "next-auth/react";
import * as Sentry from "@sentry/nextjs";


export default function MinecraftLink() {
    const {t} = useTranslation("profile");
    const [active, setActive] = useState(0)
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");

    const {status, data: sessionData} = useSession({
        required: true,
        onUnauthenticated() {
            signIn("keycloak");
        },
    });

    const linkAccount = async () => {
        setLoading(true)
        Sentry.addBreadcrumb({
            category: "mcLink",
            message: `User is trying to link their Minecraft account with linking code ${code}`,
            level: "info",
        });
        try {
            let {data: responseData} = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/links/minecraft`, {code}, {headers: {authorization: "Bearer " + sessionData.accessToken}})
            setUsername(responseData.username)
        } catch (e) {
            console.error(e)
            Sentry.addBreadcrumb({
                category: "mcLink",
                message: JSON.stringify(e.response),
                level: "debug",
            });
            const id = Sentry.captureException(e);

            showNotification({
                color: "red",
                title: t('common:error'),
                message: t('link.minecraft.error') + " Trace-ID: " + id
            })
            setError(true)
            return;
        } finally {
            setLoading(false)
        }
        setActive(2)
    }

    return (
        <>
            <Navbar disableAnimation />
            <div style={{height: "150px"}}></div>
            <Container size={"xl"}>
                <Title mb={"xl"}>{t('link.minecraft.title')}</Title>
                <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
                    <Stepper.Step icon={<IconInfoCircle size="1.1rem" />} />
                    <Stepper.Step icon={<IconInputSearch size="1.1rem" />} />
                    <Stepper.Step icon={<IconCheck size="1.1rem" />} />
                </Stepper>

                <Box mt={"xl"}>
                    {active === 0 &&
                        <>
                            <Stack>
                                <div>
                                    <Trans i18nKey={"link.minecraft.howTo"}>
                                        To link your account, join our Minecraft server using the ip <Code>bte-germany.de</Code>. Then type in the command to link your Minecraft account <Code>/link</Code>. Now you will get a code, which you can use on the next page.
                                    </Trans>
                                </div>

                                <Button onClick={event => setActive(1)}>{t('link.minecraft.next')}</Button>
                            </Stack>
                    </>}

                    {active === 1 &&
                        <>
                            <Stack>
                                <div>
                                    {t("link.minecraft.enterCode")}
                                    <Group position="center" my={"xl"}>
                                        <PinInput size={"xl"} length={6} value={code} onChange={setCode} error={error}/>
                                    </Group>
                                </div>

                                <Group w={"100%"} grow>
                                    <Button onClick={event => setActive(0)} variant={"light"}>{t('link.minecraft.previous')}</Button>
                                    <Button onClick={event => linkAccount()} loading={loading}>{t('link.minecraft.next')}</Button>
                                </Group>
                            </Stack>
                        </>}

                    {active === 2 &&
                        <>
                            <Stack align={"center"} mt={"xl"}>
                                <Title>{t("link.minecraft.successTitle")}</Title>
                                <ConfettiExplosion />
                                <Text>{t("link.minecraft.successText", {username})}</Text>
                                <Button mt={"xl"} variant={"outline"} component={Link} href={"/profile#links"}>
                                    {t("link.minecraft.backToProfile")}
                                </Button>
                            </Stack>
                        </>}
                </Box>
            </Container>

        </>
    )
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'profile',
            ])),
        },
    }
}