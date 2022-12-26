import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import {Container, Grid, Text, Title} from "@mantine/core";
import FloatingImages, {FloatingImage} from "../components/FloatingImages";

export default function Home() {

    const [navVisible, setNavVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setNavVisible(true);
        }, 1500)
    }, []);


    return (
        <div style={{overflowX: "hidden"}}>

            <Navbar/>
            <Hero/>
            <div style={{height: "300px"}}/>

            <Container size="xl">
                <Grid>
                    <Grid.Col md={12} lg={6}>
                        <FloatingImages>
                            <FloatingImage speed={70*2} z={0} offsetY={-50} offsetX={-50} h={350} w={200} url={"https://cms.bte-germany.de/assets/0460d0cd-de39-4172-8fa3-b227e9eec111"}/>
                            <FloatingImage speed={90*2} offsetX={150} offsetY={80}  z={5} url={"https://cms.bte-germany.de/assets/13c7bff1-0c62-403c-836d-a82277d6915b"}/>
                            <FloatingImage speed={110*2} offsetX={-100} offsetY={280}  z={10} h={400} w={250} url={"https://cms.bte-germany.de/assets/f5ae9a23-69e6-4170-baaa-39da23b959f1"}/>
                        </FloatingImages>
                    </Grid.Col>
                    <Grid.Col md={12} lg={6}>
                        <Text tt="uppercase" variant="gradient"
                              gradient={{from: 'blue', to: 'cyan', deg: 45}} fw={700} sx={{ fontFamily: '"Lexend Deca", sans-serif' }}>
                            Über uns
                        </Text>
                        <Title mb={"md"}>
                            Das ist BTE Germany.

                        </Title>
                        <Text  color={"dimmed"}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </Text>
                    </Grid.Col>
                </Grid>
                <div style={{height: "300px"}}/>
                <Grid>
                    <Grid.Col md={12} lg={6}>
                        <Text tt="uppercase" variant="gradient"
                              gradient={{from: 'blue', to: 'cyan', deg: 45}} fw={700} sx={{ fontFamily: '"Lexend Deca", sans-serif' }}>
                            Wer wir sind
                        </Text>
                        <Title mb={"md"}>
                            Unser Antrieb: die Community.

                        </Title>
                        <Text  color={"dimmed"}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </Text>
                    </Grid.Col>
                    <Grid.Col md={12} lg={6}>
                        <FloatingImages>
                            <FloatingImage speed={70*2} z={0} offsetY={-50} offsetX={50} h={350} w={200} url={"https://cms.bte-germany.de/assets/fcfdf894-491a-4249-a293-e06f0d51a413"}/>
                            <FloatingImage speed={90*2} offsetX={300} offsetY={80}  z={5} url={"https://cms.bte-germany.de/assets/38ea4cf1-d2d0-416c-bdad-5eddfebe62a5"}/>
                            <FloatingImage speed={110*2} offsetX={80} offsetY={240}  z={10} h={400} w={250} url={"https://cms.bte-germany.de/assets/4868a449-820f-4a13-a7b6-0fb837b2c3c1"}/>
                        </FloatingImages>
                    </Grid.Col>

                </Grid>

            </Container>

            <div style={{height: "200vh"}}/>

        </div>
    )
}
