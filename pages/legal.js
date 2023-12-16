import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Alert, Anchor, Container, Text, Title, TypographyStylesProvider} from "@mantine/core";
import {Trans, useTranslation} from "next-i18next";
import Navbar from "../components/Navbar";
import {IconInfoCircle} from "@tabler/icons-react";
import axios from "axios";

export default function Legal() {

    const {t} = useTranslation("legal");

    return (
        <div>
            <Navbar disableAnimation/>

            <div style={{height: "150px"}}></div>

            <Container size={"xl"}>
                <Title >{t('legal:legalnotice.title')}</Title>
                <Title order={6} mb={"xl"}>{t('legalnotice.subtitle')}</Title>

                <Alert icon={<IconInfoCircle />} my={"xl"} title={t('legalnotice.noticeScopeTitle')}>
                    <Trans i18nKey={"legalnotice.noticeScope"}>
                        This legal notice applies to our websites (*.bte-germany.de and *.buildthe.earth) and our social media presences on <Anchor href={"https://www.youtube.com/@buildtheearthgermany"}>YouTube</Anchor>, <Anchor href={"https://www.instagram.com/buildtheearthgermany/"}>Instagram</Anchor> and <Anchor href={"https://www.tiktok.com/@btegermany"}>TikTok</Anchor>
                    </Trans>
                </Alert>

                <Title order={3} my={"md"}>{t('legalnotice.serviceProvider')}</Title>

                <Text>
                    <b>BuildTheEarth Germany e.V.</b><br/>
                    Neckarstraße 24<br/>
                    64560 Riedstadt<br/>
                    Germany<br/>
                </Text>
                <Text mt={"md"}>
                    {t('legalnotice.represented')}
                </Text>

                <Text mt={"md"}>
                    {t('legalnotice.association')}
                </Text>


                <Title order={3} my={"md"}>{t('legalnotice.contact')}</Title>
                <Text>
                    {t('legalnotice.mail')}: <Anchor href={"mailto:info@bte-germany.de"}>info@bte-germany.de</Anchor>
                </Text>
                <Text>
                    {t('legalnotice.phone')}: <Anchor href={"tel:+4961589298914"}>+49 6158 9298914</Anchor>
                </Text>


                <Title order={3} my={"md"}>{t('legalnotice.disclaimer')}</Title>
                <Text>
                    {t('legalnotice.disclaimerText')}
                </Text>




                <Text>

                </Text>
            </Container>


        </div>
    )
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'legal',
            ])),
        }
    }
}

