import Navbar from "../components/Navbar";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { createDirectus } from "@directus/sdk";
import { readItems, rest } from "@directus/sdk/rest";
import { Container, Title, Accordion, TypographyStylesProvider } from '@mantine/core';
import classes from "./styles/faq.module.css";
import Markdown from 'react-markdown'



export default function FAQ({ content }) {
    return (
        <>
            <Navbar disableAnimation />
            <div style={{ height: "150px" }}></div>
            <Container size="xl" className={classes.wrapper}>
                <Title ta="center" className={classes.title}>
                    Frequently Asked Questions
                </Title>

                <Accordion variant="separated">
                    {
                        content.map((item) => {
                            return (
                                <Accordion.Item className={classes.item} value={item.id} key={item.id}>
                                    <Accordion.Control>{item.translations[0].question}</Accordion.Control>
                                    <Accordion.Panel><TypographyStylesProvider><Markdown>{item.translations[0].answer}</Markdown></TypographyStylesProvider></Accordion.Panel>
                                </Accordion.Item>
                            );
                        })
                    }


                </Accordion>
            </Container>
        </>
    )
}

export async function getServerSideProps({ locale }) {
    const directus = createDirectus(process.env.CMS_URL).with(rest());
    const contentResult = await directus.request(
        readItems('faq', {
            deep: {
                translations: {
                    _filter: {
                        _and: [
                            {
                                languages_code: { _eq: locale },
                            }
                        ],
                    },
                },
            },
            _filter: {

            },
            fields: ['*', { translations: ['*'] }],
        })
    );

    if (contentResult && contentResult.length > 0) {
        return {
            props: {
                content: contentResult,
                ...(await serverSideTranslations(locale, [
                    'common',
                    'join',
                ])),
            },
        }
    } else {
        return {
            props: {
                content: [],
                ...(await serverSideTranslations(locale, [
                    'common',
                    'join',
                ])),
            },
        }
    }

}