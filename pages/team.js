'use client';
import Navbar from "../components/Navbar";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {createDirectus, readItems, rest} from "@directus/sdk";
import {SimpleGrid, Paper, Avatar, Text, Container, Title, Box} from "@mantine/core";
import {Trans, useTranslation} from "next-i18next";
export default function Team({ content }) {

    const {t} = useTranslation("common");

    return (
        <>

            <Navbar disableAnimation />
            <div style={{ height: "150px" }}></div>

            <Container size={"xl"}>
                <Title mb="lg">{t('navigation.ourTeam')}</Title>
                <SimpleGrid cols={{sm: 1, md: 2, lg: 3}}>
                    {
                        content.map((item, id) => {
                            return (
                                <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)" key={id}>
                                    <Avatar
                                        src={"https://cms.bte-germany.de/assets/" + item.avatar + "?format=webp&quality=50"}
                                        size={120}
                                        radius={120}
                                        mx="auto"
                                    />
                                    <Text ta="center" fz="xl" fw={600} mt="md">
                                        @{item.username}
                                    </Text>
                                    <Text ta="center" c={item.role.color} fz="sm">
                                        {item.role.name}
                                    </Text>
                                </Paper>
                            );
                        })
                    }
                    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)" component={"a"} href="https://buildthe.earth/apply">
                        <Box
                            w={120}
                            h={120}
                            style={{border: "dashed 3px white", borderRadius: "50%", opacity: 0.5}}
                            mx="auto"
                        />
                        <Text ta="center" fz="xl" fw={600} mt="md">
                            You?
                        </Text>
                        <Text ta="center" fz="sm">
                            Apply now!
                        </Text>
                    </Paper>
                </SimpleGrid>
            </Container>
        </>

    )
}

export async function getServerSideProps({ locale }) {
    const directus = createDirectus(process.env.CMS_URL).with(rest());
    const contentResult = await directus.request(
        readItems('team', {
            fields: ['*', { role: ['*'] }],
        })
    );

    return {
        props: {
            content: contentResult,
            ...(await serverSideTranslations(locale, [
                'common'
            ])),
        },
    }

}