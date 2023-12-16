import React from 'react';
import {Box, Button, Text, Title} from "@mantine/core";
import {motion} from "framer-motion";
import ArrowDownAnimation from "./ArrowDownAnimation";
import {useTranslation} from "next-i18next";
import classes from "./styles/Hero.module.css";


const Hero = props => {

    const {t} = useTranslation("home")

    let textArray = t("home:hero.title").replace(".", "").split(" ");
    textArray.push(".")

    return (
        <div>
            <Box className={classes.background}>
                <video src="/hero2small.mp4" className={classes.heroVideo} autoPlay muted></video>
                <Box className={classes.overlay}>

                        <Title>
                            {
                                textArray.map((word, index) => {
                                    return <motion.span style={{display: "inline-block", marginRight: (textArray.length-(index+1) !== 1) ? "1.3rem" : "0"}} key={index} initial={{opacity: 0, y: 30}}
                                                        animate={{opacity: 1, y: 0}} transition={{

                                        default: {
                                            delay: index * 0.15,
                                            duration: 1,
                                            ease: "easeOut"
                                        }
                                    }}>{word} </motion.span>
                                })
                            }
                        </Title>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{

                        default: {
                            delay: textArray.length * 0.15,
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
