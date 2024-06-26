import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import React, {useEffect, useState} from "react";
import {Anchor, Box, Button, Container, Grid, Group, MediaQuery, SimpleGrid, Space, Text, Title} from "@mantine/core";
import FloatingImages, {FloatingImage} from "../components/FloatingImages";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Trans, useTranslation} from "next-i18next";
import CountUp from "react-countup";
import {IconArrowRight, IconBuilding, IconDeviceFloppy, IconUsers} from "@tabler/icons-react";
import HomeGallery from "../components/HomeGallery";
import axios from "axios";
import Link from "next/link";

export default function Home({cities, mapStats, cmsAssets}) {


    const [navVisible, setNavVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setNavVisible(true);
        }, 1500)
    }, []);

    const {t} = useTranslation()

    const builderCount = 1204;
    const discordMembers = "20.000";


    return (
        <div style={{overflowX: "hidden"}}>


            <Navbar/>
            <Hero/>

            {/*
            // TODO: Add this back in when asked media outlets for logo usage permission
            <Text mt={"xl"} align={"center"} tt="uppercase" fz="md" c="dimmed">
                {t('home:asSeenIn')}
            </Text>*/}
            <Space h={{sm: 300, base: 50}}/>

            <Container size="xl">
                <Grid style={{overflow: "visible"}}>

                        <Grid.Col span={{sm: 12, lg: 6}} visibleFrom="lg" style={{overflow: "visible"}}>

                            <FloatingImages>
                                <FloatingImage speed={70 * 2} z={0} offsetY={-50} offsetX={-50} h={350} w={200}
                                               url={"https://cms.bte-germany.de/assets/0460d0cd-de39-4172-8fa3-b227e9eec111?format=webp"}/>
                                <FloatingImage speed={110 * 2} offsetX={150} offsetY={80} z={5}
                                               url={"https://cms.bte-germany.de/assets/13c7bff1-0c62-403c-836d-a82277d6915b?format=webp"}/>
                                <FloatingImage speed={60 * 2} offsetX={-100} offsetY={280} z={10} h={400} w={250}
                                               url={"https://cms.bte-germany.de/assets/f5ae9a23-69e6-4170-baaa-39da23b959f1?format=webp"}/>
                            </FloatingImages>
                        </Grid.Col>
                    <Grid.Col span={{sm: 12, lg: 6}}>
                        <Text tt="uppercase" variant="gradient"
                              gradient={{from: 'blue', to: 'cyan', deg: 45}} fw={700}
                              style={{fontFamily: '"Lexend Deca", sans-serif'}}>
                            {t('home:about.subtitle')}
                        </Text>
                        <Title mb={"md"}>
                            {t('home:about.title')}

                        </Title>
                        <Text color={"dimmed"}>
                            <Trans i18nKey="home:about.text" builderCount={builderCount}>
                                Die Mission Build the Earth Germany ist es, das gesamte deutsche Bundesgebiet im Maßstab 1:1 im Computerspiel <Anchor href={"https://minecraft.net"}>Minecraft</Anchor> nachzubauen.
                                Minecraft ist mit über 200 Milliarden Verkäufen das meistverkaufte Videospiel der Welt und funktioniert ähnlich wie ein Legokasten – allerdings
                                mit unendlich vielen Steinen und unendlich viel Platz. Build the Earth Germany ist Teil des <Anchor href={"https://buildtheearth.net"}>Build the Earth</Anchor> Projektes,
                                welches weltweit aktiv ist. Mit über {{builderCount}} aktiv beteiligten Personen ist BTE Germany das international zweitgrößte Bauteam.
                            </Trans>
                            <br/>
                            <Button variant={"default"} mt={"xl"} rightIcon={<IconArrowRight size={20} />} component={Link} href={"/join"}>
                                {t('home:joinUs')}
                            </Button>
                        </Text>
                    </Grid.Col>
                </Grid>
                <Space h={{sm: 450, base: 150}}/>
                <Grid style={{overflow: "visible"}}>
                    <Grid.Col span={{sm: 12, lg: 6}}>
                        <Text tt="uppercase" variant="gradient"
                              gradient={{from: 'blue', to: 'cyan', deg: 45}} fw={700}
                              style={{fontFamily: '"Lexend Deca", sans-serif'}}>
                            {t('home:community.subtitle')}
                        </Text>
                        <Title mb={"md"}>
                            {t('home:community.title')}

                        </Title>
                        <Text color={"dimmed"}>
                            <Trans i18nKey={"home:community.text"} discordMembers={discordMembers}>
                                Without our community, the project could never exist.
                                Each and everyone brings the project forward piece by piece,
                                no matter if you are actively involved in the build or just follow the project from the outside.
                                The entire organization of our build team is done exclusively through our <Anchor href={"https://buildthe.earth/website-de"}>Discord server</Anchor>.
                                Join it today and share ideas about the project with over {{discordMembers}} others.
                                It doesn&apos;t matter if you&apos;ve just started building in Minecraft or are a long-time builder,
                                we will be happy to help you and get you ready to build. We look forward to seeing you!
                            </Trans>
                            <br/>
                            <Button variant={"default"} mt={"xl"} rightIcon={<IconArrowRight size={20} />} component={Link} href={"/join"}>
                                {t('home:joinUs')}
                            </Button>
                        </Text>
                    </Grid.Col>

                        <Grid.Col span={{sm: 12, lg: 6}} visibleFrom="md">
                            <FloatingImages>
                                <FloatingImage speed={70 * 2} z={0} offsetY={-50 -50} offsetX={50} h={350} w={200}
                                               url={"https://cms.bte-germany.de/assets/fcfdf894-491a-4249-a293-e06f0d51a413?format=webp"}/>
                                <FloatingImage speed={90 * 2} offsetX={300} offsetY={80-50} z={5}
                                               url={"https://cms.bte-germany.de/assets/38ea4cf1-d2d0-416c-bdad-5eddfebe62a5?format=webp"}/>
                                <FloatingImage speed={110 * 2} offsetX={80} offsetY={240-50} z={10} h={400} w={250}
                                               url={"https://cms.bte-germany.de/assets/4868a449-820f-4a13-a7b6-0fb837b2c3c1?format=webp"}/>
                            </FloatingImages>
                        </Grid.Col>

                </Grid>




            </Container>

            <Space h={{sm: 300, base: 100}}/>

            <Box  style={{
                color: "var(--mantine-color-gray-1)",
                background: "linear-gradient(45deg, var(--mantine-color-blue-9) 0%, var(--mantine-color-blue-6) 100%)"
            }}>
                <Container size={"xl"} py={50}>
                    <Title mb={"xl"} align={"center"}>{t('home:numbers.title')}</Title>

                    <SimpleGrid cols={{
                        md: 3,
                        xs: 1
                    }} spacing={{
                        md: "md",
                        xs: "80"
                    }}

                     mt={80}>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <Title size={"h1"} className={"flex items-center flex-col"}>
                                <Box style={{textAlign: "center"}}>
                                    <IconUsers size={40} />
                                </Box>
                                <CountUp
                                    start={0}
                                    end={builderCount}
                                    duration={2}
                                    separator="."
                                    decimals={0}
                                    decimal=","
                                    useEasing={true}
                                    enableScrollSpy={true}
                                />
                            </Title>
                            <Title size={"h4"} weight={"normal"}>
                                {t('home:numbers.builder')}
                            </Title>
                        </Box>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <Title size={"h1"} className={"flex items-center flex-col"}>
                                <Box style={{textAlign: "center"}}>
                                    <IconDeviceFloppy size={40} />
                                </Box>
                                <CountUp
                                    start={0}
                                    end={408.11}
                                    duration={2}
                                    separator="."
                                    decimals={2}
                                    decimal=","
                                    suffix={" GB"}
                                    useEasing={true}
                                    enableScrollSpy={true}
                                />
                            </Title>
                            <Title size={"h4"} weight={"normal"}>
                                {t('home:numbers.mapSize')}
                            </Title>
                        </Box>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <Title size={"h1"} className={"flex items-center flex-col"}>
                                <Box style={{textAlign: "center"}}>
                                    <IconBuilding size={40} />
                                </Box>
                                <CountUp
                                    start={0}
                                    end={mapStats.totalBuildings}
                                    duration={2}
                                    separator="."
                                    decimals={0}
                                    decimal=","
                                    useEasing={true}
                                    enableScrollSpy={true}
                                />
                            </Title>
                            <Title size={"h4"} weight={"normal"}>
                                {t('home:numbers.finishedBuildings')}
                            </Title>
                        </Box>
                    </SimpleGrid>

                </Container>
            </Box>

            <Space h={{sm: 200, base: 150}}/>
            <HomeGallery cities={cities} cmsAssets={cmsAssets}/>

            <Box mt={"xl"}>
                <Container size={"xl"} py={50}>
                    <Title align={"center"}>{t('home:cta.title')}</Title>
                    <Text mb={"xl"} align={"center"} >{t('home:cta.subtitle')}</Text>
                    <Group justify={"center"} style={{width: "100%"}}>
                        <Button variant={"default"} mt={"xl"} size={"lg"} rightIcon={<IconArrowRight size={20} />} component={Link} href={"/join"}>
                            {t('home:joinUs')}
                        </Button>
                    </Group>

                </Container>
            </Box>




        </div>
    )
}


export async function getServerSideProps({locale}) {

    let {data: citiesData} = await axios.get(process.env.CMS_URL + "/items/cities?fields=*,images.directus_files_id")
    let {data: mapStatsData} = await axios.get(process.env.MAP_URL + "/api/v1/stats/general")
    return {
        props: {
            cities: citiesData.data,
            mapStats: mapStatsData,
            cmsAssets: process.env.CMS_URL + "/assets/",
            ...(await serverSideTranslations(locale, [
                'common',
                'home',
            ])),
        }
    }
}
