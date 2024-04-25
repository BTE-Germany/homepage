import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Button, Card, Container, CopyButton, Paper, Tabs, Text, Title, Tooltip} from "@mantine/core";
import {useTranslation} from "next-i18next";
import Navbar from "../components/Navbar";
import {IconBrandPaypal, IconBrandPaypalFilled, IconBuildingBank, IconCreditCard} from "@tabler/icons-react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, PaymentElement} from "@stripe/react-stripe-js";
import axios from "axios";
import {useRef, useState} from "react";
import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';

export default function Donate() {

    const {t} = useTranslation();



    return (
        <div>
            <Navbar disableAnimation/>

            <div style={{height: "150px"}}></div>

            <Container size={"xl"}>
                <Title mb={"md"}>{t('donate:title')}</Title>
                <Text>{t('donate:description')}</Text>
                <Text size={"sm"} c={"dimmed"}>{t('donate:disclaimer')}</Text>
                <Tabs defaultValue="banktransfer" mt={"lg"}>
                    <Tabs.List>
                        <Tabs.Tab value="banktransfer"
                                  leftSection={<IconBuildingBank size={14}/>}>{t('donate:bankTransfer')}</Tabs.Tab>
                        <Tabs.Tab value="paypal"
                                  leftSection={<IconBrandPaypalFilled size={14}/>}>{t('donate:paypal')}</Tabs.Tab>
                        <Tabs.Tab value="creditcard"
                                  leftSection={<IconCreditCard size={14}/>}>{t('donate:creditcard')}</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="banktransfer" pt="xs">

                        {t('donate:bankTransferDescription')}

                        <Paper shadow="xs" p="xl" withBorder mt={"xl"} className={"flex gap-8"}>
                            <div className={"flex flex-col h-32 w-32 text-center"}>
                                <img src={"/bankTransferCode.png"} className={""}/>
                                <p className={"text-sm opacity-55"}>{t("donate:scan")}</p>
                            </div>
                            <div className={"flex flex-col items-start"}>
                                <p className={"text-sm opacity-55"}>
                                    {t("donate:accountHolder")}
                                </p>
                                <CopyButton value="BuildTheEarth Germany e.V." timeout={2000}>
                                    {({copied, copy}) => (
                                        <Tooltip label={copied ? t("common:copied") : t("common:copy")} withArrow>
                                            <Text onClick={copy} className={"cursor-pointer"}>BuildTheEarth Germany
                                                e.V.</Text>
                                        </Tooltip>
                                    )}
                                </CopyButton>

                                <p className={"text-sm opacity-55 mt-3"}>
                                    {t("donate:iban")}
                                </p>
                                <CopyButton value="DE46 5085 2553 0016 1501 20" timeout={2000}>
                                    {({copied, copy}) => (
                                        <Tooltip label={copied ? t("common:copied") : t("common:copy")} withArrow>
                                            <Text onClick={copy} className={"cursor-pointer"}>DE46 5085 2553 0016 1501
                                                20</Text>
                                        </Tooltip>
                                    )}
                                </CopyButton>

                                <p className={"text-sm opacity-55 mt-3"}>
                                    {t("donate:bic")}
                                </p>
                                <CopyButton value="HELADEF1GRG" timeout={2000}>
                                    {({copied, copy}) => (
                                        <Tooltip label={copied ? t("common:copied") : t("common:copy")} withArrow>
                                            <Text onClick={copy} className={"cursor-pointer"}>HELADEF1GRG</Text>
                                        </Tooltip>
                                    )}
                                </CopyButton>
                            </div>


                        </Paper>

                    </Tabs.Panel>

                    <Tabs.Panel value="paypal" pt="xs">
                        {t('donate:paypalDescription')}
                        <br/>
                        <Button mt={"xl"} component={"a"} href={"https://www.paypal.com/donate/?hosted_button_id=F8L75HQG7YSLQ"} target={"_blank"} leftSection={<IconBrandPaypalFilled size={18} />}>
                            {t('donate:paypalDonate')}
                        </Button>

                    </Tabs.Panel>

                    <Tabs.Panel value="creditcard" pt="xs">


                        {t('donate:creditcardDescription')}
                        <br/>
                        <Button mt={"xl"} component={"a"} href={"https://donate.stripe.com/4gw5lx6V6alQ5OgaEE"} target={"_blank"} leftSection={<IconCreditCard size={18} />}>
                            {t('donate:creditcardDonate')}
                        </Button>
                    </Tabs.Panel>

                </Tabs>
            </Container>


        </div>
    )
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'donate',
            ])),
        },
    }
}
