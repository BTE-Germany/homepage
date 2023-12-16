/*
 * index.js
 *
 * Copyright (c) 2023 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

import Navbar from "../../../components/Navbar";
import {
    Alert,
    Anchor,
    Box,
    Button,
    Checkbox,
    Container,
    Group,
    Loader,
    Stack,
    Text,
    TextInput,
    Title
} from "@mantine/core";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {IconAlertTriangle, IconLifebuoy, IconUser} from "@tabler/icons-react";
import {signIn, useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import {useForm} from "@mantine/form";
import CardRadio from "../../../components/CardRadio";

export default function Apply() {

    const {t} = useTranslation("apply")
    const {status, data: sessionData} = useSession({
        required: true,
        onUnauthenticated() {
            signIn("keycloak");
        },
    });

    const [loading, setLoading] = useState(true);

    const [userLinks, setUserLink] = useState([]);

    const getData = async () => {
        setLoading(true);
        const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/@me/links`, {headers: {authorization: "Bearer " + sessionData.accessToken}});
        setUserLink(response)
        setLoading(false);
    }

    useEffect(() => {
        if (status != "authenticated") return;
        getData()
    }, [status])


    return <>

        <Navbar disableAnimation/>

        <div style={{height: "150px"}}></div>


        <Container size={"xl"}>
            <Title>{t('application.title')}</Title>

            {
                status === "unauthenticated" &&
                <Alert my={"md"} color={"red"} icon={<IconAlertTriangle size={20}/>} title={t('application.signInRequiredTitle')}>
                    {t('application.signInRequired')}
                    <Anchor onClick={() => signIn("keycloak")} ml={5}>
                        {t('common:signIn')}
                    </Anchor>
                </Alert>
            }

            {
                status === "authenticated" && loading &&
                <Stack align={"center"} my={150}>
                    <Loader/>
                    <Text c={"dimmed"} size={"sm"}>Einen Moment bitte..</Text>
                </Stack>
            }
            {
                (status === "authenticated" && !loading && (userLinks.filter((l) => l.type === "DISCORD").length === 0 ||
                    userLinks.filter((l) => l.type === "MINECRAFT").length === 0)) ?
                    <>
                        <Alert my={"md"} color={"red"} icon={<IconAlertTriangle size={20}/>} title={t('application.linkRequiredTitle')}>
                            {t('application.linkRequired')}
                            <Anchor component={Link} href={"/profile#links"} ml={5}>
                                {t('application.toAccountPage')}
                            </Anchor>
                        </Alert>
                    </>
                    : <>
                        {!loading &&
                            <Box mt={"xl"}>
                                <ApplicationForm linkedAccounts={userLinks}/>
                            </Box>
                        }
                    </>
            }


        </Container>
    </>
}

const ApplicationForm = ({linkedAccounts}) => {

    const {t} = useTranslation('apply');

    const form = useForm({
        initialValues: {
            minecraftUsername: '',
            discordUsername: '',
            applyAs: 'builder'
        },
    });

    useEffect(() => {
        form.setFieldValue('minecraftUsername', linkedAccounts.filter((l) => l.type === "MINECRAFT")[0].providerUsername)
        form.setFieldValue('discordUsername', linkedAccounts.filter((l) => l.type === "DISCORD")[0].providerUsername)
    }, [linkedAccounts])

    return <>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Box mt={"md"} mb={"xl"}>
                <Text size={"sm"} fw={"bold"} mb={"sm"}>{t('application.applicationType')}</Text>
                <CardRadio grow options={[{
                    icon: <IconUser />,
                    label: "Builder",
                    value: "builder"
                }, {
                    icon: <IconLifebuoy />,
                    label: "Trial",
                    value: "trial",
                    unavailable: true
                }]} {...form.getInputProps('applyAs')} />
            </Box>
            <Group grow gap={"xl"}>
                <TextInput
                    withAsterisk
                    label={t('application.minecraftUsername')}
                    placeholder=""
                    disabled
                    {...form.getInputProps('minecraftUsername')}
                />

                <TextInput
                    withAsterisk
                    label={t('application.discordUsername')}
                    placeholder=""
                    disabled
                    {...form.getInputProps('discordUsername')}
                />

            </Group>

            

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
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
