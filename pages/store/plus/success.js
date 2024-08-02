/*
 * success.js
 *
 * Copyright (c) 2024 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

import Navbar from "../../../components/Navbar";
import classes from "../../styles/faq.module.css";
import {Button, Container, Title} from "@mantine/core";
import SparklesText from "../../../components/SparklesText";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import confetti from "canvas-confetti";
import {useEffect} from "react";
import {IconCheck, IconHeart} from "@tabler/icons-react";
import axios from "axios";
import {useSession} from "next-auth/react";

export default function Success() {

    const {t} = useTranslation("store");
    const {status, data} = useSession();


    const playConfetti = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ['#24984c', '#1b49e1', "#ffffff"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    const openPortal = async () => {
        // Redirect to the billing portal
        try {
            const {data: reqData} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/portal`,  {headers: {"Authorization": "Bearer " + data.accessToken}})
            window.location = reqData.url;
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        playConfetti()
    }, [])

    return (
        <>
            <Navbar disableAnimation/>
            <div style={{height: "150px"}}></div>
            <Container size="xl" className={"flex justify-center flex-col items-center gap-5 mt-48"}>

                <IconCheck size={100} className={"text-green-600 "}/>
                <Title ta="center" c={"white"}>
                    <SparklesText text={t('store:plus.success')}/>
                </Title>
                <p className={"text-md w-1/2 text-center text-white/50"}>
                    {t('store:plus.successMessage')}
                </p>

                <Button onClick={openPortal}>
                    {t('store:plus.manageBilling')}
                </Button>
            </Container>
        </>
    );
}
export async function getServerSideProps({locale}) {


    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'store',
            ])),
        }
    }
}