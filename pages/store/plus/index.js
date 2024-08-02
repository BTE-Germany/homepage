/*
 * index.js
 *
 * Copyright (c) 2024 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

import Navbar from "../../../components/Navbar";
import classes from "../../styles/faq.module.css";
import {Alert, Anchor, Box, Button, Container, SegmentedControl, Text, Title} from "@mantine/core";
import axios from "axios";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import SparklesText from "../../../components/SparklesText";
import {useEffect, useState} from "react";
import {signIn, useSession} from "next-auth/react";
import {IconAlertTriangle} from "@tabler/icons-react";
import Link from "next/link";

export default function Plus() {

    const {t} = useTranslation("store");
    const [billingPeriod, setBillingPeriod] = useState("yearly");
    const {status, data} = useSession();

    const [userLinks, setUserLink] = useState([]);
    const [userData, setUserData] = useState({});

    const getData = async () => {
        if (status !== "authenticated") return;
        const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/@me/links`, {headers: {authorization: "Bearer " + data.accessToken}});
        const {data: userData} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/@me`, {headers: {authorization: "Bearer " + data.accessToken}});
        setUserData(userData)
        setUserLink(response)
    }

    const pricing = {
        monthly: 2,
        yearly: 20,
        onetime: 50
    }

    const subscribe = async () => {
        try {
            const {data: reqData} = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/plus/session`, {billingPeriod}, {headers: {"Authorization": "Bearer " + data.accessToken}})
            window.location = reqData.url;
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (status != "authenticated") return;
        getData()
    }, [status])

    return (
        <>
            <Navbar disableAnimation/>
            <div style={{height: "150px"}}></div>
            <Container size="xl" className={classes.wrapper}>


                <Title ta="center" c={"white"}>
                    <SparklesText text={t('store:plus.title')}/>
                </Title>
                <Text ta={"center"} c={"dimmed"} className={"mt-8"}>
                    {t('store:plus.description')}
                </Text>

                <div className={"flex justify-center mt-8"}>
                    <SegmentedControl
                        value={billingPeriod}
                        onChange={setBillingPeriod}
                        size="md"
                        data={[
                            {label: t("store:plus.monthly"), value: 'monthly'},
                            {
                                label: <div
                                    className={"flex justify-center items-center gap-2"}>{t("store:plus.yearly")}
                                    <div className={"text-xs bg-green-600/30 px-1.5 py-0.5 rounded-full"}>
                                        2 Months free
                                    </div>
                                </div>, value: 'yearly'
                            },
                            {label: t("store:plus.onetime"), value: 'onetime'},
                        ]}
                    />
                </div>

                <div className={"flex justify-center mt-8 flex-col items-center gap-2"}>
                    {
                        (status === "authenticated" && (userLinks.filter((l) => l.type === "DISCORD").length === 0 ||
                            userLinks.filter((l) => l.type === "MINECRAFT").length === 0)) ?
                            <>
                                <Alert my={"md"} color={"red"} icon={<IconAlertTriangle size={20}/>} title={t('plus.linkRequiredTitle')}>
                                    {t('plus.linkRequired')}
                                    <Anchor component={Link} href={"/profile#links"} ml={5}>
                                        {t('plus.toAccountPage')}
                                    </Anchor>
                                </Alert>
                            </>
                            : <>

                            </>
                    }
                    <div className={`flex flex-col justify-center items-center border border-neutral-600 rounded-md p-12 ${billingPeriod === "yearly" && "border-blue-600 shadow-lg shadow-blue-600/20"}`}>

                        {billingPeriod === "yearly" && <div className={"bg-blue-600/40 border border-blue-600 text-white text-sm py-1 px-3 rounded-full mb-3"}>
                            {t('store:plus.popular')}
                        </div>}
                        <p className={"text-6xl font-bold text-center"}>
                            {pricing[billingPeriod]}€
                        </p>
                        <Text ta="center" c={"dimmed"} className={"mt-4"}>
                            {
                                billingPeriod === "monthly" ? t('store:plus.monthlyPrice') :
                                    billingPeriod === "yearly" ? t('store:plus.yearlyPrice') :
                                        t('store:plus.onetimePrice')
                            }
                        </Text>
                        <div className={"mt-8"}>

                            {
                                !userData.plus ? <>
                                    {
                                        status === "unauthenticated" ?
                                            <Button className={"w-64"} disabled={status === "loading"} onClick={() => signIn("keycloak")}>
                                                {t('common:signIn')}
                                            </Button> : <Button className={"w-64"} disabled={(status === "authenticated" && (userLinks.filter((l) => l.type === "DISCORD").length === 0 ||
                                                userLinks.filter((l) => l.type === "MINECRAFT").length === 0))} onClick={() => subscribe()}>
                                                {t('store:plus.subscribe')}
                                            </Button>
                                    }
                                </> : <>
                                    <Button className={"w-64"} component={Link} href={"/profile#plus"}>
                                        {t('store:plus.manageBilling')}
                                    </Button>
                                    </>
                            }
                        </div>


                    </div>
                    <p className={"text-white/20 text-xs mt-4"}>
                        {t('store:plus.disclaimer')}
                    </p>
                </div>


            </Container>
        </>
    )
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