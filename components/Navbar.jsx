import React from 'react';
import {Box, Burger, createStyles, MediaQuery, Title} from "@mantine/core";
import {useDisclosure, useWindowScroll} from "@mantine/hooks";
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
    },
    navbarLink: {
        '&:hover': {
            color: "rgba(255,255,255,0.5)"
        }
    }
}));

const Navbar = () => {

    const {classes} = useStyle();
    const [scroll] = useWindowScroll();
    const [showNavLinks, setShowNavLinks] = React.useState(false);

    const [mobileMenuOpen, handlers] = useDisclosure(false);

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
            name: "Docs",
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
                            delay: 0.25,
                            ease: "easeOut"
                        }
                    }}
                    onAnimationComplete={() => setShowNavLinks(true)}
                    className={classes.navbarBox} style={{height: (scroll.y >= 150) ? "80px" : "100px"}}
        >
            <Image src={"/logo.gif"} width={50} height={50} alt={"logo"}/>
            <Title order={3} ml={"md"}>BTE Germany</Title>
            <Box style={{marginLeft: "auto", display: "flex", alignItems: "center"}}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={mobileMenuOpen}
                        onClick={() => handlers.toggle()}
                    />
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <AnimatePresence>
                        {showNavLinks && <>
                            {
                                linkList.map((link, index) => {
                                    return (
                                        <Box key={index} style={{marginLeft: "1.5rem", cursor: "pointer"}}>
                                            <motion.a
                                                initial={{opacity: 0, y: 10}}
                                                animate={{opacity: 1, y: 0}} transition={{
                                                delay: index * 0.1,
                                                default: {
                                                    duration: 0.3,
                                                    ease: "easeOut"
                                                }
                                            }}
                                                style={{display: "inline-block"}}
                                                className={classes.navbarLink}
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
                </MediaQuery>



            </Box>
        </motion.div>
    );
}

export default Navbar
