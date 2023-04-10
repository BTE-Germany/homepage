import Navbar from "../../components/Navbar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Badge, Button, Card, Group, SimpleGrid, Title, Image, Text, Container, Stack} from "@mantine/core";
import {useTranslation} from "next-i18next";
import { Radio } from '@mantine/core';
import {IconArrowRight, IconDeviceDesktop, IconDeviceMobile} from "@tabler/icons";


export default function Index() {

    const {t} = useTranslation();

    return (
        <div>
            <Navbar disableAnimation />

            <div style={{height: "150px"}}></div>



            <Container size={"xl"}>
                <Title>{t('join:title')}</Title>
                <Text mb={"xl"} color={"dimmed"}>
                    {t('join:subtitle')}
                </Text>

                <Card withBorder>
                    <Title order={4}>On which platform do you play?</Title>

                    <Radio.Group mt={"md"}>

                            <Stack>
                                <Radio value="java" label={<Group><IconDeviceDesktop size={20}/><Text>Windows, Mac, Linux</Text> </Group>} size="lg" />
                                <Radio value="bedrock" label={<Group><IconDeviceMobile size={20}/><Text>Mobile or game console</Text> </Group>} size="lg" />
                            </Stack>

                    </Radio.Group>

                    <Button mt={"xl"} rightIcon={<IconArrowRight size={18}/>}>Next</Button>
                </Card>
            </Container>

        </div>
    )
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'join',
            ])),
        },
    }
}
