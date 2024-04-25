import React from 'react';
import { Box, Burger, Menu, Title, UnstyledButton, Image, Text, Group } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { IconChevronDown, IconCircles, IconMail, IconNews, IconUsers } from "@tabler/icons-react";
import { useRouter } from "next/router";
import UserButton from "./UserButton";
import classes from "./styles/Navbar.module.css";


const Navbar = ({ disableAnimation }) => {

    const { t, i18n } = useTranslation();

    const [scroll] = useWindowScroll();
    const [showNavLinks, setShowNavLinks] = React.useState(false);

    const [mobileMenuOpen, handlers] = useDisclosure(false);

    const router = useRouter()
    const { pathname, asPath, query } = router


    const linkList = [
        {
            name: t("common:navigation.getStarted"),
            link: "/join"
        },
        {
            name: t("common:navigation.map"),
            link: "https://map.bte-germany.de"
        },
        {
            name: t("common:navigation.faq"),
            link: "/faq"
        },
        {
            name: t("common:navigation.store"),
            link: "/store"
        },
        {
            name: t("common:navigation.about"),
            links: [
                {
                    name: t("common:navigation.ourTeam"),
                    link: "/team",
                    icon: <IconUsers size={18} />
                },
                {
                    name: t("common:navigation.association"),
                    link: "https://org.bte-germany.de",
                    icon: <IconCircles size={18} />
                },
                {
                    name: t("common:navigation.contact"),
                    link: "/contact",
                    icon: <IconMail size={18} />
                },
                /*{
                    name: t("common:navigation.press"),
                    link: "/press",
                    icon: <IconNews size={18} />
                }*/
            ]
        }
    ]

    return (
        <motion.div initial={{ y: !disableAnimation ? -100 : 0 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{
                default: {
                    duration: !disableAnimation ? 1 : 0,
                    delay: 0.25,
                    ease: "easeOut"
                }
            }}
            onAnimationComplete={() => setShowNavLinks(true)}
            className={classes.navbarBox} style={{
                paddingTop: (scroll.y >= 150) ? "10px" : "20px",
                paddingBottom: (scroll.y >= 150) ? "10px" : "20px"
            }}
        >
            <Box style={{ display: "flex", width: "100%", alignItems: "center" }}>
                <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                    <Image src={"/logo.gif"} width={50} height={50} alt={"logo"} className={"w-[50px] h-[50px]"}/>
                    <Title order={3} ml={"md"}>BTE Germany</Title>
                </Link>
                <Box style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                    <Box hiddenFrom="md">
                        <Burger
                            opened={mobileMenuOpen}
                            onClick={() => handlers.toggle()}
                        />
                    </Box>


                    <Box visibleFrom='md' style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>


                        <AnimatePresence>
                            {showNavLinks && <>
                                {
                                    linkList.map((link, index) => {
                                        return (
                                            <Box key={index} visibleFrom="md">
                                                <Box style={{ marginLeft: "1.5rem", cursor: "pointer" }}>
                                                    <motion.a
                                                        initial={{ opacity: !disableAnimation ? 0 : 1, y: !disableAnimation ? 10 : 0 }}
                                                        animate={{ opacity: 1, y: 0 }} transition={{
                                                            delay: index * 0.05,
                                                            default: {
                                                                duration: 0.3,
                                                                ease: "easeOut"
                                                            }
                                                        }}
                                                        style={{ display: "inline-block" }}
                                                        className={classes.navbarLink}
                                                    >
                                                        {
                                                            link.links ?
                                                                <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
                                                                    <Menu.Target>
                                                                        <Group gap={"sm"}>
                                                                            {link.name} <IconChevronDown size={18} />
                                                                        </Group>
                                                                    </Menu.Target>

                                                                    <Menu.Dropdown>
                                                                        {
                                                                            link.links.map((link, index) => {
                                                                                return (
                                                                                    <Link href={link.link} key={index}>
                                                                                        <Menu.Item
                                                                                            leftSection={link.icon} href={link.link}>{link.name}</Menu.Item>
                                                                                    </Link>

                                                                                )
                                                                            })
                                                                        }
                                                                    </Menu.Dropdown>
                                                                </Menu>
                                                                : <Link href={link.link}>
                                                                    {link.name}
                                                                </Link>
                                                        }
                                                    </motion.a>
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                                <Box visibleFrom="md">
                                    <motion.div initial={{ opacity: !disableAnimation ? 0 : 1, y: !disableAnimation ? 10 : 0 }}
                                        animate={{ opacity: 1, y: 0 }} transition={{
                                            delay: (linkList.length + 1) * 0.05,
                                            default: {
                                                duration: 0.3,
                                                ease: "easeOut"
                                            }
                                        }}>
                                        <UserButton />
                                    </motion.div>
                                </Box>
                            </>}


                        </AnimatePresence>

                    </Box>


                </Box>
            </Box>

            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div initial={{
                            height: 0,
                            opacity: 0,
                        }}
                            animate={{
                                height: "auto",
                                opacity: 1,
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                            }} transition={{
                                default: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                }
                            }} style={{ textAlign: "center", marginTop: "10px" }}>
                            {
                                linkList.map((link, index) => {
                                    return (
                                        <Box key={index} style={{ marginLeft: "1.5rem", cursor: "pointer" }}>
                                            <motion.span
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }} transition={{
                                                    delay: index * 0.1,
                                                    default: {
                                                        duration: 0.3,
                                                        ease: "easeOut"
                                                    }
                                                }}
                                                style={{ display: "inline-block", margin: "5px 0" }}
                                                className={classes.navbarLink}
                                            >
                                                {
                                                    link.links ?
                                                        <Menu shadow="md" width={200} trigger="click" openDelay={100} closeDelay={400}>
                                                            <Menu.Target>
                                                                <Group spacing={5}>
                                                                    {link.name} <IconChevronDown size={18} />
                                                                </Group>
                                                            </Menu.Target>

                                                            <Menu.Dropdown>
                                                                {
                                                                    link.links.map((link, index) => {
                                                                        return (
                                                                            <Link href={link.link} key={index}>
                                                                                <Menu.Item
                                                                                    leftSection={link.icon} href={link.link}>{link.name}</Menu.Item>
                                                                            </Link>

                                                                        )
                                                                    })
                                                                }
                                                            </Menu.Dropdown>
                                                        </Menu>
                                                        : <Link href={link.link}>
                                                            {link.name}
                                                        </Link>
                                                }
                                            </motion.span>
                                        </Box>

                                    )
                                })
                            }
                            <motion.div initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }} transition={{
                                    delay: (linkList.length + 1) * 0.1,
                                    default: {
                                        duration: 0.3,
                                        ease: "easeOut"
                                    }

                                }} style={{ display: "inline-block", margin: "5px 0" }}>
                                <UserButton />
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </motion.div>
    );
}

export default Navbar
