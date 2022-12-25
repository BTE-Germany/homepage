import React from 'react';
import {Box, createStyles} from "@mantine/core";
import {useWindowScroll} from "@mantine/hooks";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";

const useStyle = createStyles((theme) => ({
    navbarBox: {
        width: "100%",
        backgroundColor: "white",
        position: "fixed",
        left: 0,
        zIndex: 100,
        background: "rgba(0, 0, 0, 0.6)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(7.6px)",
        "-webkit-backdrop-filter": "blur(7.6px)",
        border: "1px solid rgba(0, 0, 0, 0.24)",
        transition: "height 0.3s ease-in-out",
        display: "flex",
        alignItems: "center",
        paddingLeft: "8%",
        paddingRight: "8%",
        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            paddingLeft: "3%",
            paddingRight: "3%",
        },
    }
}));

const Navbar = () => {

    const {classes} = useStyle();
    const [scroll] = useWindowScroll();
    const [showNavLinks, setShowNavLinks] = React.useState(false);

    const linkList = [
        {
            name: "Startseite",
            link: "/"
        },
        {
            name: "Karte",
            link: "/about"
        },
        {
            name: "Tritt uns bei",
            link: "/services"
        },
        {
            name: "FAQ",
            link: "/services"
        },
        {
            name: "Doc",
            link: "/services"
        }
    ]

    return (
        <motion.div initial={{y: -100}}
                    animate={{y: 0}}
                    exit={{y: -100}}
                    transition={{
                        default: {
                            duration: 1,
                            delay: 2,
                            ease: "easeOut"
                        }
                    }}
                    onAnimationComplete={() => setShowNavLinks(true)}
                    className={classes.navbarBox} style={{height: (scroll.y >= 150) ? "80px" : "100px"}}
        >
            <Image src={"/logo.gif"} width={50} height={50} alt={"logo"}/>
            <Box style={{marginLeft: "auto", display: "flex", alignItems: "center"}}>
                <AnimatePresence>
                    {showNavLinks && <>
                        {
                            linkList.map((link, index) => {
                                return (
                                    <Box key={index} style={{marginLeft: "1.5rem", cursor: "pointer"}}>
                                        <motion.a
                                            initial={{opacity: 0, y: 30}}
                                            animate={{opacity: 1, y: 0}} transition={{
                                            delay: index * 0.15,
                                            default: {
                                                duration: 1,
                                                ease: "easeOut"
                                            }
                                        }}
                                        >
                                            <Link href={link.link}>
                                                {link.name}
                                            </Link>
                                        </motion.a>
                                    </Box>
                                )
                            })
                        }
                    </>}

                </AnimatePresence>

            </Box>
        </motion.div>
    );
}

export default Navbar
