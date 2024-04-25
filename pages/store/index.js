/*
 * index.js
 *
 * Copyright (c) 2024 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

import Navbar from "../../components/Navbar";
import {Container, Grid, Image, Title} from "@mantine/core";
import classes from "../styles/faq.module.css";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import axios from "axios";
import {IconArrowRight, IconCrown, IconHeart} from "@tabler/icons-react";
import Link from "next/link";

export default function Store({products}) {

    const {t} = useTranslation("store");

    return (
        <>
            <Navbar disableAnimation/>
            <div style={{height: "150px"}}></div>
            <Container size="xl" className={classes.wrapper}>
                <Title ta="center" className={classes.title}>
                    {t('store:title')}
                </Title>

                <Grid mb={"xs"}>
                    {/*<Grid.Col span={6}>
                        <div className={"w-full rounded-md bg-gradient-to-br from-blue-600 to-blue-800 py-8 text-white flex items-center flex-col hover:scale-[1.02] transition-transform"}>
                            <IconCrown size={50}/>
                            <Title ta="center">
                                Plus Rank
                            </Title>
                        </div>
                    </Grid.Col>*/}
                    <Grid.Col span={12}>
                        <Link className={"w-full rounded-md bg-gradient-to-br from-green-600 to-green-900 py-8 text-white flex items-center flex-col hover:scale-[1.02] transition-transform"} href={"/donate"}>
                            <IconHeart size={50}/>
                            <Title ta="center">
                                Donate
                            </Title>
                        </Link>
                    </Grid.Col>
                </Grid>

                <Grid>
                    {
                        products.map((p) => (
                            <Grid.Col span={4} key={p.id}>
                                <div className={"relative group rounded-md"}>
                                <a className={"absolute rounded-md  w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all flex justify-end items-start p-8 flex-col z-10"}
                                       href={`https://shop.bte-germany.de/products/${p.slug}`} target={"_blank"}>
                                        <span className={"text-4xl font-bold w-2/3"}>
                                            {p.name}
                                        </span>
                                        <span className={"mt-4 bg-black/80 py-1 px-4 rounded-full flex gap-2 items-center"}>
                                            Buy now
                                            <IconArrowRight size={18} className={"group-hover:translate-x-0.5 transition delay-150"}/>
                                        </span>
                                    </a>
                                    <Image
                                        src={p.images[1].url}
                                        className={"rounded-md absolute invisible group-hover:visible"}
                                    />
                                    <Image
                                        src={p.images[0].url}
                                        className={"rounded-md"}
                                    />
                                </div>

                            </Grid.Col>
                        ))
                    }

                </Grid>

            </Container>
        </>
    )
}

export async function getServerSideProps({locale}) {

    let {data} = await axios.get("https://api.fourthwall.com/open-api/v1.0/products?size=10", {
        auth: {
            username: process.env.FOURTHWALL_USER,
            password: process.env.FOURTHWALL_PASSWORD
        }
    })
    let products = data.results;
    products = products.filter((p) => p.access.type === "PUBLIC" && p.state.type === "AVAILABLE");

    return {
        props: {
            products,
            ...(await serverSideTranslations(locale, [
                'common',
                'store',
            ])),
        }
    }
}
