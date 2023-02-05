import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Container, Title, TypographyStylesProvider} from "@mantine/core";
import {useTranslation} from "next-i18next";
import Navbar from "../components/Navbar";

export default function Legal() {

    const {t} = useTranslation();

    return (
        <div>
            <Navbar disableAnimation/>

            <div style={{height: "150px"}}></div>

            <Container size={"xl"}>
                <Title mb={"xl"}>{t('legal:legalnotice.title')}</Title>
                <TypographyStylesProvider>
                    <div>
                        <p className="adsimple-322398707">Angaben gemäß Informationspflicht laut § 5 Telemediengesetz
                            (TMG).</p>
                        <p className="adsimple-322398707">BuildTheEarth Germany e.V.</p>
                        <p>Neckarstrasse 24, <br/>64560 Riedstadt, <br/>Deutschland</p>
                        <p className="adsimple-322398707">
                            <strong>Tel.:</strong> +49 15678 745887<br/>
                            <strong>E-Mail:</strong> <a href="mailto:info@bte-germany.de">info@bte-germany.de</a>
                        </p>
                        <p className="adsimple-322398707">
                            <strong>Vereinszweck:</strong>
                            <br/>Vereinszweck hier</p>
                        <p className="adsimple-322398707">
                            <strong>Gemeinschaftlich vertretungsbefugt</strong>
                            <br/> <strong>1. Vorsitzender:</strong>
                            <br/>bingbong</p>
                        <p>
                            <strong>2. Vorsitzender:</strong>
                            <br/> Lander Landerus</p>
                        <p className="adsimple-322398707">
                            <strong>Register:</strong> Vereinsregister<br/>
                            <strong>Registernummer:</strong> VR 123456<br/>
                            <strong>Registergericht:</strong> Darmstadt<br/>
                            <strong>UID-Nummer:</strong> DE12345678</p>
                        <p className="adsimple-322398707">
                            <strong>Kontaktdaten des Verantwortlichen für Datenschutz</strong>
                            <br/>Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die Kontaktdaten der
                            verantwortlichen Person bzw. Stelle:<br/>BuildTheEarth Germany e.V.<br/>
                            Neckarstraße 24, 64560 Riedstadt, Deutschland<br/>E-Mail-Adresse: <a
                            href="mailto:privacy@bte-germany.de">privacy@bte-germany.de</a>
                        </p>
                        <h2 id="eu-streitschlichtung" className="adsimple-322398707">EU-Streitschlichtung</h2>
                        <p>Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung)
                            möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.<br/>
                            Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der
                            Europäischen Kommission unter <a className="adsimple-322398707"
                                                             href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                                                             target="_blank"
                                                             rel="noreferrer">https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=DE</a> zu
                            richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.</p>
                        <p>Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an
                            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                        <h2 id="haftung-fuer-inhalte-dieser-webseite" className="adsimple-322398707">Haftung für Inhalte
                            dieser Website</h2>
                        <p>Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und
                            aktuelle
                            Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller
                            Inhalte
                            auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden.
                            Als
                            Diensteanbieter sind wir nicht verpflichtet, die von Ihnen übermittelten oder gespeicherten
                            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                            Tätigkeit hinweisen.</p>
                        <p>Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von
                            Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen
                            Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt.</p>
                        <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend
                            zu
                            kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die
                            Kontaktdaten
                            im Impressum.</p>
                        <h2 id="haftung-links-webseite" className="adsimple-322398707">Haftung für Links auf dieser
                            Website</h2>
                        <p>Unsere Website enthält Links zu anderen Websites für deren Inhalt wir nicht verantwortlich
                            sind.
                            Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger
                            Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen
                            sind
                            und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
                        <p>Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu
                            kontaktieren.
                            Sie finden die Kontaktdaten im Impressum.</p>
                        <h2 id="urheberrechtshinweis" className="adsimple-322398707">Urheberrechtshinweis</h2>
                        <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht.
                            Bitte
                            fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder
                            verwerten
                            wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir
                            die
                            unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
                        <p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir
                            Sie
                            uns zu kontaktieren.</p>
                        <p>Alle Texte sind urheberrechtlich geschützt.</p>
                        <p style={{marginTop: '15px'}}>Quelle: Erstellt mit dem <a
                            href="https://www.adsimple.de/impressum-generator/"
                            title="Impressum Generator von AdSimple für Deutschland">Impressum Generator</a> von
                            AdSimple
                        </p>

                    </div>

                </TypographyStylesProvider>
            </Container>


        </div>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'legal',
            ])),
        },
    }
}
