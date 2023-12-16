/*
 * privacy.js
 *
 * Copyright (c) 2023 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

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
                <>
                    <h1>Datenschutzerklärung</h1>
                    <h2 id="m716">Präambel</h2>
                    <p>
                        Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären,
                        welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als
                        &quot;Daten&quot; bezeichnet) wir zu welchen Zwecken und in welchem Umfang
                        verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten
                        Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung
                        unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen
                        Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.&nbsp;B.
                        unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
                        &quotOnlineangebot&quot).
                    </p>
                    <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
                    <p>Stand: 15. Dezember 2023</p>
                    <h2>Inhaltsübersicht</h2>{" "}
                    <ul className="index">
                        <li>
                            <a className="index-link" href="#m716">
                                Präambel
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m3">
                                Verantwortlicher
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#mOverview">
                                Übersicht der Verarbeitungen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m2427">
                                Maßgebliche Rechtsgrundlagen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m27">
                                Sicherheitsmaßnahmen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m25">
                                Übermittlung von personenbezogenen Daten
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m24">
                                Internationale Datentransfers
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m12">
                                Löschung von Daten
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m10">
                                Rechte der betroffenen Personen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m134">
                                Einsatz von Cookies
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m354">
                                Wahrnehmung von Aufgaben nach Satzung oder Geschäftsordnung
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m317">
                                Geschäftliche Leistungen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m605">
                                Einsatz von Online-Plattformen zu Angebots- und Vertriebszwecken
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m3575">
                                Im Rahmen der Geschäftstätigkeit eingesetzte Anbieter und Services
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m326">
                                Zahlungsverfahren
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m225">
                                Bereitstellung des Onlineangebotes und Webhosting
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m367">
                                Registrierung, Anmeldung und Nutzerkonto
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m451">
                                Single-Sign-On-Anmeldung
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m104">
                                Blogs und Publikationsmedien
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m182">
                                Kontakt- und Anfragenverwaltung
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m17">
                                Newsletter und elektronische Benachrichtigungen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m638">
                                Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m237">
                                Gewinnspiele und Wettbewerbe
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m263">
                                Webanalyse, Monitoring und Optimierung
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m136">
                                Präsenzen in sozialen Netzwerken (Social Media)
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m328">
                                Plugins und eingebettete Funktionen sowie Inhalte
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m15">
                                Änderung und Aktualisierung der Datenschutzerklärung
                            </a>
                        </li>
                    </ul>
                    <h2 id="m3">Verantwortlicher</h2>
                    <p>BuildTheEarth Germany e.V.</p>
                    E-Mail-Adresse: <p>support@bte-germany.de</p>
                    Telefon: <p>+49 157 91478206</p>
                    Impressum:{" "}
                    <p>
                        <a href="https://bte-germany.de/legal" target="_blank">
                            https://bte-germany.de/legal
                        </a>
                    </p>
                    <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
                    <p>
                        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die
                        Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
                        Personen.
                    </p>
                    <h3>Arten der verarbeiteten Daten</h3>
                    <ul>
                        <li>Bestandsdaten.</li>
                        <li>Zahlungsdaten.</li>
                        <li>Kontaktdaten.</li>
                        <li>Inhaltsdaten.</li>
                        <li>Vertragsdaten.</li>
                        <li>Nutzungsdaten.</li>
                        <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                    </ul>
                    <h3>Kategorien betroffener Personen</h3>
                    <ul>
                        <li>Kunden.</li>
                        <li>Interessenten.</li>
                        <li>Kommunikationspartner.</li>
                        <li>Nutzer.</li>
                        <li>Gewinnspiel- und Wettbewerbsteilnehmer.</li>
                        <li>Mitglieder.</li>
                        <li>Geschäfts- und Vertragspartner.</li>
                        <li>Schüler/ Studenten/ Teilnehmer.</li>
                    </ul>
                    <h3>Zwecke der Verarbeitung</h3>
                    <ul>
                        <li>
                            Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.
                        </li>
                        <li>Kontaktanfragen und Kommunikation.</li>
                        <li>Sicherheitsmaßnahmen.</li>
                        <li>Direktmarketing.</li>
                        <li>Reichweitenmessung.</li>
                        <li>Büro- und Organisationsverfahren.</li>
                        <li>Verwaltung und Beantwortung von Anfragen.</li>
                        <li>Durchführung von Gewinnspielen und Wettbewerben.</li>
                        <li>Feedback.</li>
                        <li>Marketing.</li>
                        <li>Profile mit nutzerbezogenen Informationen.</li>
                        <li>Anmeldeverfahren.</li>
                        <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                        <li>Informationstechnische Infrastruktur.</li>
                    </ul>
                    <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2>
                    <p>
                        <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im Folgenden
                        erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis
                        wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass
                        neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw.
                        unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall
                        speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
                        Datenschutzerklärung mit.
                    </p>
                    <ul>
                        <li>
                            <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die
                            betroffene Person hat ihre Einwilligung in die Verarbeitung der sie
                            betreffenden personenbezogenen Daten für einen spezifischen Zweck oder
                            mehrere bestimmte Zwecke gegeben.
                        </li>
                        <li>
                            <strong>
                                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit.
                                b) DSGVO)
                            </strong>{" "}
                            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
                            Vertragspartei die betroffene Person ist, oder zur Durchführung
                            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen
                            Person erfolgen.
                        </li>
                        <li>
                            <strong>
                                Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)
                            </strong>{" "}
                            - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung
                            erforderlich, der der Verantwortliche unterliegt.
                        </li>
                        <li>
                            <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong>{" "}
                            - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
                            Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
                            Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person,
                            die den Schutz personenbezogener Daten erfordern, überwiegen.
                        </li>
                    </ul>
                    <p>
                        <strong>Nationale Datenschutzregelungen in Deutschland: </strong>Zusätzlich
                        zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum
                        Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz
                        vor Missbrauch personenbezogener Daten bei der Datenverarbeitung
                        (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere
                        Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum
                        Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener
                        Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie
                        automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling.
                        Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur
                        Anwendung gelangen.
                    </p>
                    <p>
                        <strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>Diese
                        Datenschutzhinweise dienen sowohl der Informationserteilung nach dem
                        schweizerischen Bundesgesetz über den Datenschutz (Schweizer DSG) als auch
                        nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie
                        zu beachten, dass aufgrund der breiteren räumlichen Anwendung und
                        Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt
                        der im Schweizer DSG verwendeten Begriffe „Bearbeitung&quot; von „Personendaten&quot;,
                        &quot;überwiegendes Interesse&quot; und &quot;besonders schützenswerte Personendaten&quot;
                        werden die in der DSGVO verwendeten Begriffe &quot;Verarbeitung&quot; von
                        „personenbezogenen Daten&quot; sowie &quot;berechtigtes Interesse&quot; und &quot;besondere
                        Kategorien von Daten&quot; verwendet. Die gesetzliche Bedeutung der Begriffe wird
                        jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer
                        DSG bestimmt.
                    </p>
                    <h2 id="m27">Sicherheitsmaßnahmen</h2>
                    <p>
                        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung
                        des Stands der Technik, der Implementierungskosten und der Art, des Umfangs,
                        der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen
                        Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und
                        Freiheiten natürlicher Personen geeignete technische und organisatorische
                        Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                    </p>
                    <p>
                        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
                        Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und
                        elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs,
                        der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer
                        Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine
                        Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen
                        auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den
                        Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von
                        Hardware, Software sowie Verfahren entsprechend dem Prinzip des
                        Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche
                        Voreinstellungen.
                    </p>
                    <p>
                        TLS/SSL-Verschlüsselung (https): Um die Daten der Benutzer, die über unsere
                        Online-Dienste übertragen werden, zu schützen, verwenden wir
                        TLS/SSL-Verschlüsselung. Secure Sockets Layer (SSL) ist die
                        Standardtechnologie zur Sicherung von Internetverbindungen durch
                        Verschlüsselung der zwischen einer Website oder App und einem Browser (oder
                        zwischen zwei Servern) übertragenen Daten. Transport Layer Security (TLS)
                        ist eine aktualisierte und sicherere Version von SSL. Hyper Text Transfer
                        Protocol Secure (HTTPS) wird in der URL angezeigt, wenn eine Website durch
                        ein SSL/TLS-Zertifikat gesichert ist.
                    </p>
                    <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
                    <p>
                        Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor,
                        dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige
                        Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber
                        offengelegt werden. Zu den Empfängern dieser Daten können z.&nbsp;B. mit
                        IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und
                        Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen
                        Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere
                        entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten
                        dienen, mit den Empfängern Ihrer Daten ab.
                    </p>
                    <p>
                        Datenübermittlung innerhalb der Organisation: Wir können personenbezogene
                        Daten an andere Stellen innerhalb unserer Organisation übermitteln oder
                        ihnen den Zugriff auf diese Daten gewähren. Sofern diese Weitergabe zu
                        administrativen Zwecken erfolgt, beruht die Weitergabe der Daten auf unseren
                        berechtigten unternehmerischen und betriebswirtschaftlichen Interessen oder
                        erfolgt, sofern sie Erfüllung unserer vertragsbezogenen Verpflichtungen
                        erforderlich ist oder wenn eine Einwilligung der Betroffenen oder eine
                        gesetzliche Erlaubnis vorliegt.
                    </p>
                    <h2 id="m24">Internationale Datentransfers</h2>
                    <p>
                        Datenverarbeitung in Drittländern: Sofern wir Daten in einem Drittland
                        (d.&nbsp;h., außerhalb der Europäischen Union (EU), des Europäischen
                        Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der
                        Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung
                        von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt
                        dies nur im Einklang mit den gesetzlichen Vorgaben. Sofern das
                        Datenschutzniveau in dem Drittland mittels eines Angemessenheitsbeschlusses
                        anerkannt wurde (Art. 45 DSGVO), dient dieser als Grundlage des
                        Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn das
                        Datenschutzniveau anderweitig gesichert ist, insbesondere durch
                        Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) DSGVO), ausdrückliche
                        Einwilligung oder im Fall vertraglicher oder gesetzlich erforderlicher
                        Übermittlung (Art. 49 Abs. 1 DSGVO). Im Übrigen teilen wir Ihnen die
                        Grundlagen der Drittlandübermittlung bei den einzelnen Anbietern aus dem
                        Drittland mit, wobei die Angemessenheitsbeschlüsse als Grundlagen vorrangig
                        gelten. Informationen zu Drittlandtransfers und vorliegenden
                        Angemessenheitsbeschlüssen können dem Informationsangebot der EU-Kommission
                        entnommen werden:{" "}
                        <a
                            href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                            target="_blank"
                        >
                            https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de.
                        </a>
                    </p>
                    <p>
                        EU-US Trans-Atlantic Data Privacy Framework: Im Rahmen des sogenannten &quot;Data
                        Privacy Framework&quot; (DPF) hat die EU-Kommission das Datenschutzniveau
                        ebenfalls für bestimmte Unternehmen aus den USA im Rahmen der
                        Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Die Liste
                        der zertifizierten Unternehmen als auch weitere Informationen zu dem DPF
                        können Sie der Webseite des Handelsministeriums der USA unter{" "}
                        <a href="https://www.dataprivacyframework.gov/" target="_blank">
                            https://www.dataprivacyframework.gov/
                        </a>{" "}
                        (in Englisch) entnehmen. Wir informieren Sie im Rahmen der
                        Datenschutzhinweise, welche von uns eingesetzten Diensteanbieter unter dem
                        Data Privacy Framework zertifiziert sind.
                    </p>
                    <h2 id="m12">Löschung von Daten</h2>
                    <p>
                        Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
                        Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen
                        widerrufen werden oder sonstige Erlaubnisse entfallen (z.&nbsp;B. wenn der
                        Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck
                        nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie
                        für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren
                        Verarbeitung auf diese Zwecke beschränkt. D.&nbsp;h., die Daten werden
                        gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.&nbsp;B. für
                        Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden
                        müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung
                        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
                        oder juristischen Person erforderlich ist. Unsere Datenschutzhinweise können
                        ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten
                        beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.
                    </p>
                    <h2 id="m10">Rechte der betroffenen Personen</h2>
                    <p>
                        Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene
                        nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis
                        21 DSGVO ergeben:
                    </p>
                    <ul>
                        <li>
                            <strong>
                                Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer
                                besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie
                                betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1
                                lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für
                                ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie
                                betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu
                                betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
                                Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke
                                derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit
                                es mit solcher Direktwerbung in Verbindung steht.
                            </strong>
                        </li>
                        <li>
                            <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht,
                            erteilte Einwilligungen jederzeit zu widerrufen.
                        </li>
                        <li>
                            <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung
                            darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
                            Auskunft über diese Daten sowie auf weitere Informationen und Kopie der
                            Daten entsprechend den gesetzlichen Vorgaben.
                        </li>
                        <li>
                            <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
                            gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
                            betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen
                            Daten zu verlangen.
                        </li>
                        <li>
                            <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong>{" "}
                            Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen,
                            dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ
                            nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung
                            der Daten zu verlangen.
                        </li>
                        <li>
                            <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie
                            betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der
                            gesetzlichen Vorgaben in einem strukturierten, gängigen und
                            maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen
                            anderen Verantwortlichen zu fordern.
                        </li>
                        <li>
                            <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet
                            eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                            Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde,
                            insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts,
                            ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie
                            der Ansicht sind, dass die Verarbeitung der Sie betreffenden
                            personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                        </li>
                    </ul>
                    <h2 id="m134">Einsatz von Cookies</h2>
                    <p>
                        Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die
                        Informationen auf Endgeräten speichern und Informationen aus den Endgeräten
                        auslesen. Z.&nbsp;B. um den Login-Status in einem Nutzerkonto, einen
                        Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete
                        Funktionen eines Onlineangebotes speichern. Cookies können ferner zu
                        unterschiedlichen Zwecken eingesetzt werden, z.&nbsp;B. zu Zwecken der
                        Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten sowie der
                        Erstellung von Analysen der Besucherströme.{" "}
                    </p>
                    <p>
                        <strong>Hinweise zur Einwilligung: </strong>Wir setzen Cookies im Einklang
                        mit den gesetzlichen Vorschriften ein. Daher holen wir von den Nutzern eine
                        vorhergehende Einwilligung ein, außer wenn diese gesetzlich nicht gefordert
                        ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn das Speichern
                        und das Auslesen der Informationen, also auch von Cookies, unbedingt
                        erforderlich sind, um dem den Nutzern einen von ihnen ausdrücklich
                        gewünschten Telemediendienst (also unser Onlineangebot) zur Verfügung zu
                        stellen. Zu den unbedingt erforderlichen Cookies gehören in der Regel
                        Cookies mit Funktionen, die der Anzeige und Lauffähigkeit des
                        Onlineangebotes , dem Lastausgleich, der Sicherheit, der Speicherung der
                        Präferenzen und Auswahlmöglichkeiten der Nutzer oder ähnlichen mit der
                        Bereitstellung der Haupt- und Nebenfunktionen des von den Nutzern
                        angeforderten Onlineangebotes zusammenhängenden Zwecken dienen. Die
                        widerrufliche Einwilligung wird gegenüber den Nutzern deutlich kommuniziert
                        und enthält die Informationen zu der jeweiligen Cookie-Nutzung.
                    </p>
                    <p>
                        <strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>Auf
                        welcher datenschutzrechtlichen Rechtsgrundlage wir die personenbezogenen
                        Daten der Nutzer mit Hilfe von Cookies verarbeiten, hängt davon ab, ob wir
                        Nutzer um eine Einwilligung bitten. Falls die Nutzer einwilligen, ist die
                        Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung.
                        Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf
                        Grundlage unserer berechtigten Interessen (z.&nbsp;B. an einem
                        betriebswirtschaftlichen Betrieb unseres Onlineangebotes und Verbesserung
                        seiner Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen der Erfüllung
                        unserer vertraglichen Pflichten erfolgt, wenn der Einsatz von Cookies
                        erforderlich ist, um unsere vertraglichen Verpflichtungen zu erfüllen. Zu
                        welchen Zwecken die Cookies von uns verarbeitet werden, darüber klären wir
                        im Laufe dieser Datenschutzerklärung oder im Rahmen von unseren
                        Einwilligungs- und Verarbeitungsprozessen auf.
                    </p>
                    <p>
                        <strong>Speicherdauer:&nbsp;</strong>Im Hinblick auf die Speicherdauer
                        werden die folgenden Arten von Cookies unterschieden:
                    </p>
                    <ul>
                        <li>
                            <strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong>
                            &nbsp;Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein
                            Online-Angebot verlassen und sein Endgerät (z.&nbsp;B. Browser oder mobile
                            Applikation) geschlossen hat.
                        </li>
                        <li>
                            <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach
                            dem Schließen des Endgerätes gespeichert. So können beispielsweise der
                            Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt werden,
                            wenn der Nutzer eine Website erneut besucht. Ebenso können die mit Hilfe
                            von Cookies erhobenen Daten der Nutzer zur Reichweitenmessung verwendet
                            werden. Sofern wir Nutzern&nbsp;keine expliziten Angaben zur Art und
                            Speicherdauer von Cookies mitteilen (z.&nbsp;B. im Rahmen der Einholung
                            der Einwilligung), sollten Nutzer davon ausgehen, dass Cookies permanent
                            sind und die Speicherdauer bis zu zwei Jahre betragen kann.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Allgemeine Hinweise zum Widerruf und Widerspruch (sog. &quot;Opt-Out&quot;):{" "}
                        </strong>
                        Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen
                        und der Verarbeitung entsprechend den gesetzlichen Vorgaben widersprechen.
                        Hierzu können Nutzer unter anderem die Verwendung von Cookies in den
                        Einstellungen ihres Browsers einschränken (wobei dadurch auch die
                        Funktionalität unseres Onlineangebotes eingeschränkt sein kann). Ein
                        Widerspruch gegen die Verwendung von Cookies zu Online-Marketing-Zwecken
                        kann auch über die Websites{" "}
                        <a href="https://optout.aboutads.info/" target="_new">
                            https://optout.aboutads.info
                        </a>{" "}
                        und{" "}
                        <a href="https://www.youronlinechoices.com/" target="_new">
                            https://www.youronlinechoices.com/
                        </a>{" "}
                        erklärt werden.
                    </p>
                    <ul className="m-elements">
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>
                                Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:{" "}
                            </strong>
                            Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in
                            dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies,
                            bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens
                            genannten Verarbeitungen und Anbieter eingeholt sowie von den Nutzern
                            verwaltet und widerrufen werden können. Hierbei wird die
                            Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut
                            wiederholen zu müssen und die Einwilligung entsprechend der gesetzlichen
                            Verpflichtung nachweisen zu können. Die Speicherung kann serverseitig
                            und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe
                            vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer,
                            bzw. dessen Gerät zuordnen zu können. Vorbehaltlich individueller Angaben
                            zu den Anbietern von Cookie-Management-Diensten, gelten die folgenden
                            Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei
                            Jahren betragen. Hierbei wird ein pseudonymer Nutzer-Identifikator
                            gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite
                            der Einwilligung (z.&nbsp;B. welche Kategorien von Cookies und/oder
                            Diensteanbieter) sowie dem Browser, System und verwendeten Endgerät
                            gespeichert;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
        a) DSGVO).
      </span>
                        </li>
                    </ul>
                    <h2 id="m354">Wahrnehmung von Aufgaben nach Satzung oder Geschäftsordnung</h2>
                    <p>
                        Wir verarbeiten die Daten unserer Mitglieder, Unterstützer, Interessenten,
                        Geschäftspartner oder sonstiger Personen (Zusammenfassend &quot;Betroffene&quot;),
                        wenn wir mit ihnen in einem Mitgliedschafts- oder sonstigem geschäftlichen
                        Verhältnis stehen und unsere Aufgaben wahrnehmen sowie Empfänger von
                        Leistungen und Zuwendungen sind. Im Übrigen verarbeiten wir die Daten
                        Betroffener auf Grundlage unserer berechtigten Interessen, z.&nbsp;B. wenn
                        es sich um administrative Aufgaben oder Öffentlichkeitsarbeit handelt.
                    </p>
                    <p>
                        Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und die
                        Erforderlichkeit ihrer Verarbeitung, bestimmen sich nach dem
                        zugrundeliegenden Mitgliedschafts- oder Vertragsverhältnis, aus dem sich
                        auch die Erforderlichkeit etwaiger Datenangaben ergeben (im Übrigen weisen
                        wir auf erforderliche Daten hin).
                    </p>
                    <p>
                        Wir löschen Daten, die zur Erbringung unserer satzungs- und geschäftsmäßigen
                        Zwecke nicht mehr erforderlich sind. Dies bestimmt sich entsprechend der
                        jeweiligen Aufgaben und vertraglichen Beziehungen. Wir bewahren die Daten so
                        lange auf, wie sie zur Geschäftsabwicklung, als auch im Hinblick auf etwaige
                        Gewährleistungs- oder Haftungspflichten auf Grundlage unserer berechtigten
                        Interesse an deren Regelung relevant sein können. Die Erforderlichkeit der
                        Aufbewahrung der Daten wird regelmäßig überprüft; im Übrigen gelten die
                        gesetzlichen Aufbewahrungspflichten.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Zahlungsdaten (z.&nbsp;B. Bankverbindungen, Rechnungen,
                            Zahlungshistorie); Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern);
                            Vertragsdaten (z.&nbsp;.B. Vertragsgegenstand, Laufzeit, Kundenkategorie).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.&nbsp;B.
                            Webseitenbesucher, Nutzer von Onlinediensten); Mitglieder. Geschäfts- und
                            Vertragspartner.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
                            Leistungen und Erfüllung vertraglicher Pflichten; Kontaktanfragen und
                            Kommunikation. Verwaltung und Beantwortung von Anfragen.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                            Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO). Berechtigte Interessen (Art.
                            6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <h2 id="m317">Geschäftliche Leistungen</h2>
                    <p>
                        Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.&nbsp;B.
                        Kunden und Interessenten (zusammenfassend bezeichnet als &quot;Vertragspartner&quot;)
                        im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie
                        damit verbundenen Maßnahmen und im Rahmen der Kommunikation mit den
                        Vertragspartnern (oder vorvertraglich), z.&nbsp;B., um Anfragen zu
                        beantworten.
                    </p>
                    <p>
                        Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen zu
                        erfüllen. Dazu gehören insbesondere die Verpflichtungen zur Erbringung der
                        vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei
                        Gewährleistungs- und sonstigen Leistungsstörungen. Darüber hinaus
                        verarbeiten wir die Daten zur Wahrung unserer Rechte und zum Zwecke der mit
                        diesen Pflichten verbundenen Verwaltungsaufgaben sowie der
                        Unternehmensorganisation. Darüber hinaus verarbeiten wir die Daten auf
                        Grundlage unserer berechtigten Interessen an einer ordnungsgemäßen und
                        betriebswirtschaftlichen Geschäftsführung sowie an Sicherheitsmaßnahmen zum
                        Schutz unserer Vertragspartner und unseres Geschäftsbetriebes vor
                        Missbrauch, Gefährdung ihrer Daten, Geheimnisse, Informationen und Rechte
                        (z.&nbsp;B. zur Beteiligung von Telekommunikations-, Transport- und
                        sonstigen Hilfsdiensten sowie Subunternehmern, Banken, Steuer- und
                        Rechtsberatern, Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des
                        geltenden Rechts geben wir die Daten von Vertragspartnern nur insoweit an
                        Dritte weiter, als dies für die vorgenannten Zwecke oder zur Erfüllung
                        gesetzlicher Pflichten erforderlich ist. Über weitere Formen der
                        Verarbeitung, z.&nbsp;B. zu Marketingzwecken, werden die Vertragspartner im
                        Rahmen dieser Datenschutzerklärung informiert.
                    </p>
                    <p>
                        Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir den
                        Vertragspartnern vor oder im Rahmen der Datenerhebung, z.&nbsp;B. in
                        Onlineformularen, durch besondere Kennzeichnung (z.&nbsp;B. Farben) bzw.
                        Symbole (z.&nbsp;B. Sternchen o.ä.), oder persönlich mit.
                    </p>
                    <p>
                        Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und
                        vergleichbarer Pflichten, d.&nbsp;h., grundsätzlich nach Ablauf von 4
                        Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert werden,
                        z.&nbsp;B., solange sie aus gesetzlichen Gründen der Archivierung aufbewahrt
                        werden müssen. Die gesetzliche Aufbewahrungsfrist beträgt bei
                        steuerrechtlich relevanten Unterlagen sowie bei Handelsbüchern, Inventaren,
                        Eröffnungsbilanzen, Jahresabschlüssen, die zum Verständnis dieser Unterlagen
                        erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen und
                        Buchungsbelegen zehn Jahre sowie bei empfangenen Handels- und
                        Geschäftsbriefen und Wiedergaben der abgesandten Handels- und
                        Geschäftsbriefe sechs Jahre. Die Frist beginnt mit Ablauf des
                        Kalenderjahres, in dem die letzte Eintragung in das Buch gemacht, das
                        Inventar, die Eröffnungsbilanz, der Jahresabschluss oder der Lagebericht
                        aufgestellt, der Handels- oder Geschäftsbrief empfangen oder abgesandt
                        worden oder der Buchungsbeleg entstanden ist, ferner die Aufzeichnung
                        vorgenommen worden ist oder die sonstigen Unterlagen entstanden sind.
                    </p>
                    <p>
                        Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder Plattformen
                        einsetzen, gelten im Verhältnis zwischen den Nutzern und den Anbietern die
                        Geschäftsbedingungen und Datenschutzhinweise der jeweiligen Drittanbieter
                        oder Plattformen.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Zahlungsdaten (z.&nbsp;B. Bankverbindungen, Rechnungen,
                            Zahlungshistorie); Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern);
                            Vertragsdaten (z.&nbsp;B. Vertragsgegenstand, Laufzeit, Kundenkategorie);
                            Nutzungsdaten (z.&nbsp;B. besuchte Webseiten, Interesse an Inhalten,
                            Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z.&nbsp;.B.
                            IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Kunden; Interessenten; Geschäfts-
                            und Vertragspartner. Schüler/ Studenten/ Teilnehmer.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
                            Leistungen und Erfüllung vertraglicher Pflichten; Sicherheitsmaßnahmen;
                            Kontaktanfragen und Kommunikation; Büro- und Organisationsverfahren.
                            Verwaltung und Beantwortung von Anfragen.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                            Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung
                            (Art. 6 Abs. 1 S. 1 lit. c) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Kundenkonto: </strong>Kunden können innerhalb unseres
                            Onlineangebotes ein Konto anlegen (z.&nbsp;B. Kunden- bzw. Nutzerkonto,
                            kurz &quot;Kundenkonto&quot;). Falls die Registrierung eines Kundenkontos
                            erforderlich ist, werden Kunden hierauf ebenso hingewiesen wie auf die für
                            die Registrierung erforderlichen Angaben. Die Kundenkonten sind nicht
                            öffentlich und können von Suchmaschinen nicht indexiert werden. Im Rahmen
                            der Registrierung sowie anschließender Anmeldungen und Nutzungen des
                            Kundenkontos speichern wir die IP-Adressen der Kunden nebst den
                            Zugriffszeitpunkten, um die Registrierung nachweisen und etwaigem
                            Missbrauch des Kundenkontos vorbeugen zu können. Wurde das Kundenkonto
                            gekündigt, werden die Daten des Kundenkontos nach dem Kündigungszeitpunkt
                            gelöscht, sofern sie nicht für andere Zwecke als die Bereitstellung im
                            Kundenkonto aufbewahrt werden oder aus rechtlichen Gründen aufbewahrt
                            werden müssen (z.&nbsp;B. interne Speicherung von Kundendaten,
                            Bestellvorgängen oder Rechnungen). Es liegt in der Verantwortung der
                            Kunden, ihre Daten bei Kündigung des Kundenkontos zu sichern;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
      </span>
                        </li>
                        <li>
                            <strong>Shop und E-Commerce: </strong>Wir verarbeiten die Daten unserer
                            Kunden, um ihnen die Auswahl, den Erwerb, bzw. die Bestellung der
                            gewählten Produkte, Waren sowie verbundener Leistungen, als auch deren
                            Bezahlung und Zustellung, bzw. Ausführung zu ermöglichen. Sofern für die
                            Ausführung einer Bestellung erforderlich, setzen wir Dienstleister,
                            insbesondere Post-, Speditions- und Versandunternehmen ein, um die
                            Lieferung, bzw. Ausführung gegenüber unseren Kunden durchzuführen. Für die
                            Abwicklung der Zahlungsvorgänge nehmen wir die Dienste von Banken und
                            Zahlungsdienstleistern in Anspruch. Die erforderlichen Angaben sind als
                            solche im Rahmen des Bestell- bzw. vergleichbaren Erwerbsvorgangs
                            gekennzeichnet und umfassen die zur Auslieferung, bzw.
                            Zurverfügungstellung und Abrechnung benötigten Angaben sowie
                            Kontaktinformationen, um etwaige Rücksprache halten zu können;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
      </span>
                        </li>
                        <li>
                            <strong>Bildungs- und Schulungsleistungen: </strong>Wir verarbeiten die
                            Daten der Teilnehmer unserer Bildungs- und Schulungsangebote (einheitlich
                            bezeichnet als &quot;Aus- und Fortzubildende&quot;), um ihnen gegenüber unsere
                            Schulungsleistungen erbringen zu können. Die hierbei verarbeiteten Daten,
                            die Art, der Umfang, der Zweck und die Erforderlichkeit ihrer Verarbeitung
                            bestimmen sich nach dem zugrundeliegenden Vertrags- und
                            Schulungsverhältnis. Zu den Verarbeitungsformen gehören auch die
                            Leistungsbewertung und die Evaluation unserer Leistungen sowie jener der
                            Lehrenden. In Rahmen unserer Tätigkeit können wir ferner besondere
                            Kategorien von Daten, hier insbesondere Angaben zur Gesundheit der Aus-
                            und Fortzubildenden sowie Daten, aus denen die ethnische Herkunft,
                            politische Meinungen, religiöse oder weltanschauliche Überzeugungen
                            hervorgehen, verarbeiten. Hierzu holen wir, sofern erforderlich, eine
                            ausdrückliche Einwilligung der Aus- und Fortzubildenden ein und
                            verarbeiten die besonderen Kategorien von Daten ansonsten nur, wenn es zur
                            Erbringung der Schulungsleistungen, zu Zwecken der Gesundheitsvorsorge,
                            des Sozialschutzes oder des Schutzes lebensnotwendiger Interessen der Aus-
                            und Fortzubildenden erforderlich ist;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
      </span>
                        </li>
                    </ul>
                    <h2 id="m605">
                        Einsatz von Online-Plattformen zu Angebots- und Vertriebszwecken
                    </h2>
                    <p>
                        Wir bieten unsere Leistungen auf Online-Plattformen, die von anderen
                        Dienstanbietern betrieben werden, an. In diesem Zusammenhang gelten
                        zusätzlich zu unseren Datenschutzhinweisen die Datenschutzhinweise der
                        jeweiligen Plattformen. Dies gilt insbesondere im Hinblick auf die
                        Durchführung des Zahlungsvorgangs und der auf den Plattformen eingesetzten
                        Verfahren zur Reichweitemessung und zum interessensbezogenen Marketing.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Zahlungsdaten (z.&nbsp;B. Bankverbindungen, Rechnungen,
                            Zahlungshistorie); Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern);
                            Vertragsdaten (z.&nbsp;B. Vertragsgegenstand, Laufzeit, Kundenkategorie);
                            Nutzungsdaten (z.&nbsp;B. besuchte Webseiten, Interesse an Inhalten,
                            Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z.&nbsp;.B.
                            IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Kunden.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
                            Leistungen und Erfüllung vertraglicher Pflichten. Marketing.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                            Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                        </li>
                    </ul>
                    <h2 id="m3575">
                        Im Rahmen der Geschäftstätigkeit eingesetzte Anbieter und Services
                    </h2>
                    <p>
                        Im Rahmen unserer Geschäftstätigkeit nutzen wir unter Beachtung der
                        gesetzlichen Vorgaben zusätzliche Dienste, Plattformen, Schnittstellen oder
                        Plug-ins von Drittanbietern (kurz &quot;Dienste&quot;). Deren Nutzung beruht auf
                        unseren Interessen an einer ordnungsgemäßen, rechtmäßigen und
                        <span className="dsg-license-content-blurred de dsg-ttip-activate">
      {" "}
                            - Dieser Textbereich muss mit einer Premium Lizenz freischaltet werden. -
      premiumtext premiumtext premiumtext premiumtext premiumtext premiumtext
      premiumtext premiumtext premiumtext premiumtext{" "}
    </span>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Zahlungsdaten (z.&nbsp;B. Bankverbindungen, Rechnungen,
                            Zahlungshistorie
                            <span className="dsg-license-content-blurred de dsg-ttip-activate">
        {" "}
                                - Dieser Textbereich muss mit einer Premium Lizenz freischaltet werden.
        - premiumtext premiumtext{" "}
      </span>
                            ); Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern); Inhaltsdaten
                            (z.&nbsp;B. Eingaben in Onlineformularen); Vertragsdaten (z.&nbsp;.B.
                            Vertragsgegenstand, Laufzeit, Kundenkategorie
                            <span className="dsg-license-content-blurred de dsg-ttip-activate">
        {" "}
                                - Dieser Textbereich muss mit einer Premium Lizenz freischaltet werden.
        - premiumtext premiumtext{" "}
      </span>
                            ).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Kunden; Interessenten; Nutzer
                            (z.&nbsp;B. Webseitenbesucher, Nutzer von
                            <span className="dsg-license-content-blurred de dsg-ttip-activate">
        {" "}
                                - Dieser Textbereich muss mit einer Premium Lizenz freischaltet werden.
        - premiumtext premiumtext premiumtext{" "}
      </span>
                            ). Geschäfts- und Vertragspartner.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
                            Leistungen und Erfüllung vertraglicher Pflichten. Büro- und
                            Organisationsverfahren.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <h2 id="m326">Zahlungsverfahren</h2>
                    <p>
                        Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen, aufgrund
                        gesetzlicher Pflichten oder sonst auf Grundlage unserer berechtigten
                        Interessen bieten wir den betroffenen Personen effiziente und sichere
                        Zahlungsmöglichkeiten an und setzen hierzu neben Banken und Kreditinstituten
                        weitere Dienstleister ein (zusammenfassend &quot;Zahlungsdienstleister&quot;).
                    </p>
                    <p>
                        Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören
                        Bestandsdaten, wie z.&nbsp;B. der Name und die Adresse, Bankdaten, wie
                        z.&nbsp;B. Kontonummern oder Kreditkartennummern, Passwörter, TANs und
                        Prüfsummen sowie die Vertrags-, Summen- und empfängerbezogenen Angaben. Die
                        Angaben sind erforderlich, um die Transaktionen durchzuführen. Die
                        eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister
                        verarbeitet und bei diesen gespeichert. D.&nbsp;h., wir erhalten keine
                        konto- oder kreditkartenbezogenen Informationen, sondern lediglich
                        Informationen mit Bestätigung oder Negativbeauskunftung der Zahlung. Unter
                        Umständen werden die Daten seitens der Zahlungsdienstleister an
                        Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die
                        Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und die
                        Datenschutzhinweise der Zahlungsdienstleister.
                    </p>
                    <p>
                        Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die
                        Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche innerhalb
                        der jeweiligen Webseiten bzw. Transaktionsapplikationen abrufbar sind. Wir
                        verweisen auf diese ebenfalls zwecks weiterer Informationen und
                        Geltendmachung von Widerrufs-, Auskunfts- und anderen Betroffenenrechten.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Zahlungsdaten (z.&nbsp;B. Bankverbindungen, Rechnungen,
                            Zahlungshistorie); Vertragsdaten (z.&nbsp;B. Vertragsgegenstand, Laufzeit,
                            Kundenkategorie); Nutzungsdaten (z.&nbsp;B. besuchte Webseiten, Interesse
                            an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten
                            (z.&nbsp;B. IP-Adressen, Zeitangaben, Identifikationsnummern,
                            Einwilligungsstatus); Kontaktdaten (z.&nbsp;.B. E-Mail, Telefonnummern).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Kunden. Interessenten.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
                            Leistungen und Erfüllung vertraglicher Pflichten.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                            Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Apple Pay: </strong>Zahlungsdienstleistungen (technische Anbindung
                            von Online-Bezahlmethoden); <strong>Dienstanbieter:</strong> Apple Inc.,
                            Infinite Loop, Cupertino, CA 95014, USA;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.apple.com/de/apple-pay/" target="_blank">
                                https://www.apple.com/de/apple-pay/
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://www.apple.com/legal/privacy/de-ww/" target="_blank">
                                https://www.apple.com/legal/privacy/de-ww/
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Giropay: </strong>Zahlungsdienstleistungen (technische Anbindung
                            von Online-Bezahlmethoden); <strong>Dienstanbieter:</strong> giropay GmbH,
                            An der Welle 4, 60322 Frankfurt, Deutschland;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.giropay.de" target="_blank">
                                https://www.giropay.de
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a
                                href="https://www.giropay.de/rechtliches/datenschutzerklaerung/"
                                target="_blank"
                            >
                                https://www.giropay.de/rechtliches/datenschutzerklaerung/
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Google Pay: </strong>Zahlungsdienstleistungen (technische
                            Anbindung von Online-Bezahlmethoden); <strong>Dienstanbieter:</strong>{" "}
                            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://pay.google.com/intl/de_de/about/" target="_blank">
                                https://pay.google.com/intl/de_de/about/
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://policies.google.com/privacy" target="_blank">
                                https://policies.google.com/privacy
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Klarna: </strong>Zahlungsdienstleistungen (technische Anbindung
                            von Online-Bezahlmethoden); <strong>Dienstanbieter:</strong> Klarna Bank
                            AB (publ), Sveavägen 46, 111 34 Stockholm, Schweden;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.klarna.com/de" target="_blank">
                                https://www.klarna.com/de
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://www.klarna.com/de/datenschutz" target="_blank">
                                https://www.klarna.com/de/datenschutz
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Mastercard: </strong>Zahlungsdienstleistungen (technische
                            Anbindung von Online-Bezahlmethoden); <strong>Dienstanbieter:</strong>{" "}
                            Mastercard Europe SA, Chaussée de Tervuren 198A, B-1410 Waterloo, Belgien;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.mastercard.de/de-de.html" target="_blank">
                                https://www.mastercard.de/de-de.html
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a
                                href="https://www.mastercard.de/de-de/datenschutz.html"
                                target="_blank"
                            >
                                https://www.mastercard.de/de-de/datenschutz.html
                            </a>
                            .
                        </li>
                        <li>
                            <strong>PayPal: </strong>Zahlungsdienstleistungen (technische Anbindung
                            von Online-Bezahlmethoden) (z.&nbsp;B. PayPal, PayPal Plus, Braintree);{" "}
                            <strong>Dienstanbieter:</strong> PayPal (Europe) S.à r.l. et Cie, S.C.A.,
                            22-24 Boulevard Royal, L-2449 Luxembourg;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.paypal.com/de" target="_blank">
                                https://www.paypal.com/de
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a
                                href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
                                target="_blank"
                            >
                                https://www.paypal.com/de/webapps/mpp/ua/privacy-full
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Stripe: </strong>Zahlungsdienstleistungen (technische Anbindung
                            von Online-Bezahlmethoden); <strong>Dienstanbieter:</strong> Stripe, Inc.,
                            510 Townsend Street, San Francisco, CA 94103, USA;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://stripe.com" target="_blank">
                                https://stripe.com
                            </a>
                            ; <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://stripe.com/de/privacy" target="_blank">
                                https://stripe.com/de/privacy
                            </a>
                            . <strong>Grundlage Drittlandübermittlung:</strong>{" "}
                            <span className=""> EU-US Data Privacy Framework (DPF)</span>.
                        </li>
                        <li>
                            <strong>Visa: </strong>Zahlungsdienstleistungen (technische Anbindung von
                            Online-Bezahlmethoden); <strong>Dienstanbieter:</strong> Visa Europe
                            Services Inc., Zweigniederlassung London, 1 Sheldon Square, London W2 6TT,
                            GB;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.visa.de" target="_blank">
                                https://www.visa.de
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a
                                href="https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html"
                                target="_blank"
                            >
                                https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html
                            </a>
                            .
                        </li>
                    </ul>
                    <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
                    <p>
                        Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur
                        Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse
                        des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer
                        Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.&nbsp;B.
                            besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
                            Kommunikations- und Verfahrensdaten (z.&nbsp;B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus); Inhaltsdaten (z.&nbsp;.B.
                            Eingaben in Onlineformularen).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.&nbsp;.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
                            Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische
                            Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und
                            technischen Geräten (Computer, Server etc.).). Sicherheitsmaßnahmen.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff auf
                            unser Onlineangebot wird in Form von so genannten &quot;Server-Logfiles&quot;
                            protokolliert. Zu den Serverlogfiles können die Adresse und Name der
                            abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs,
                            übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp
                            nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor
                            besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider
                            gehören. Die Serverlogfiles können zum einen zu Zwecken der Sicherheit
                            eingesetzt werden, z.&nbsp;B., um eine Überlastung der Server zu vermeiden
                            (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten
                            DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre
                            Stabilität sicherzustellen;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO).{" "}
      </span>
                            <strong>Löschung von Daten:</strong> Logfile-Informationen werden für die
                            Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder
                            anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken
                            erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls
                            von der Löschung ausgenommen.
                        </li>
                        <li>
                            <strong>Hetzner: </strong>Leistungen auf dem Gebiet der Bereitstellung von
                            informationstechnischer Infrastruktur und verbundenen Dienstleistungen
                            (z.&nbsp;B. Speicherplatz und/oder Rechenkapazitäten);{" "}
                            <strong>Dienstanbieter:</strong> Hetzner Online GmbH, Industriestr. 25,
                            91710 Gunzenhausen, Deutschland;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.hetzner.com" target="_blank">
                                https://www.hetzner.com
                            </a>
                            ; <strong>Datenschutzerklärung:</strong>{" "}
                            <a
                                href="https://www.hetzner.com/de/rechtliches/datenschutz"
                                target="_blank"
                            >
                                https://www.hetzner.com/de/rechtliches/datenschutz
                            </a>
                            . <strong>Auftragsverarbeitungsvertrag:</strong>{" "}
                            <a
                                href="https://docs.hetzner.com/de/general/general-terms-and-conditions/data-privacy-faq/"
                                target="_blank"
                            >
                                https://docs.hetzner.com/de/general/general-terms-and-conditions/data-privacy-faq/
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Amazon Web Services Cloudfront: </strong>Content-Delivery-Network (CDN) - Dienst, mit
                            dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große
                            Mediendateien, wie Grafiken oder Programm-Skripte mit Hilfe regional
                            verteilter und über das Internet verbundener Server, schneller und
                            sicherer ausgeliefert werden können; <strong>Dienstanbieter:</strong>{" "}
                            Amazon Web Services EMEA SARL, 38 avenue John F. Kennedy, L-1855, Luxemburg;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://aws.amazon.com/de/?nc2=h_lg" target="_blank">
                                https://aws.amazon.com/de/?nc2=h_lg
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a
                                href="https://d1.awsstatic.com/legal/privacypolicy/AWS_Privacy_Notice_German_2023-09-22.pdf"
                                target="_blank"
                            >
                                https://d1.awsstatic.com/legal/privacypolicy/AWS_Privacy_Notice_German_2023-09-22.pdf
                            </a>
                            .
                        </li>
                    </ul>
                    <h2 id="m367">Registrierung, Anmeldung und Nutzerkonto</h2>
                    <p>
                        Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden
                        den Nutzern die erforderlichen Pflichtangaben mitgeteilt und zu Zwecken der
                        Bereitstellung des Nutzerkontos auf Grundlage vertraglicher Pflichterfüllung
                        verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die
                        Login-Informationen (Nutzername, Passwort sowie eine E-Mail-Adresse).
                    </p>
                    <p>
                        Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen
                        sowie der Nutzung des Nutzerkontos speichern wir die IP-Adresse und den
                        Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf
                        Grundlage unserer berechtigten Interessen als auch jener der Nutzer an einem
                        Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe
                        dieser Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur
                        Verfolgung unserer Ansprüche erforderlich oder es besteht eine gesetzliche
                        Verpflichtung hierzu.
                    </p>
                    <p>
                        Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind,
                        wie z.&nbsp;B. technische Änderungen, per E-Mail informiert werden.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern); Inhaltsdaten
                            (z.&nbsp;B. Eingaben in Onlineformularen); Meta-, Kommunikations- und
                            Verfahrensdaten (z.&nbsp;.B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.&nbsp;.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
                            Leistungen und Erfüllung vertraglicher Pflichten; Sicherheitsmaßnahmen;
                            Verwaltung und Beantwortung von Anfragen. Bereitstellung unseres
                            Onlineangebotes und Nutzerfreundlichkeit.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                            Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO). Berechtigte Interessen (Art.
                            6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Registrierung mit Pseudonymen: </strong>Nutzer dürfen statt
                            Klarnamen Pseudonyme als Nutzernamen verwenden;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
      </span>
                        </li>
                        <li>
                            <strong>Zwei-Faktor-Authentifizierung: </strong>Die
                            Zwei-Faktor-Authentifizierung bietet eine zusätzliche Sicherheitsebene für
                            Ihr Benutzerkonto und stellt sicher, dass nur Sie auf Ihr Konto zugreifen
                            können, auch, wenn jemand anderes Ihr Passwort kennt. Zu diesem Zweck
                            müssen Sie zusätzlich zu Ihrem Passwort eine weitere
                            Authentifizierungsmaßnahme durchführen (z.&nbsp;B. einen an ein mobiles
                            Gerät gesandten Code eingeben). Wir werden Sie über das von uns
                            eingesetzte Verfahren informieren;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
      </span>
                        </li>
                        <li>
                            <strong>Löschung von Daten nach Kündigung: </strong>Wenn Nutzer ihr
                            Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das
                            Nutzerkonto, vorbehaltlich einer gesetzlichen Erlaubnis, Pflicht oder
                            Einwilligung der Nutzer, gelöscht;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
      </span>
                        </li>
                        <li>
                            <strong>Keine Aufbewahrungspflicht für Daten: </strong>Es obliegt den
                            Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu
                            sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer
                            gespeicherte Daten des Nutzers unwiederbringlich zu löschen;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
      </span>
                        </li>
                    </ul>
                    <h2 id="m451">Single-Sign-On-Anmeldung</h2>
                    <p>
                        Als &quot;Single-Sign-On&quot; oder &quot;Single-Sign-On-Anmeldung bzw.
                        &quot;-Authentifizierung&quot; werden Verfahren bezeichnet, die es Nutzern erlauben,
                        sich mit Hilfe eines Nutzerkontos bei einem Anbieter von
                        Single-Sign-On-Verfahren (z.&nbsp;B. einem sozialen Netzwerk), auch bei
                        unserem Onlineangebot, anzumelden. Voraussetzung der
                        Single-Sign-On-Authentifizierung ist, dass die Nutzer bei dem jeweiligen
                        Single-Sign-On-Anbieter registriert sind und die erforderlichen Zugangsdaten
                        in dem dafür vorgesehenen Onlineformular eingeben, bzw. schon bei dem
                        Single-Sign-On-Anbieter angemeldet sind und die Single-Sign-On-Anmeldung via
                        Schaltfläche bestätigen.
                    </p>
                    <p>
                        Die Authentifizierung erfolgt direkt bei dem jeweiligen
                        Single-Sign-On-Anbieter. Im Rahmen einer solchen Authentifizierung erhalten
                        wir eine Nutzer-ID mit der Information, dass der Nutzer unter dieser
                        Nutzer-ID beim jeweiligen Single-Sign-On-Anbieter eingeloggt ist und eine
                        für uns für andere Zwecke nicht weiter nutzbare ID (sog &quot;User Handle&quot;). Ob
                        uns zusätzliche Daten übermittelt werden, hängt allein von dem genutzten
                        Single-Sign-On-Verfahren ab, von den gewählten Datenfreigaben im Rahmen der
                        Authentifizierung und zudem davon, welche Daten Nutzer in den Privatsphäre-
                        oder sonstigen Einstellungen des Nutzerkontos beim Single-Sign-On-Anbieter
                        freigegeben haben. Es können je nach Single-Sign-On-Anbieter und der Wahl
                        der Nutzer verschiedene Daten sein, in der Regel sind es die E-Mail-Adresse
                        und der Benutzername. Das im Rahmen des Single-Sign-On-Verfahrens
                        eingegebene Passwort bei dem Single-Sign-On-Anbieter ist für uns weder
                        einsehbar, noch wird es von uns gespeichert.{" "}
                    </p>
                    <p>
                        Die Nutzer werden gebeten, zu beachten, dass deren bei uns gespeicherte
                        Angaben automatisch mit ihrem Nutzerkonto beim Single-Sign-On-Anbieter
                        abgeglichen werden können, dies jedoch nicht immer möglich ist oder
                        tatsächlich erfolgt. Ändern sich z.&nbsp;B. die E-Mail-Adressen der Nutzer,
                        müssen sie diese manuell in ihrem Nutzerkonto bei uns ändern.
                    </p>
                    <p>
                        Die Single-Sign-On-Anmeldung können wir, sofern mit den Nutzern vereinbart,
                        im Rahmen der oder vor der Vertragserfüllung einsetzen, soweit die Nutzer
                        darum gebeten wurden, im Rahmen einer Einwilligung verarbeiten und setzen
                        sie ansonsten auf Grundlage der berechtigten Interessen unsererseits und der
                        Interessen der Nutzer an einem effektiven und sicheren Anmeldesystem ein.
                    </p>
                    <p>
                        Sollten Nutzer sich einmal entscheiden, die Verknüpfung ihres Nutzerkontos
                        beim Single-Sign-On-Anbieter nicht mehr für das Single-Sign-On-Verfahren
                        nutzen zu wollen, müssen sie diese Verbindung innerhalb ihres Nutzerkontos
                        beim Single-Sign-On-Anbieter aufheben. Möchten Nutzer deren Daten bei uns
                        löschen, müssen sie ihre Registrierung bei uns kündigen.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern); Nutzungsdaten
                            (z.&nbsp;B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten);
                            Meta-, Kommunikations- und Verfahrensdaten (z.&nbsp;.B. IP-Adressen,
                            Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.&nbsp;.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
                            Leistungen und Erfüllung vertraglicher Pflichten; Sicherheitsmaßnahmen.
                            Anmeldeverfahren.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Discord Single-Sign-On: </strong>Authentifizierungsdienst;{" "}
                            <strong>Dienstanbieter:</strong> Discord Inc.
                            444 de Haro Street
                            Suite 200
                            San Francisco, CA 94107
                            {" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://discord.com/" target="_blank">
                                https://discord.com/
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a
                                href="https://discord.com/privacy"
                                target="_blank"
                            >
                                https://discord.com/privacy
                            </a>
                            .
                        </li>
                    </ul>
                    <h2 id="m104">Blogs und Publikationsmedien</h2>
                    <p>
                        Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und
                        Publikation (nachfolgend &quot;Publikationsmedium&quot;). Die Daten der Leser werden
                        für die Zwecke des Publikationsmediums nur insoweit verarbeitet, als es für
                        dessen Darstellung und die Kommunikation zwischen Autoren und Lesern oder
                        aus Gründen der Sicherheit erforderlich ist. Im Übrigen verweisen wir auf
                        die Informationen zur Verarbeitung der Besucher unseres Publikationsmediums
                        im Rahmen dieser Datenschutzhinweise.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern); Inhaltsdaten
                            (z.&nbsp;B. Eingaben in Onlineformularen); Nutzungsdaten (z.&nbsp;B.
                            besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
                            Kommunikations- und Verfahrensdaten (z.&nbsp;.B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.&nbsp;.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
                            Leistungen und Erfüllung vertraglicher Pflichten; Feedback (z.&nbsp;B.
                            Sammeln von Feedback via Online-Formular); Bereitstellung unseres
                            Onlineangebotes und Nutzerfreundlichkeit; Sicherheitsmaßnahmen. Verwaltung
                            und Beantwortung von Anfragen.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Kommentare und Beiträge: </strong>Wenn Nutzer Kommentare oder
                            sonstige Beiträge hinterlassen, können ihre IP-Adressen auf Grundlage
                            unserer berechtigten Interessen gespeichert werden. Das erfolgt zu unserer
                            Sicherheit, falls jemand in Kommentaren und Beiträgen widerrechtliche
                            Inhalte hinterlässt (Beleidigungen, verbotene politische Propaganda etc.).
                            In diesem Fall können wir selbst für den Kommentar oder Beitrag belangt
                            werden und sind daher an der Identität des Verfassers interessiert.
                            <br />
                            <br />
                            Des Weiteren behalten wir uns vor, auf Grundlage unserer berechtigten
                            Interessen die Angaben der Nutzer zwecks Spamerkennung zu verarbeiten.
                            <br />
                            <br />
                            Auf derselben Rechtsgrundlage behalten wir uns vor, im Fall von Umfragen
                            die IP-Adressen der Nutzer für deren Dauer zu speichern und Cookies zu
                            verwenden, um Mehrfachabstimmungen zu vermeiden.
                            <br />
                            <br />
                            Die im Rahmen der Kommentare und Beiträge mitgeteilten Informationen zur
                            Person, etwaige Kontakt- sowie Webseiteninformationen als auch die
                            inhaltlichen Angaben werden von uns bis zum Widerspruch der Nutzer
                            dauerhaft gespeichert;
                            <br />
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO).
      </span>
                        </li>
                        <li>
                            <strong>Profilbilder von Gravatar: </strong>Profilbilder - Wir setzen
                            innerhalb unseres Onlineangebotes und insbesondere im Blog den Dienst
                            Gravatar ein.
                            <br />
                            <br />
                            Gravatar ist ein Dienst, bei dem sich Nutzer anmelden und Profilbilder und
                            ihre E-Mail-Adressen hinterlegen können. Wenn Nutzer mit der jeweiligen
                            E-Mail-Adresse auf anderen Onlinepräsenzen (vor allem in Blogs) Beiträge
                            oder Kommentare hinterlassen, können deren Profilbilder neben den
                            Beiträgen oder Kommentaren dargestellt werden. Hierzu wird die von den
                            Nutzern mitgeteilte E-Mail-Adresse an Gravatar zwecks Prüfung, ob zu ihr
                            ein Profil gespeichert ist, verschlüsselt übermittelt. Dies ist der
                            einzige Zweck der Übermittlung der E-Mail-Adresse. Sie wird nicht für
                            andere Zwecke verwendet, sondern danach gelöscht.
                            <br />
                            <br />
                            Die Nutzung von Gravatar erfolgt auf Grundlage unserer berechtigten
                            Interessen, da wir mit Hilfe von Gravatar den Beitrags- und
                            Kommentarverfassern die Möglichkeit bieten, ihre Beiträge mit einem
                            Profilbild zu personalisieren.
                            <br />
                            <br />
                            Durch die Anzeige der Bilder bringt Gravatar die IP-Adresse der Nutzer in
                            Erfahrung, da dies für eine Kommunikation zwischen einem Browser und einem
                            Onlineservice notwendig ist. <br />
                            <br />
                            Wenn Nutzer nicht möchten, dass ein mit ihrer E-Mail-Adresse bei Gravatar
                            verknüpftes Benutzerbild in den Kommentaren erscheint, sollten sie zum
                            Kommentieren eine E-Mail-Adresse nutzen, welche nicht bei Gravatar
                            hinterlegt ist. Wir weisen ferner darauf hin, dass es auch möglich ist
                            eine anonyme oder gar keine E-Mail-Adresse zu verwenden, falls die Nutzer
                            nicht wünschen, dass die eigene E-Mail-Adresse an Gravatar übersendet
                            wird. Nutzer können die Übertragung der Daten komplett verhindern, indem
                            sie unser Kommentarsystem nicht nutzen;
                            <br />
                            <strong>Dienstanbieter:</strong> Aut O’Mattic A8C Irland Ltd., Grand Canal
                            Dock, 25 Herbert Pl, Dublin, D02 AY86, Irland;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://automattic.com" target="_blank">
                                https://automattic.com
                            </a>
                            ; <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://automattic.com/privacy" target="_blank">
                                https://automattic.com/privacy
                            </a>
                            . <strong>Grundlage Drittlandübermittlung:</strong>{" "}
                            <span className=""> EU-US Data Privacy Framework (DPF)</span>.
                        </li>
                    </ul>
                    <h2 id="m182">Kontakt- und Anfragenverwaltung</h2>
                    <p>
                        Bei der Kontaktaufnahme mit uns (z.&nbsp;B. per Post, Kontaktformular,
                        E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer-
                        und Geschäftsbeziehungen werden die Angaben der anfragenden Personen
                        verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger
                        angefragter Maßnahmen erforderlich ist.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.&nbsp;B. E-Mail,
                            Telefonnummern); Inhaltsdaten (z.&nbsp;B. Eingaben in Onlineformularen);
                            Nutzungsdaten (z.&nbsp;B. besuchte Webseiten, Interesse an Inhalten,
                            Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z.&nbsp;.B.
                            IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Kommunikationspartner.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
                            Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback
                            (z.&nbsp;B. Sammeln von Feedback via Online-Formular). Bereitstellung
                            unseres Onlineangebotes und Nutzerfreundlichkeit.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art.
                            6 Abs. 1 S. 1 lit. b) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Kontaktformular: </strong>Wenn Nutzer über unser Kontaktformular,
                            E-Mail oder andere Kommunikationswege mit uns in Kontakt treten,
                            verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur
                            Bearbeitung des mitgeteilten Anliegens;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen
        (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
      </span>
                        </li>
                    </ul>
                    <h2 id="m17">Newsletter und elektronische Benachrichtigungen</h2>
                    <p>
                        Wir versenden Newsletter, E-Mails und weitere elektronische
                        Benachrichtigungen (nachfolgend &quot;Newsletter&quot;) nur mit der Einwilligung der
                        Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer
                        Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie
                        für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere
                        Newsletter Informationen zu unseren Leistungen und uns.
                    </p>
                    <p>
                        Um sich zu unseren Newslettern anzumelden, reicht es grundsätzlich aus, wenn
                        Sie Ihre E-Mail-Adresse angeben. Wir können Sie jedoch bitten, einen Namen,
                        zwecks persönlicher Ansprache im Newsletter, oder weitere Angaben, sofern
                        diese für die Zwecke des Newsletters erforderlich sind, zu tätigen.
                    </p>
                    <p>
                        <strong>Double-Opt-In-Verfahren:</strong> Die Anmeldung zu unserem
                        Newsletter erfolgt grundsätzlich in einem sogenannten
                        Double-Opt-In-Verfahren. D.&nbsp;h., Sie erhalten nach der Anmeldung eine
                        E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden. Diese
                        Bestätigung ist notwendig, damit sich niemand mit fremden E-Mail-Adressen
                        anmelden kann. Die Anmeldungen zum Newsletter werden protokolliert, um den
                        Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu
                        können. Hierzu gehört die Speicherung des Anmelde- und des
                        Bestätigungszeitpunkts als auch der IP-Adresse. Ebenso werden die Änderungen
                        Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.
                    </p>
                    <p>
                        <strong>Löschung und Einschränkung der Verarbeitung: </strong> Wir können
                        die ausgetragenen E-Mail-Adressen bis zu drei Jahren auf Grundlage unserer
                        berechtigten Interessen speichern, bevor wir sie löschen, um eine ehemals
                        gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten
                        wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein
                        individueller Löschungsantrag ist jederzeit möglich, sofern zugleich das
                        ehemalige Bestehen einer Einwilligung bestätigt wird. Im Fall von Pflichten
                        zur dauerhaften Beachtung von Widersprüchen behalten wir uns die Speicherung
                        der E-Mail-Adresse alleine zu diesem Zweck in einer Sperrliste (sogenannte
                        &quot;Blocklist&quot;) vor.
                    </p>
                    <p>
                        Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer
                        berechtigten Interessen zu Zwecken des Nachweises seines ordnungsgemäßen
                        Ablaufs. Soweit wir einen Dienstleister mit dem Versand von E-Mails
                        beauftragen, erfolgt dies auf Grundlage unserer berechtigten Interessen an
                        einem effizienten und sicheren Versandsystem.
                    </p>
                    <strong>Inhalte:</strong>{" "}
                    <p>Informationen zu uns, unseren Leistungen, Aktionen und Angeboten.</p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern); Meta-,
                            Kommunikations- und Verfahrensdaten (z.&nbsp;B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus); Nutzungsdaten (z.&nbsp;.B.
                            besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Kommunikationspartner.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z.&nbsp;.B. per
                            E-Mail oder postalisch).
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
                            a) DSGVO).
                        </li>
                        <li>
                            <strong>Widerspruchsmöglichkeit (Opt-Out): </strong>Sie können den Empfang
                            unseres Newsletters jederzeit kündigen, d.&nbsp;.h. Ihre Einwilligungen
                            widerrufen, bzw. dem weiteren Empfang widersprechen. Einen Link zur
                            Kündigung des Newsletters finden Sie entweder am Ende eines jeden
                            Newsletters oder können sonst eine der oben angegebenen
                            Kontaktmöglichkeiten, vorzugswürdig E-Mail, hierzu nutzen.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Messung von Öffnungs- und Klickraten: </strong>Die Newsletter
                            enthalten einen sogenannte &quot;web-beacon&quot;, d.&nbsp;h., eine pixelgroße
                            Datei, die beim Öffnen des Newsletters von unserem Server, bzw., sofern
                            wir einen Versanddienstleister einsetzen, von dessen Server abgerufen
                            wird. Im Rahmen dieses Abrufs werden zunächst technische Informationen,
                            wie Informationen zum Browser und Ihrem System, als auch Ihre IP-Adresse
                            und der Zeitpunkt des Abrufs, erhoben. <br />
                            <br />
                            Diese Informationen werden zur technischen Verbesserung unseres
                            Newsletters anhand der technischen Daten oder der Zielgruppen und ihres
                            Leseverhaltens auf Basis ihrer Abruforte (die mit Hilfe der IP-Adresse
                            bestimmbar sind) oder der Zugriffszeiten genutzt. Diese Analyse beinhaltet
                            ebenfalls die Feststellung, ob die Newsletter geöffnet werden, wann sie
                            geöffnet werden und welche Links geklickt werden. Diese Informationen
                            werden den einzelnen Newsletterempfängern zugeordnet und in deren Profilen
                            bis zu deren Löschung gespeichert. Die Auswertungen dienen uns dazu, die
                            Lesegewohnheiten unserer Nutzer zu erkennen und unsere Inhalte an sie
                            anzupassen oder unterschiedliche Inhalte entsprechend den Interessen
                            unserer Nutzer zu versenden.
                            <br />
                            <br />
                            Die Messung der Öffnungsraten und der Klickraten sowie Speicherung der
                            Messergebnisse in den Profilen der Nutzer
                            ;<br />
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
        a) DSGVO).
      </span>
                        </li>
                    </ul>
                    <h2 id="m638">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</h2>
                    <p>
                        Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen
                        Kommunikation, die über diverse Kanäle, wie z.&nbsp;B. E-Mail, Telefon, Post
                        oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann.
                    </p>
                    <p>
                        Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu
                        widerrufen oder der werblichen Kommunikation jederzeit zu widersprechen.
                    </p>
                    <p>
                        Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der bisherigen
                        Berechtigung erforderlichen Daten zur Kontaktaufnahme oder Zusendung bis zu
                        drei Jahre nach Ablauf des Jahres des Widerrufs oder Widerspruchs auf der
                        Grundlage unserer berechtigten Interessen. Die Verarbeitung dieser Daten ist
                        auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Auf der
                        Grundlage des berechtigten Interesses, den Widerruf bzw. Widerspruch der
                        Nutzer dauerhaft zu beachten, speichern wir ferner die zur Vermeidung einer
                        erneuten Kontaktaufnahme erforderlichen Daten (z.&nbsp;B. je nach
                        Kommunikationskanal die E-Mail-Adresse, Telefonnummer, Name).
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Kontaktdaten (z.&nbsp;.B. E-Mail, Telefonnummern).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Kommunikationspartner.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z.&nbsp;.B. per
                            E-Mail oder postalisch).
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
                            a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <h2 id="m237">Gewinnspiele und Wettbewerbe</h2>
                    <p>
                        Wir verarbeiten personenbezogene Daten der Teilnehmer von Gewinnspielen und
                        Wettbewerben nur unter Einhaltung der einschlägigen Datenschutzbestimmungen,
                        soweit die Verarbeitung zur Bereitstellung, Durchführung und Abwicklung des
                        Gewinnspiels vertraglich erforderlich ist, die Teilnehmer in die
                        Verarbeitung eingewilligt haben oder die Verarbeitung unseren berechtigten
                        Interessen dient (z.&nbsp;B. an der Sicherheit des Gewinnspiels oder dem
                        Schutz unserer Interessen vor Missbrauch durch mögliche Erfassung von
                        IP-Adressen bei Einreichung von Gewinnspielbeiträgen).
                    </p>
                    <p>
                        Falls im Rahmen der Gewinnspiele Beiträge der Teilnehmer veröffentlicht
                        werden (z.&nbsp;B. im Rahmen einer Abstimmung oder Präsentation der
                        Gewinnspielbeiträge bzw. der Gewinner oder der Berichterstattung zum
                        Gewinnspiel), weisen wir darauf hin, dass die Namen der Teilnehmer in diesem
                        Zusammenhang ebenfalls veröffentlicht werden können. Die Teilnehmer können
                        dem jederzeit widersprechen.
                    </p>
                    <p>
                        Findet das Gewinnspiel innerhalb einer Online-Plattform oder eines sozialen
                        Netzwerks (z.&nbsp;B. Facebook oder Instagram, nachfolgend bezeichnet als
                        &quot;Online-Plattform&quot;) statt, gelten zusätzlich die Nutzungs- und
                        Datenschutzbestimmungen der jeweiligen Plattformen. In diesen Fällen weisen
                        wir darauf hin, dass wir für die im Rahmen des Gewinnspiels mitgeteilten
                        Angaben der Teilnehmer verantwortlich sind und Anfragen im Hinblick auf das
                        Gewinnspiel an uns zu richten sind.
                    </p>
                    <p>
                        Die Daten der Teilnehmer werden gelöscht, sobald das Gewinnspiel oder der
                        Wettbewerb beendet sind und die Daten nicht mehr erforderlich sind, um die
                        Gewinner zu informieren oder weil nicht mehr mit Rückfragen zum Gewinnspiel
                        zu rechnen ist. Grundsätzlich werden die Daten der Teilnehmer spätestens 6
                        Monate nach Ende des Gewinnspiels gelöscht. Daten der Gewinner können länger
                        einbehalten werden, um z.&nbsp;B. Rückfragen zu den Gewinnen beantworten
                        oder die Gewinnleistungen erfüllen zu können; in diesem Fall richtet sich
                        die Aufbewahrungsdauer nach der Art des Gewinns und beträgt z.&nbsp;B. bei
                        Sachen oder Leistungen bis zu drei Jahre, um z.&nbsp;B. Gewährleistungsfälle
                        bearbeiten zu können. Ferner können die Daten der Teilnehmer länger
                        gespeichert werden, z.&nbsp;B. in Form der Berichterstattung zum Gewinnspiel
                        in Online- und Offline-Medien.
                    </p>
                    <p>
                        Sofern Daten im Rahmen des Gewinnspiels auch zu anderen Zwecken erhoben
                        wurden, richten sich deren Verarbeitung und die Aufbewahrungsdauer nach den
                        Datenschutzhinweisen zu dieser Nutzung (z.&nbsp;B. im Fall einer Anmeldung
                        zum Newsletter im Rahmen eines Gewinnspiels).
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.&nbsp;B. Namen,
                            Adressen); Inhaltsdaten (z.&nbsp;B. Eingaben in Onlineformularen); Meta-,
                            Kommunikations- und Verfahrensdaten (z.&nbsp;.B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Gewinnspiel- und
                            Wettbewerbsteilnehmer.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Durchführung von Gewinnspielen
                            und Wettbewerben.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                            Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                        </li>
                    </ul>
                    <h2 id="m263">Webanalyse, Monitoring und Optimierung</h2>
                    <p>
                        Die Webanalyse (auch als &quot;Reichweitenmessung&quot; bezeichnet) dient der
                        Auswertung der Besucherströme unseres Onlineangebotes und kann Verhalten,
                        Interessen oder demographische Informationen zu den Besuchern, wie
                        z.&nbsp;B. das Alter oder das Geschlecht, als pseudonyme Werte umfassen. Mit
                        Hilfe der Reichweitenanalyse können wir z.&nbsp;B. erkennen, zu welcher Zeit
                        unser Onlineangebot oder dessen Funktionen oder Inhalte am häufigsten
                        genutzt werden oder zur Wiederverwendung einladen. Ebenso können wir
                        nachvollziehen, welche Bereiche der Optimierung bedürfen.{" "}
                    </p>
                    <p>
                        Neben der Webanalyse können wir auch Testverfahren einsetzen, um z.&nbsp;B.
                        unterschiedliche Versionen unseres Onlineangebotes oder seiner Bestandteile
                        zu testen und optimieren.
                    </p>
                    <p>
                        Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken Profile,
                        d.&nbsp;h. zu einem Nutzungsvorgang zusammengefasste Daten angelegt und
                        Informationen in einem Browser, bzw. in einem Endgerät gespeichert und aus
                        diesem ausgelesen werden. Zu den erhobenen Angaben gehören insbesondere
                        besuchte Webseiten und dort genutzte Elemente sowie technische Angaben, wie
                        der verwendete Browser, das verwendete Computersystem sowie Angaben zu
                        Nutzungszeiten. Sofern Nutzer in die Erhebung ihrer Standortdaten uns
                        gegenüber oder gegenüber den Anbietern der von uns eingesetzten Dienste
                        einverstanden erklärt haben, können auch Standortdaten verarbeitet werden.
                    </p>
                    <p>
                        Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch nutzen
                        wir ein IP-Masking-Verfahren (d.&nbsp;h., Pseudonymisierung durch Kürzung
                        der IP-Adresse) zum Schutz der Nutzer. Generell werden die im Rahmen von
                        Webanalyse, A/B-Testings und Optimierung keine Klardaten der Nutzer (wie
                        z.&nbsp;B. E-Mail-Adressen oder Namen) gespeichert, sondern Pseudonyme.
                        D.&nbsp;h., wir als auch die Anbieter der eingesetzten Software kennen nicht
                        die tatsächliche Identität der Nutzer, sondern nur den für Zwecke der
                        jeweiligen Verfahren in deren Profilen gespeicherten Angaben.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.&nbsp;B.
                            besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
                            Kommunikations- und Verfahrensdaten (z.&nbsp;.B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.&nbsp;.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Reichweitenmessung (z.&nbsp;B.
                            Zugriffsstatistiken, Erkennung wiederkehrender Besucher). Profile mit
                            nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).
                        </li>
                        <li>
                            <strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der
                            IP-Adresse).
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
                            a) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Matomo: </strong>Bei Matomo handelt es sich um eine Software, die
                            zu Zwecken der Webanalyse und Reichweitenmessung eingesetzt wird. Im
                            Rahmen der Nutzung von Matomo werden Cookies erzeugt und auf dem Endgerät
                            der Nutzer gespeichert. Die im Rahmen der Nutzung von Matomo erhobenen
                            Daten der Nutzer werden nur von uns verarbeitet und nicht mit Dritten
                            geteilt. Die Cookies werden für einen maximalen Zeitraum von 13 Monaten
                            gespeichert:{" "}
                            <a href="https://matomo.org/faq/general/faq_146/" target="_blank">
                                https://matomo.org/faq/general/faq_146/
                            </a>
                            ;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
        a) DSGVO).{" "}
      </span>
                            <strong>Löschung von Daten:</strong> Die Cookies haben eine Speicherdauer
                            von maximal 13 Monaten.
                        </li>
                    </ul>
                    <h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2>
                    <p>
                        Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten
                        in diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu
                        kommunizieren oder um Informationen über uns anzubieten.
                    </p>
                    <p>
                        Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der
                        Europäischen Union verarbeitet werden können. Hierdurch können sich für die
                        Nutzer Risiken ergeben, weil so z.&nbsp;B. die Durchsetzung der Rechte der
                        Nutzer erschwert werden könnte.
                    </p>
                    <p>
                        Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall
                        für Marktforschungs- und Werbezwecke verarbeitet. So können z.&nbsp;B.
                        anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der
                        Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum
                        verwendet werden, um z.&nbsp;B. Werbeanzeigen innerhalb und außerhalb der
                        Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen.
                        Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer
                        gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer
                        gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
                        unabhängig der von den Nutzern verwendeten Geräte gespeichert werden
                        (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen sind
                        und bei diesen eingeloggt sind).
                    </p>
                    <p>
                        Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der
                        Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die
                        Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.
                    </p>
                    <p>
                        Auch im Fall von Auskunftsanfragen und der Geltendmachung von
                        Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den
                        Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils
                        Zugriff auf die Daten der Nutzer und können direkt entsprechende Maßnahmen
                        ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann
                        können Sie sich an uns wenden.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.&nbsp;B. E-Mail,
                            Telefonnummern); Inhaltsdaten (z.&nbsp;B. Eingaben in Onlineformularen);
                            Nutzungsdaten (z.&nbsp;B. besuchte Webseiten, Interesse an Inhalten,
                            Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z.&nbsp;.B.
                            IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.&nbsp;.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
                            Kommunikation; Feedback (z.&nbsp;B. Sammeln von Feedback via
                            Online-Formular). Marketing.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Instagram: </strong>Soziales Netzwerk;{" "}
                            <strong>Dienstanbieter:</strong> Meta Platforms Ireland Limited, 4 Grand
                            Canal Square, Grand Canal Harbour, Dublin 2, Irland;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.instagram.com" target="_blank">
                                https://www.instagram.com
                            </a>
                            . <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://instagram.com/about/legal/privacy" target="_blank">
                                https://instagram.com/about/legal/privacy
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Facebook-Seiten: </strong>Profile innerhalb des sozialen Netzwerks
                            Facebook; <strong>Dienstanbieter:</strong> Meta Platforms Ireland Limited,
                            Merrion Road, Dublin 4, D04 X2K5, Irland;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.facebook.com" target="_blank">
                                https://www.facebook.com
                            </a>
                            ; <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://www.facebook.com/about/privacy" target="_blank">
                                https://www.facebook.com/about/privacy
                            </a>
                            ; <strong>Grundlage Drittlandübermittlung:</strong>{" "}
                            <span className=""> EU-US Data Privacy Framework (DPF), </span>
                            Standardvertragsklauseln (
                            <a
                                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                                target="_blank"
                            >
                                https://www.facebook.com/legal/EU_data_transfer_addendum
                            </a>
                            ); <strong>Weitere Informationen:</strong> Wir sind gemeinsam mit Meta
                            Platforms Ireland Limited für die Erhebung (jedoch nicht die weitere
                            Verarbeitung) von Daten der Besucher unserer Facebook-Seite (sog.
                            &quot;Fanpage&quot;) verantwortlich. Zu diesen Daten gehören Informationen zu den
                            Arten von Inhalten, die Nutzer sich ansehen oder mit denen sie
                            interagieren, oder die von ihnen vorgenommenen Handlungen (siehe unter
                            &quot;Von dir und anderen getätigte und bereitgestellte Dinge&quot; in der
                            Facebook-Datenrichtlinie:{" "}
                            <a href="https://www.facebook.com/policy" target="_blank">
                                https://www.facebook.com/policy
                            </a>
                            ), sowie Informationen über die von den Nutzern genutzten Geräte
                            (z.&nbsp;B. IP-Adressen, Betriebssystem, Browsertyp, Spracheinstellungen,
                            Cookie-Daten; siehe unter &quot;Geräteinformationen&quot; in der
                            Facebook-Datenrichtlinie:{" "}
                            <a href="https://www.facebook.com/policy" target="_blank">
                                https://www.facebook.com/policy
                            </a>
                            ). Wie in der Facebook-Datenrichtlinie unter &quot;Wie verwenden wir diese
                            Informationen?&quot; erläutert, erhebt und verwendet Facebook Informationen
                            auch, um Analysedienste, so genannte &quot;Seiten-Insights&quot;, für
                            Seitenbetreiber bereitzustellen, damit diese Erkenntnisse darüber
                            erhalten, wie Personen mit ihren Seiten und mit den mit ihnen verbundenen
                            Inhalten interagieren. Wir haben mit Facebook eine spezielle Vereinbarung
                            abgeschlossen (&quot;Informationen zu Seiten-Insights&quot;,{" "}
                            <a
                                href="https://www.facebook.com/legal/terms/page_controller_addendum"
                                target="_blank"
                            >
                                https://www.facebook.com/legal/terms/page_controller_addendum
                            </a>
                            ), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen Facebook
                            beachten muss und in der Facebook sich bereit erklärt hat die
                            Betroffenenrechte zu erfüllen (d.&nbsp;h. Nutzer können z.&nbsp;.B.
                            Auskünfte oder Löschungsanfragen direkt an Facebook richten). Die Rechte
                            der Nutzer (insbesondere auf Auskunft, Löschung, Widerspruch und
                            Beschwerde bei zuständiger Aufsichtsbehörde), werden durch die
                            Vereinbarungen mit Facebook nicht eingeschränkt. Weitere Hinweise finden
                            sich in den &quot;Informationen zu Seiten-Insights&quot; (
                            <a
                                href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                                target="_blank"
                            >
                                https://www.facebook.com/legal/terms/information_about_page_insights_data
                            </a>
                            ). Die gemeinsame Verantwortlichkeit beschränkt sich auf die Erhebung
                            durch und Übermittlung von Daten an Meta Platforms Ireland Limited, ein
                            Unternehmen mit Sitz in der EU. Die weitere Verarbeitung der Daten liegt
                            in der alleinigen Verantwortung von Meta Platforms Ireland Limited, was
                            insbesondere die Übermittlung der Daten an die Muttergesellschaft Meta
                            Platforms, Inc. in den USA betrifft.
                        </li>
                        <li>
                            <strong>X: </strong>Soziales Netzwerk; <strong>Dienstanbieter:</strong>{" "}
                            Twitter International Company, One Cumberland Place, Fenian Street, Dublin
                            2 D02 AX07, Irland;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO).{" "}
      </span>
                            <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://twitter.com/privacy" target="_blank">
                                https://twitter.com/privacy
                            </a>
                            , (Settings:{" "}
                            <a href="https://twitter.com/personalization" target="_blank">
                                https://twitter.com/personalization
                            </a>
                            ).
                        </li>
                    </ul>
                    <h2 id="m328">Plugins und eingebettete Funktionen sowie Inhalte</h2>
                    <p>
                        Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die
                        von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet als
                        &quot;Drittanbieter&quot;) bezogen werden. Dabei kann es sich zum Beispiel um
                        Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich bezeichnet
                        als &quot;Inhalte&quot;).
                    </p>
                    <p>
                        Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die
                        IP-Adresse der Nutzer verarbeiten, da sie ohne die IP-Adresse die Inhalte
                        nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die
                        Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns,
                        nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse
                        lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können
                        ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als &quot;Web Beacons&quot;
                        bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die
                        &quot;Pixel-Tags&quot; können Informationen, wie der Besucherverkehr auf den Seiten
                        dieser Webseite, ausgewertet werden. Die pseudonymen Informationen können
                        ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter
                        anderem technische Informationen zum Browser und zum Betriebssystem, zu
                        verweisenden Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung
                        unseres Onlineangebotes enthalten als auch mit solchen Informationen aus
                        anderen Quellen verbunden werden.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.&nbsp;B.
                            besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
                            Kommunikations- und Verfahrensdaten (z.&nbsp;.B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.&nbsp;.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
                            Onlineangebotes und Nutzerfreundlichkeit.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
                            S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>YouTube-Videos: </strong>Videoinhalte; YouTube-Videos werden über
                            eine spezielle Domain (erkennbar an dem Bestandteil &quot;youtube-nocookie&quot;) im
                            sogenannten &quot;Erweiterten Datenschutzmodus&quot; eingebunden, wodurch keine
                            Cookies zu Nutzeraktivitäten erhoben werden, um die Videowiedergabe zu
                            personalisieren. Dennoch können Angaben zur Interaktion der Nutzer mit dem
                            Video (z.&nbsp;B. Merken der letzten Wiedergabestelle), gespeichert
                            werden; <strong>Dienstanbieter:</strong> Google Ireland Limited, Gordon
                            House, Barrow Street, Dublin 4, Irland;{" "}
                            <span className="">
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f) DSGVO);{" "}
      </span>
                            <strong>Website:</strong>{" "}
                            <a href="https://www.youtube.com" target="_blank">
                                https://www.youtube.com
                            </a>
                            ; <strong>Datenschutzerklärung:</strong>{" "}
                            <a href="https://policies.google.com/privacy" target="_blank">
                                https://policies.google.com/privacy
                            </a>
                            . <strong>Grundlage Drittlandübermittlung:</strong>{" "}
                            <span className=""> EU-US Data Privacy Framework (DPF)</span>.
                        </li>
                    </ul>
                    <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
                    <p>
                        Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung
                        zu informieren. Wir passen die Datenschutzerklärung an, sobald die
                        Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich
                        machen. Wir informieren Sie, sobald durch die Änderungen eine
                        Mitwirkungshandlung Ihrerseits (z.&nbsp;B. Einwilligung) oder eine sonstige
                        individuelle Benachrichtigung erforderlich wird.
                    </p>
                    <p>
                        Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen
                        von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die
                        Adressen sich über die Zeit ändern können und bitten die Angaben vor
                        Kontaktaufnahme zu prüfen.
                    </p>
                    <p className="seal">
                        <a
                            href="https://datenschutz-generator.de/"
                            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
                        </a>
                    </p>
                </>

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

