import React from 'react';
import {Box, Button, createStyles, Title} from "@mantine/core";
import {motion} from "framer-motion";


const useStyle = createStyles((theme) => ({
    overlay: {
        zIndex: 50,
        position: "absolute",
        backgroundImage: "url(/heroOverlay.svg)",
        height: "100%",
        width: "100vw",
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
            lineHeight: 1
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
        width: "100vw",
        zIndex: 20,
        objectFit: "cover"

    }
}))


const Hero = props => {

    const {classes} = useStyle();

    return (
        <div>
            <Box className={classes.background}>
                <video src="/hero.mp4" className={classes.heroVideo} autoPlay muted></video>
                <Box className={classes.overlay}>

                        <Title size={100}>
                            {
                                "We’re building Germany in Minecraft.".split(" ").map((word, index) => {
                                    return <motion.span style={{display: "inline-block", marginRight: "1.3rem"}} key={index} initial={{opacity: 0, y: 30}}
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


                </Box>
            </Box>
        </div>
    );
}

export default Hero
