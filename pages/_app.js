import '../styles/globals.css'
import {MantineProvider} from "@mantine/core";
import {RouterTransition} from "../components/RouterTransition";
import {appWithTranslation} from "next-i18next";
import Footer from "../components/Footer";
import {SessionProvider} from "next-auth/react";
import {ModalsProvider} from "@mantine/modals";
import {Notifications} from "@mantine/notifications";

function MyApp({Component, pageProps}) {


    return (

        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            colorScheme: "dark", headings: {
                fontFamily: "Lexend Deca",
            }

        }}>
            <ModalsProvider modalProps={{
                centered: true
            }}>
                <Notifications />
                <SessionProvider>
                    <RouterTransition/>
                    <div style={{display: "flex", minHeight: "100vh", flexDirection: "column"}}>
                        <div style={{flex: 1}}>


                            <Component {...pageProps} />

                        </div>
                        <Footer/>
                    </div>
                </SessionProvider>
            </ModalsProvider>
        </MantineProvider>
    )
}

export default appWithTranslation(MyApp)
