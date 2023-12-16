import { Container, Title, Box, SimpleGrid, Group, Avatar, Text } from "@mantine/core";
import Navbar from "../components/Navbar";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";

import classes from "./styles/contact.module.css";

export default function Contact() {
    const { t } = useTranslation("contact");
    return (
        <>
            <Navbar disableAnimation />
            <div style={{ height: "150px" }}></div>

            <Container size={"xl"}>
                <Box style={{ background: "url(/bg2.jpg)", height: 300, backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "var(--mantine-radius-md)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.55)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "var(--mantine-radius-md)" }} >
                        <Title order={1}>{t('title')}</Title>
                    </div>

                </Box>

                <Box mt="md">
                    <SimpleGrid cols={{sm: 1, md: 2}} mt="xl">
                        <div>
                            <Group wrap="nowrap">
                                <Avatar
                                    src="/avatars/leander.png"
                                    size={94}
                                    radius="md"
                                />
                                <div>
                                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                                        {t('general')}
                                    </Text>

                                    <Text fz="lg" fw={500} className={classes.name}>
                                        Leander S.
                                    </Text>

                                    <Group wrap="nowrap" gap={10} mt={3}>
                                        <IconAt stroke={1.5} size="1rem" className={classes.icon}/>
                                        <Text fz="xs" c="dimmed" component={"a"}
                                              href={"mailto:leander@bte-germany.de"}>
                                            leander@bte-germany.de
                                        </Text>
                                    </Group>
                                </div>
                            </Group>
                        </div>
                        <div>
                            <Group wrap="nowrap">
                                <Avatar
                                    src="/avatars/robin.png"
                                    size={94}
                                    radius="md"
                                />
                                <div>
                                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                                        {t('generalAndTechnical')}
                                    </Text>

                                    <Text fz="lg" fw={500} className={classes.name}>
                                        Robin Ferch
                                    </Text>

                                    <Group wrap="nowrap" gap={10} mt={3}>
                                        <IconAt stroke={1.5} size="1rem" className={classes.icon}/>
                                        <Text fz="xs" c="dimmed" component={"a"}
                                              href={"mailto:robin.ferch@bte-germany.de"}>
                                            robin.ferch@bte-germany.de
                                        </Text>
                                    </Group>

                                    <Group wrap="nowrap" gap={10} mt={5}>
                                        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon}/>
                                        <Text fz="xs" c="dimmed" component={"a"} href={"tel:+4915791478206"}>
                                            +49 157 91478206
                                        </Text>
                                    </Group>
                                </div>
                            </Group>
                        </div>
                        <div>
                            <Group wrap="nowrap">
                                <Avatar
                                    src="/avatars/moritz.png"
                                    size={94}
                                    radius="md"
                                />
                                <div>
                                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                                        {t('socialMedia')}
                                    </Text>

                                    <Text fz="lg" fw={500} className={classes.name}>
                                        Moritz B.
                                    </Text>

                                    <Group wrap="nowrap" gap={10} mt={3}>
                                        <IconAt stroke={1.5} size="1rem" className={classes.icon}/>
                                        <Text fz="xs" c="dimmed" component={"a"} href={"mailto:moritz@bte-germany.de"}>
                                            moritz@bte-germany.de
                                        </Text>
                                    </Group>

                                </div>
                            </Group>
                        </div>
                    </SimpleGrid>
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
                'contact'
            ])),
        },
    }

}