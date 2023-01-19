import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import {Anchor, Container, Grid, MediaQuery, Space, Text, Title} from "@mantine/core";
import FloatingImages, {FloatingImage} from "../components/FloatingImages";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Trans, useTranslation} from "next-i18next";

export default function Home() {


    const [navVisible, setNavVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setNavVisible(true);
        }, 1500)
    }, []);

    const {t} = useTranslation()

    const builderCount = 2000;


    return (
        <div style={{overflowX: "hidden"}}>

            <Navbar/>
            <Hero/>
            <div style={{height: "300px"}}/>

            <Container size="xl">
                <Grid>
                    <MediaQuery smallerThan="lg" styles={{display: 'none'}}>
                        <Grid.Col sm={12} lg={6}>

                            <FloatingImages>
                                <FloatingImage speed={70 * 2} z={0} offsetY={-50} offsetX={-50} h={350} w={200}
                                               url={"https://cms.bte-germany.de/assets/0460d0cd-de39-4172-8fa3-b227e9eec111?format=webp"}/>
                                <FloatingImage speed={90 * 2} offsetX={150} offsetY={80} z={5}
                                               url={"https://cms.bte-germany.de/assets/13c7bff1-0c62-403c-836d-a82277d6915b?format=webp"}/>
                                <FloatingImage speed={110 * 2} offsetX={-100} offsetY={280} z={10} h={400} w={250}
                                               url={"https://cms.bte-germany.de/assets/f5ae9a23-69e6-4170-baaa-39da23b959f1?format=webp"}/>
                            </FloatingImages>
                        </Grid.Col>
                    </MediaQuery>
                    <Grid.Col sm={12} lg={6}>
                        <Text tt="uppercase" variant="gradient"
                              gradient={{from: 'blue', to: 'cyan', deg: 45}} fw={700}
                              sx={{fontFamily: '"Lexend Deca", sans-serif'}}>
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
                        </Text>
                    </Grid.Col>
                </Grid>
                <Space h={{sm: 450, base: 150}}/>
                <Grid>
                    <Grid.Col sm={12} lg={6}>
                        <Text tt="uppercase" variant="gradient"
                              gradient={{from: 'blue', to: 'cyan', deg: 45}} fw={700}
                              sx={{fontFamily: '"Lexend Deca", sans-serif'}}>
                            Wer wir sind
                        </Text>
                        <Title mb={"md"}>
                            Unser Antrieb: die Community.

                        </Title>
                        <Text color={"dimmed"}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet.
                        </Text>
                    </Grid.Col>
                    <MediaQuery smallerThan="lg" styles={{display: 'none'}}>
                        <Grid.Col sm={12} lg={6}>
                            <FloatingImages>
                                <FloatingImage speed={70 * 2} z={0} offsetY={-50} offsetX={50} h={350} w={200}
                                               url={"https://cms.bte-germany.de/assets/fcfdf894-491a-4249-a293-e06f0d51a413?format=webp"}/>
                                <FloatingImage speed={90 * 2} offsetX={300} offsetY={80} z={5}
                                               url={"https://cms.bte-germany.de/assets/38ea4cf1-d2d0-416c-bdad-5eddfebe62a5?format=webp"}/>
                                <FloatingImage speed={110 * 2} offsetX={80} offsetY={240} z={10} h={400} w={250}
                                               url={"https://cms.bte-germany.de/assets/4868a449-820f-4a13-a7b6-0fb837b2c3c1?format=webp"}/>
                            </FloatingImages>
                        </Grid.Col>
                    </MediaQuery>

                </Grid>

            </Container>

            <div style={{height: "200vh"}}/>

        </div>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'home',
            ])),
        },
    }
}
