import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';


export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <ColorSchemeScript/>
        </Head>
        <script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/autoblocking/ff6bd54212f44.js" data-cmp-host="c.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="0"></script>
        <body>
        <Main/>

        <NextScript/>
        </body>
    </Html>
  );
}