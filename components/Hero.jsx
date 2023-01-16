import React from 'react';
import {Box, Button, createStyles, Text, Title} from "@mantine/core";
import {motion} from "framer-motion";
import ArrowDownAnimation from "./ArrowDownAnimation";
import {useTranslation} from "next-i18next";


const useStyle = createStyles((theme) => ({
    overlay: {
        zIndex: 50,
        position: "absolute",
        backgroundImage: "url(/heroOverlay.svg)",
        height: "100%",
        width: "calc(100vw - (100vw - 100%))",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        '& h1': {
            fontFamily: "Lexend Deca, sans-serif",
            fontWeight: 900,
            color: "white",
            fontSize: "80px",
            [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
                fontSize: "40px",
            },
            lineHeight: 1,
            textAlign: "center",
        }

    },
    background: {
        backgroundImage: "url(/hero.png)",
        height: "100vh",
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    heroVideo: {
        position: "absolute",
        height: "100%",
        width: "calc(100vw - (100vw - 100%))",
        zIndex: 20,
        objectFit: "cover"

    }
}))


const Hero = props => {

    const {classes} = useStyle();
    const {t} = useTranslation("home")

    let textArray = t("home:hero.title").split(" ");
    textArray.push(".")

    return (
        <div>
            <Box className={classes.background}>
                <video src="/hero.mp4" className={classes.heroVideo} autoPlay muted></video>
                <Box className={classes.overlay}>

                        <Title>
                            {
                                textArray.map((word, index) => {
                                    return <motion.span style={{display: "inline-block", marginRight: (textArray.length-(index+1) !== 1) ? "1.3rem" : "0"}} key={index} initial={{opacity: 0, y: 30}}
                                                        animate={{opacity: 1, y: 0}} transition={{
                                        delay: index * 0.15,
                                        default: {
                                            duration: 1,
                                            ease: "easeOut"
                                        }
                                    }}>{word} </motion.span>
                                })
                            }
                        </Title>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                        delay: textArray.length * 0.15,
                        default: {
                            duration: 1,
                            ease: "easeOut"
                        }
                    }} style={{
                        position: "absolute",
                        bottom: 100,
                    }}>
                        <ArrowDownAnimation />
                    </motion.div>




                </Box>
            </Box>
        </div>
    );
}

export default Hero
