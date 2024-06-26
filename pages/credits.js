/*
 * Credits.jsx
 *
 * Copyright (c) 2024 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

import Navbar from "../components/Navbar";
import classes from "./styles/faq.module.css";
import {Code, Container, Text, Title, TypographyStylesProvider} from "@mantine/core";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


const credits = [
    {
        title: "DGM1 Geodaten Brandenburg",
        author: "Landesvermessung und Geobasisinformation Brandenburg (LGB)",
        license: "Datenlizenz Deutschland – Namensnennung – Version 2.0",
        licenseUrl: "https://www.govdata.de/dl-de/by-2-0",
        datasetUrl: "https://data.geobasis-bb.de/geobasis/daten/dgm/"
    },
    {
        title: "DGM1 Geodaten Berlin",
        author: "Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen Berlin",
        licenseUrl: "https://www.govdata.de/dl-de/by-2-0",
        license: "Datenlizenz Deutschland – Namensnennung – Version 2.0",
        datasetUrl: "https://daten.berlin.de/datensaetze/atkis%C2%AE-dgm-1m-rasterweite-atom"
    },
    {
        title: "DGM1 Geodaten Baden-Württemberg",
        author: "Landesamt für Geoinformation und Landentwicklung Baden-Württemberg",
        licenseUrl: "https://www.govdata.de/dl-de/by-2-0",
        license: "Datenlizenz Deutschland – Namensnennung – Version 2.0",
        datasetUrl: "https://www.lgl-bw.de/"
    },
    {
        title: "DGM1 Geodaten Bayern",
        author: "Bayerische Vermessungsverwaltung – www.geodaten.bayern.de",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.de",
        license: "Creative Commons Namensnennung 4.0 International Lizenz (CC BY 4.0)",
        datasetUrl: "https://geodaten.bayern.de/opengeodata/OpenDataDetail.html?pn=dgm1"
    },
    {
        title: "DGM1 Geodaten Bremen",
        author: "Landesamt GeoInformation Bremen",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.de",
        license: "Creative Commons Namensnennung 4.0 International Lizenz (CC BY 4.0)",
        datasetUrl: "https://metaver.de/trefferanzeige?docuuid=2351ABA6-019D-4155-853F-76EEFC26CA52"
    },
    {
        title: "DGM1 Geodaten Hamburg",
        author: "Freie und Hansestadt Hamburg, Landesbetrieb Geoinformation und Vermessung (LGV)",
        licenseUrl: "https://www.govdata.de/dl-de/by-2-0",
        license: "Datenlizenz Deutschland – Namensnennung – Version 2.0",
        datasetUrl: "https://suche.transparenz.hamburg.de/dataset/digitales-hohenmodell-hamburg-dgm-111"
    },
    {
        title: "DGM1 Geodaten Hessen",
        author: "Hessische Verwaltung für Bodenmanagement und Geoinformation",
        licenseUrl: "https://www.rv.hessenrecht.hessen.de/bshe/document/jlr-VermGeoInfGHEV6P18",
        license: "Hessisches Vermessungs- und Geoinformationsgesetz - HVGG",
        datasetUrl: "https://gds.hessen.de/INTERSHOP/web/WFS/HLBG-Geodaten-Site/de_DE/-/EUR/ViewDownloadcenter-Start?path=3D-Daten/Digitales%20Gel%C3%A4ndemodell%20(DGM1)"
    },
    {
        title: "DGM1 Geodaten Niederachsen",
        author: "Landesamt für Geoinformation und Landesvermessung Niedersachsen (LGLN)",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
        license: "Creative Commons Namensnennung 4.0 International Lizenz (CC BY 4.0)",
        datasetUrl: "https://ni-lgln-opengeodata.hub.arcgis.com/apps/lgln-opengeodata::digitales-gel%C3%A4ndemodell-dgm1/explore"
    },
    {
        title: "DGM1 Geodaten Nordrhein-Westfalen",
        author: "Bezirksregierung Köln",
        licenseUrl: "https://www.govdata.de/dl-de/zero-2-0",
        license: "Datenlizenz Deutschland – Zero – Version 2.0",
        datasetUrl: "https://www.opengeodata.nrw.de/produkte/geobasis/hm/dgm1_tiff/dgm1_tiff/"
    },
    {
        title: "DGM1 Geodaten Rheinland-Pfalz",
        author: "Landesamt für Vermessung und Geobasisinformation Rheinland-Pfalz",
        licenseUrl: "https://geoshop.rlp.de/dl-de_by-2-0.html",
        license: "Datenlizenz Deutschland – Namensnennung – Version 2.0",
        datasetUrl: "https://geoshop.rlp.de/digitale_gelaendemodelle/digitale_gelaendemodelle_dgm.html"
    },
    {
        title: "DGM1 Geodaten Saarland",
        author: "SAARLAND · Landesamt für Vermessung, Geoinformation und Landentwicklung",
        licenseUrl: "http://www.govdata.de/dl-de/by-2-0",
        license: "Datenlizenz Deutschland – Namensnennung – Version 2.0",
        datasetUrl: "https://www.shop.lvgl.saarland.de/"
    },
    {
        title: "DGM1 Geodaten Sachsen",
        author: "Landesamt für Geobasisinformation Sachsen (GeoSN)",
        licenseUrl: "https://www.govdata.de/dl-de/by-2-0",
        license: "Datenlizenz Deutschland – Namensnennung – Version 2.0",
        datasetUrl: "https://www.geodaten.sachsen.de/downloadbereich-digitale-hoehenmodelle-4851.html"
    },
    {
        title: "DGM2 Geodaten Sachsen-Anhalt",
        author: "Landesamt für Vermessung und Geoinformation Sachsen-Anhalt (LVermGeo)",
        licenseUrl: "https://www.govdata.de/dl-de/by-2-0",
        license: "Datenlizenz Deutschland – Namensnennung – Version 2.0",
        datasetUrl: "https://www.lvermgeo.sachsen-anhalt.de/produkte/dgm/"
    },
    {
        title: "DGM1 Geodaten Schleswig-Holstein",
        author: "Landesamt für Vermessung und Geoinformation Schleswig-Holstein",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
        license: "Creative Commons (CC BY 4.0) – Namensnennung 4.0 International",
        datasetUrl: "https://geodaten.schleswig-holstein.de/gaialight-sh/_apps/dladownload/dl-dgm1.html"
    },
    {
        title: "DGM1 Geodaten Thüringen",
        author: "Landesamt für Bodenmanagement und Geoinformation Thüringen",
        license: "Keine Lizenz angegeben",
        licenseUrl: "",
        datasetUrl: "https://geoportal.thueringen.de/gdi-th/download-offene-geodaten/download-hoehendaten"
    },
    {
        title: "OpenStreetMap Kartendaten",
        author: "OpenStreetMap Contributors / OpenStreetMap Foundation",
        license: "Open Data Commons Open Database License",
        licenseUrl: "https://opendatacommons.org/licenses/odbl/",
        datasetUrl: "https://www.openstreetmap.org/"
    }
]
export default function Credits() {
    return (
        <>
            <Navbar disableAnimation/>
            <div style={{height: "150px"}}></div>
            <Container size="xl" className={classes.wrapper}>
                <Title ta="center" className={classes.title}>
                    Quellenangaben
                </Title>
                <Text mb={"xl"}>
                    Wir nutzen in unseren Diensten folgende Daten von Drittanbietern:
                </Text>
                <TypographyStylesProvider>
                    {
                        credits.map((credit) => (
                            <div className={"mb-5"}>
                                <Text>
                                    <a href={credit.datasetUrl} target={"_blank"}><span
                                        className={"font-bold"}>{credit.title}</span></a>
                                        <br/>
                                        Lizenzgeber: {credit.author}
                                    <br/>
                                    Lizenz: <a href={credit.licenseUrl} target={"_blank"}>{credit.license}</a>

                                </Text>
                            </div>
                        ))
                    }
                    Zudem nutzen wir Höhendaten von <a href={"https://www.mapzen.com/"} target={"_blank"}>Mapzen, a Linux Foundation project</a>, abgerufen durch <a href={"https://registry.opendata.aws/terrain-tiles/"}>AWS Open Data</a>.
                    <br/>
                    Quellenangaben für diese Daten:
                    <Code block>
                        * ArcticDEM terrain data DEM(s) were created from DigitalGlobe, Inc., imagery and
                        funded under National Science Foundation awards 1043681, 1559691, and 1542736;<br/>
                        * Australia terrain data © Commonwealth of Australia (Geoscience Australia) 2017;<br/>
                        * Austria terrain data © offene Daten Österreichs – Digitales Geländemodell (DGM)
                        Österreich;<br/>
                        * Canada terrain data contains information licensed under the Open Government
                        Licence – Canada;<br/>
                        * Europe terrain data produced using Copernicus data and information funded by the
                        European Union - EU-DEM layers;<br/>
                        * Global ETOPO1 terrain data U.S. National Oceanic and Atmospheric Administration<br/>
                        * Mexico terrain data source: INEGI, Continental relief, 2016;<br/>
                        * New Zealand terrain data Copyright 2011 Crown copyright (c) Land Information New
                        Zealand and the New Zealand Government (All rights reserved);<br/>
                        * Norway terrain data © Kartverket;<br/>
                        * United Kingdom terrain data © Environment Agency copyright and/or database right
                        2015. All rights reserved;<br/>
                        * United States 3DEP (formerly NED) and global GMTED2010 and SRTM terrain data
                        courtesy of the U.S. Geological Survey.
                    </Code>
                </TypographyStylesProvider>
            </Container>
        </>
    )
}

export async function getServerSideProps({locale}) {

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
        }
    }
}
