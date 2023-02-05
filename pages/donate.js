import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Button, Container, Tabs, Text, Title} from "@mantine/core";
import {useTranslation} from "next-i18next";
import Navbar from "../components/Navbar";
import {IconCreditCard} from "@tabler/icons";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, PaymentElement} from "@stripe/react-stripe-js";
import axios from "axios";
import {useState} from "react";

export default function Donate() {

    const {t} = useTranslation();
    const stripePromise = loadStripe('pk_test_51IFgRhJRXWbnO82B7oszSNxINneyoZvqqc228pSS9IOW2AE38TRbVw3NCa14B36WK3hx63lQoPskLolPU2uErTn500DHou0Ocd');



    const createIntent = async () => {
        const {data} = await axios.post("/api/payment")
        document.location.href = data.url;
    }
    return (
        <div>
            <Navbar disableAnimation/>

            <div style={{height: "150px"}}></div>

            <Container size={"xl"}>
                <Title mb={"xl"}>💶 {t('donate:title')}</Title>
                <Text>{t('donate:description')}</Text>
                <Tabs defaultValue="creditcard">
                    <Tabs.List>
                        <Tabs.Tab value="creditcard"
                                  icon={<IconCreditCard size={14}/>}>{t('donate:creditcard')}</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="creditcard" pt="xs">
                        <Button onClick={() => createIntent()} mt={"xl"}>Donate via credit card</Button>


                    </Tabs.Panel>

                </Tabs>
            </Container>


        </div>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'donate',
            ])),
        },
    }
}
