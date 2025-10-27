import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';


export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <ColorSchemeScript/>
        </Head>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="ac1952bd-ed21-4271-b7b9-1a25d6ce3301" data-blockingmode="auto" type="text/javascript"></script>
        <body>
        <Main/>

        <NextScript/>
        </body>
    </Html>
  );
}