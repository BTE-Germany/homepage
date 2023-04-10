import '../styles/globals.css'
import {MantineProvider} from "@mantine/core";
import {RouterTransition} from "../components/RouterTransition";
import {appWithTranslation} from "next-i18next";
import Footer from "../components/Footer";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "../components/dev";

function MyApp({Component, pageProps}) {


    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            colorScheme: "dark", headings: {
                fontFamily: "Lexend Deca",
            }

        }}>
            <RouterTransition/>
            <div style={{display: "flex", minHeight: "100vh", flexDirection: "column"}}>
                <div style={{flex: 1}}>

                    <DevSupport ComponentPreviews={ComponentPreviews}
                                useInitialHook={useInitial}
                    >
                        <Component {...pageProps} />
                    </DevSupport>
                </div>
                <Footer/>
            </div>
        </MantineProvider>
    )
}

export default appWithTranslation(MyApp)
