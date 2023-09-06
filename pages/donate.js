import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Button, Container, Tabs, Text, Title} from "@mantine/core";
import {useTranslation} from "next-i18next";
import Navbar from "../components/Navbar";
import {IconCreditCard} from "@tabler/icons";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, PaymentElement} from "@stripe/react-stripe-js";
import axios from "axios";
import {useRef, useState} from "react";
import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';

export default function Donate() {

    const {t} = useTranslation();

    const [sessionData, setSessionData] = useState("");
    const [paymentId, setPaymentId] = useState("");
    const checkoutRef = useRef();

    const createSession = async () => {
        const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/donation`, {amount: 100})
        setSessionData(data.sessionData)
        setPaymentId(data.paymentId)

        const checkout = await AdyenCheckout({
            session: {
                sessionData: data.sessionData,
                id: data.paymentId
            },
            clientKey: "test_OPULT4YY7JBK5IPANFHYC72DSM6Y6KZR",
            environment: "test",
            onPaymentCompleted: (response, _component) =>
                alert(JSON.stringify(response, null, 2)),
            onError: (error, _component) => {
                alert(JSON.stringify(error, null, 2))
            },
        });

        if (checkoutRef.current) {
            checkout.create('dropin').mount(checkoutRef.current);
        }


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
                        <Button onClick={() => createSession()} mt={"xl"}>Donate via credit card</Button>

                        <div ref={checkoutRef}></div>
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
