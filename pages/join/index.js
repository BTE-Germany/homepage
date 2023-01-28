import Navbar from "../../components/Navbar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Badge, Button, Card, Group, SimpleGrid, Title, Image, Text, Container} from "@mantine/core";
import {useTranslation} from "next-i18next";

export default function Index() {

    const {t} = useTranslation();

    return (
        <div>
            <Navbar disableAnimation />

            <div style={{height: "150px"}}></div>

            <Title align={"center"} mb={"xl"}>{t('join:title')}</Title>

            <Container size={"xl"}>
                <SimpleGrid cols={3} >
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section component="a" href="https://mantine.dev/">
                            <Image
                                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                On Sale
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                            Book classic tour now
                        </Button>
                    </Card>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section component="a" href="https://mantine.dev/">
                            <Image
                                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                On Sale
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                            Book classic tour now
                        </Button>
                    </Card>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section component="a" href="https://mantine.dev/">
                            <Image
                                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                On Sale
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                            Book classic tour now
                        </Button>
                    </Card>
                </SimpleGrid>
            </Container>

        </div>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'join',
            ])),
        },
    }
}