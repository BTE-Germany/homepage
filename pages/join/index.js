import Navbar from "../../components/Navbar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Box, Button, Card, Container, Flex, Grid, Text, Title} from "@mantine/core";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import ImgBuild from "../../public/build.png";
import ImgVisit from "../../public/visit.png";
import {IconArrowRight} from "@tabler/icons-react";
import Link from "next/link";


export default function Index() {

    const {t} = useTranslation("join");


    return (
        <div>
            <Navbar disableAnimation/>

            <div style={{height: "150px"}}></div>


            <Container size={"xl"}>
                <Title>{t('join:title')}</Title>

                <Grid grow justify="center" mt={"xl"} align={"stretch"}>
                    <Grid.Col span={{md: 12, lg: 6}} >
                        <Card style={{padding: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
                            <Box h={200} w={"100%"} style={{overflow: "hidden", position: "relative"}}>
                                <Image src={ImgVisit} alt={"Visit"} fill={true} style={{objectFit: "cover"}} placeholder={"blur"} quality={100}/>

                            </Box>
                            <Box p={"md"} style={{flex: 1}}>
                                <Flex direction={"column"} h={"100%"}>
                                    <div style={{flex: 1, height: "100%"}}>
                                        <Title size={"h3"}>{t('visit')}</Title>
                                        <Text color={"dimmed"}>{t('visitDescription')}</Text>
                                    </div>
                                    <Button mt={"xl"} rightIcon={<IconArrowRight size={18} />} component={Link} href={"/join/visit"}>{t('joinServer')}</Button>
                                </Flex>


                            </Box>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{md: 12, lg: 6}}>
                        <Card style={{padding: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
                            <Box h={200} w={"100%"} style={{overflow: "hidden", position: "relative"}}>
                                <Image src={ImgBuild} alt={"Build"} fill={true} style={{objectFit: "cover"}} placeholder={"blur"} quality={100}/>

                            </Box>
                            <Box p={"md"} style={{flex: 1}}>
                                <Flex direction={"column"} h={"100%"}>
                                    <div>
                                        <Title size={"h3"}>{t('build')}</Title>
                                        <Text color={"dimmed"}>{t('buildDescription')}</Text>
                                    </div>
                                    <Button mt={"xl"} rightIcon={<IconArrowRight size={18} />} component={Link} href={"https://buildtheearth.net/teams/de/apply"}>{t('startApplication')}</Button>
                                </Flex>
                            </Box>
                        </Card>
                    </Grid.Col>

                </Grid>
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
