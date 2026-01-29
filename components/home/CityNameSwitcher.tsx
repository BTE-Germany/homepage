"use client"

import { LayoutGroup, motion } from "motion/react"
import TextRotate from "@/components/ui/text-rotate"

function shuffle(array: string[]) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

export default function CityNameSwitcher() {

    const cities = ["Aachen", "Adendorf", "Adlersberg", "Aichhalden", "Aiglsbach", "Alfen", "Allner", "Altrip", "Altzschillen", "Altötting", "Andelshofen", "Aspertsham", "Auerkofen", "Augsburg", "Babenhausen", "Babisnau", "Bad Arolsen", "Bahlingen", "Baldham Dorf", "Bamberg", "Bartenbach", "Bayreuth", "Beilstein", "Berlin", "Bernau", "Bibergau", "Bickelsberg", "Bielefeld", "Bischberg", "Bisingen", "Bochum", "Bonn", "Borkum", "Borna", "Bortfeld", "Bottrop", "Bovenden", "Bracht", "Braunschweig", "Bredow", "Bremen", "Bremerhaven", "Bretten", "Bruchsal", "Bruckdorf", "Brüderwiese", "Brünen", "Burgberg", "Burk", "Buxtehude", "Bönen", "Celle", "Chemnitz", "Chiemsee", "Cleeberg", "Coburg", "Cochem", "Cottbus", "Cunnersdorf", "Darmstadt", "Dessau", "Detmold", "Dittmern", "Dorsten", "Dortmund", "Doverack", "Dreschvitz", "Dresden", "Duisburg", "Dungersgrün", "Dörnigheim", "Düren", "Düsseldorf", "Eckdorf", "Edewecht", "Eilenburg", "Eixe", "Enger", "Entrup", "Erding", "Erfurt", "Erkner", "Erlangen", "Eschweiler", "Espelkamp", "Essen", "Estenfeld", "Ettlingen", "Eurasburg", "Euskirchen", "Faid", "Falkenstein", "Fedderwarden", "Fehmarn", "Feldkirchen", "Fellbach", "Finsterwalde", "Flensburg", "Flöha", "Flörsheim", "Forchheim", "Frankenburg", "Freising", "Freital", "Friedland", "Fronberg", "Fuchstal", "Furth", "Fürstätt", "Füssen", "Gaisbach", "Gangelt", "Gaustritz", "Geisenhausen", "Geldern", "Gera", "Gerlingen", "Gersthofen", "Gießen", "Glashütte", "Glauchau", "Gmünd", "Gottmadingen", "Gransee", "Gravenbruch", "Greifswald", "Grevesmühlen", "Groß-Gerau", "Großenbrode", "Großmutz", "Großsedlitz", "Großwelka", "Gruiten", "Grumby", "Grünow", "Grünwald", "Göppingen", "Göttingen", "Götzenhain", "Gütersloh", "Haan", "Hachenburg", "Hagen", "Hallbergmoos", "Hamburg", "Hamm", "Hanau", "Hannberg", "Hannover", "Happerschoß", "Harmelingen", "Harrislee", "Hastenrath", "Hattingen", "Haundorf", "Hauptendorf", "Hausmoning", "Heidelberg", "Heilbronn", "Heiningen", "Heinrichs", "Heisterschoß", "Helbra", "Hemmingen", "Hettingen", "Heusenstamm", "Heßdorf", "Hiddenhausen", "Hildesheim", "Himmighausen", "Hochberg", "Hockenheim", "Holnstein", "Holzheim", "Holzwickede", "Hoyerswerda", "Höpfigheim", "Hörlkofen", "Hösel", "Hückeswagen", "Hüll", "Ihlow", "Ilvesheim", "Ingolstadt", "Isingen", "Ismaning", "Jena", "Juist", "Jägerhof", "Kamen", "Karlskamp", "Karlsruhe", "Karlstadt", "Kassel", "Kaufbeuren", "Kelsterbach", "Kiel", "Kieselbronn", "Kirchen", "Kleve", "Koblenz", "Konstanz", "Kornwestheim", "Krefeld", "Köln", "Königssee", "Königswiesen", "Königswinter", "Laboe", "Langen", "Langenargen", "Langenhagen", "Langewerth", "Langquaid", "Lanzenbach", "Lappersdorf", "Laubach", "Lauenbrück", "Leimen", "Leipzig", "Lemgo", "Leverkusen", "Lichtentanne", "Lilienthal", "Limburgerhof", "Linden", "Lippstadt", "Lochbrücke", "Lohmen", "Loit", "Ludwigsfelde", "Luga", "Lustheim", "Lübeck", "Lübz", "Lüneburg", "Lünen", "Lütjenburg", "Lüttingen", "Magdeburg", "Mainburg", "Mainz", "Mannheim", "Marburg", "Mariaort", "Markkleeberg", "Marktredwitz", "Meckenbeuren", "Meckenheim", "Meerbusch", "Meerdorf", "Meersburg", "Menzlingen", "Meppen", "Mescherin", "Mettmann", "Miesbach", "Mindelheim", "Minden", "Mitterbach", "Mitterfelden", "Moers", "Montabaur", "Morschenich", "Mutterstadt", "Mölln", "Mörfelden", "Müllenbach", "Müncheberg", "München", "Münster", "Naundorf", "Neckarsulm", "Negenborn", "Nellingen", "Nettelrede", "Neu Lübstorf", "Neu-Isenburg", "Neu-Ulm", "Neuhofen", "Neulußheim", "Neuss", "Nieder-Olm", "Niederkassel", "Nonnenroth", "Norden", "Nordhalben", "Nürburg", "Nürnberg", "Nürtingen", "Nütterden", "Oberbrunn", "Oberding", "Oberdorf", "Oberhausen", "Oberlungwitz", "Obernhain", "Oberpindhart", "Oberreutin", "Ochsenhausen", "Oeleroth", "Oldenburg", "Opherdicke", "Oranienburg", "Osnabrück", "Ostbevern", "Osternach", "Osterwieck", "Paderborn", "Panitzsch", "Papenburg", "Parsberg", "Passau", "Pattensen", "Pellworm", "Pfaffendorf", "Pfungstadt", "Plau am See", "Pollanten", "Potsdam", "Premnitz", "Prisdorf", "Putbus", "Pötzmes", "Radebeul", "Ranzenbüttel", "Ratingen", "Reckenneusig", "Regensburg", "Rehling", "Reppenstedt", "Reutlingen", "Rheinbach", "Rheinberg", "Rheine", "Rheinstetten", "Riedlingen", "Riegel", "Rinkam", "Rochlitz", "Rohr i.NB", "Rosbach", "Rosdorf", "Rosenfeld", "Rosenheim", "Rostock", "Roydorf", "Ruppertsburg", "Rödinghausen", "Röthges", "Saalhausen", "Saarbrücken", "Sagard", "Samtens", "Sarstedt", "Schaalby", "Scharmede", "Scharnhausen", "Scheuring", "Schierke", "Schierling", "Schipkau", "Schkeuditz", "Schleswig", "Schliersee", "Schmilka", "Schwabach", "Schwaigerloh", "Schweinfurt", "Schwerin", "Schönefeld", "Seelze", "Sehestedt", "Siegburg", "Siegen", "Sierksdorf", "Solingen", "Spandau", "Speyer", "Spraitbach", "Sprendlingen", "Stade", "Stottoff", "Stralsund", "Stuttgart", "Sulzbach", "Söhre", "Taufkirchen", "Tecklenburg", "Teningen", "Teublitz", "Thale", "Thienbüttel", "Traunricht", "Trier", "Troisdorf", "Trossingen", "Uelzen", "Ulm", "Unna", "Upfkofen", "Uslar", "Vellmar", "Viernheim", "Villingen", "Volkstedt", "Völklingen", "Walddorf", "Walldorf", "Walsrode", "Warburg", "Warendorf", "Waßmannsdorf", "Wedel", "Weesenstein", "Wehrda", "Weinheim", "Weißenhorn", "Wekeln", "Wellerstadt", "Wertheim", "Wesel", "Wesseling", "Wettesingen", "Wettstetten", "Wiesbaden", "Wildensorg", "Willich", "Winnweiler", "Witten", "Wittenberg", "Wolfsburg", "Wolnzach", "Wormeln", "Wuppertal", "Wustermark", "Würzburg", "Zeppelinheim", "Ziegelrode", "Zwenkau", "Öhringen"]
    shuffle(cities);

    return (
        <>
            <motion.div className="text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center text-foreground overflow-hidden pt-24"
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}

                transition={{ duration: 0.5, ease: [.03, .72, .04, .98] }}
            >
                <LayoutGroup>
                    <motion.p className="flex whitespace-pre" layout>
                        <motion.span
                            className="pt-0.5 sm:pt-1 md:pt-2"
                            layout
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        >
                            We're building in {" "}
                        </motion.span>
                        <TextRotate
                            texts={cities}
                            mainClassName="text-white px-2 sm:px-2 md:px-3 bg-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </motion.p>
                </LayoutGroup>
            </motion.div>
        </>
    )
}