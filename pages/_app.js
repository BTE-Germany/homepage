import '../styles/globals.css'
import {MantineProvider} from "@mantine/core";
import {RouterTransition} from "../components/RouterTransition";
import {appWithTranslation} from "next-i18next";

function MyApp({Component, pageProps}) {


    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            colorScheme: "dark", headings: {
                fontFamily: "Lexend Deca",
            }

        }}>
            <RouterTransition/>
            <Component {...pageProps} />
        </MantineProvider>
    )
}

export default appWithTranslation(MyApp)
