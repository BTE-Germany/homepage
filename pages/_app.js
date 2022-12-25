import '../styles/globals.css'
import {MantineProvider} from "@mantine/core";
import {RouterTransition} from "../components/RouterTransition";

function MyApp({Component, pageProps}) {


    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: "dark"}}>
            <RouterTransition />
            <Component {...pageProps} />
        </MantineProvider>
    )
}

export default MyApp
