import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
    createStyles,
    Grid, Group,
    Image,
    rem,
    SimpleGrid,
    Title,
    useMantineTheme
} from "@mantine/core";
import {AnimatePresence, motion} from "framer-motion";
import {IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowUp} from "@tabler/icons-react";
import {useTranslation} from "next-i18next";


const PRIMARY_COL_HEIGHT = rem(500);


const HomeGallery = ({cities}) => {


    let images = cities.map((city) => {
        return city.images.map((image) => {
            return process.env.NEXT_PUBLIC_CMS_ASSETS_URL + image.directus_files_id + "?format=webp"
        })
    })



    const [index, setIndex] = useState(0);

    const words = cities.map((city) => {
        return city.name
    })

    const next = () => {
        if (index+1 >= images.length) {
            setIndex(0)
            return;
        }
        setIndex((prevState) => {return prevState+1})
    }

    const prev = () => {
        if (index === 0) {
            setIndex(images.length-1)
            return;
        }
        setIndex((prevState) => {return prevState-1})
    }

    const {t} = useTranslation();


    useEffect(() => {
        let timeout = setTimeout(() => {
            let next = index + 1;
            setIndex(next % words.length);
        }, 5 * 1000);
        return () => clearTimeout(timeout)
    }, [index, setIndex]);

    return (
        <Container size={"xl"}>
            <Title style={{fontWeight: 500}}>
                {t('home:gallery.title')}
                <TextLoop words={words} index={index}/>
            </Title>


            <SimpleGrid cols={{sm: 1, md: 2}} spacing="md" mt={"xl"} style={{minHeight: PRIMARY_COL_HEIGHT}}>
                <Box style={{display: "inline", position: "relative", width: "100%"}}>
                    <AnimatePresence initial={false}>
                        <motion.div style={{position: "absolute"}}
                                    key={index}
                                    layout
                                    variants={{
                                        enter: {
                                            translateY: 20,
                                            opacity: 0,
                                            height: 0
                                        },
                                        center: {
                                            zIndex: 1,
                                            translateY: 0,
                                            opacity: 1,
                                            height: "auto"
                                        },
                                        exit: {
                                            zIndex: 0,
                                            translateY: -20,
                                            opacity: 0,
                                            height: 0
                                        }
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        translateY: {type: "spring", stiffness: 1000, damping: 200},
                                        opacity: {duration: 0.5}
                                    }}>

                        <Image radius={"md"} style={{height: PRIMARY_COL_HEIGHT}}
                               src={images[index][0]}/>
                        </motion.div>
                    </AnimatePresence>
                </Box>


                <ImageGallery index={index} images={images}/>


            </SimpleGrid>

            <Group mt={"xl"}>
                <IconArrowUp onClick={prev} />
                <IconArrowDown onClick={next} />

            </Group>



        </Container>
    )
        ;
}

const ImageGallery = ({index, images}) => {


    return (

        <div style={{position: "relative"}}>

            <AnimatePresence initial={false}>

                <motion.div
                    key={index}
                    layout
                    initial="enter"

                    animate="center"
                    exit="exit"
                    transition={{
                        delayChildren: 0.2,
                        staggerChildren: 0.1,
                    }}>
                    <ImagesGrid index={index} images={images}/>
                </motion.div>


            </AnimatePresence>

        </div>


    )
}

const ImagesGrid = ({index, images}) => {
    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
    const child = {
        enter: {
            translateY: 20,
            opacity: 0,
            height: "auto"

        },
        center: {
            zIndex: 1,
            translateY: 0,
            opacity: 1,
            height: "auto"
        },
        exit: {
            zIndex: 0,
            translateY: -20,
            opacity: 0,
            height: "auto"
        }
    };
    return (
        <div style={{position: "absolute"}}>
            <Grid h={"100%"} style={{overflow: "visible"}}>
                <Grid.Col span={6}>
                    <motion.div variants={child} transition={{
                        translateY: {type: "spring", stiffness: 1000, damping: 200},
                        opacity: {duration: 0.5},
                    }} layout>
                        <Image radius={"md"} style={{height: SECONDARY_COL_HEIGHT}}
                               src={images[index][1]}/>
                    </motion.div>
                </Grid.Col>
                <Grid.Col span={6}>
                    <motion.div variants={child} transition={{
                        translateY: {type: "spring", stiffness: 1000, damping: 200},
                        opacity: {duration: 0.5},
                    }} layout>
                        <Image radius={"md"} style={{height: SECONDARY_COL_HEIGHT}}
                               src={images[index][2]}/>
                    </motion.div>
                </Grid.Col>
                <Grid.Col>
                    <motion.div variants={child} transition={{
                        translateY: {type: "spring", stiffness: 1000, damping: 200},
                        opacity: {duration: 0.5},
                    }} layout>
                        <Image radius={"md"} style={{height: SECONDARY_COL_HEIGHT}}
                               src={images[index][3]} />
                    </motion.div>

                </Grid.Col>

            </Grid>
        </div>
    )
}

const TextLoop = ({words, index}) => {


    return (
        <Box style={{display: "inline", position: "relative", width: "100%"}}>
            <AnimatePresence initial={false}>
                <motion.span
                    style={{position: "absolute", fontWeight: "bold", marginLeft: "10px"}}
                    key={index}
                    layout
                    variants={{
                        enter: {
                            translateY: 20,
                            opacity: 0,
                            height: 0
                        },
                        center: {
                            zIndex: 1,
                            translateY: 0,
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            zIndex: 0,
                            translateY: -20,
                            opacity: 0,
                            height: 0
                        }
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        translateY: {type: "spring", stiffness: 1000, damping: 200},
                        opacity: {duration: 0.5}
                    }}
                >
                    {words[index]}.
                </motion.span>
            </AnimatePresence>
        </Box>
    );
}

export default HomeGallery
