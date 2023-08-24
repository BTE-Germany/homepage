import Navbar from "../../components/Navbar";
import {Container, Title} from "@mantine/core";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {createDirectus} from "@directus/sdk";
import {readItems, rest} from "@directus/sdk/rest";

export default function Visit({content}) {
    const {t} = useTranslation("join")
    return (
        <>
            <Navbar disableAnimation/>

            <div style={{height: "150px"}}></div>


            <Container size={"xl"}>
                <Title>{t('join:visitPage.title')}</Title>
                <div dangerouslySetInnerHTML={{__html: content}}>

                </div>
            </Container>
        </>
    )
}

export async function getServerSideProps({locale}) {
    const directus = createDirectus(process.env.CMS_URL).with(rest());
    const contentResult = await directus.request(
        readItems('visitIntructions', {
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
            fields: ['*', { translations: ['*'] }],
            limit: 1,
        })
    );
    let content = "There is no translation available for this text. Please change the language.";
    if(contentResult.translations && contentResult.translations.length > 0) {
        content = contentResult.translations[0].text;
    }
    return {
        props: {
            content,
            ...(await serverSideTranslations(locale, [
                'common',
                'join',
            ])),
        },
    }
}
