import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';


export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <ColorSchemeScript/>
            <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8619681460061994"
                    crossOrigin="anonymous"></script>
        </Head>
        <body>
        <Main/>

        <NextScript/>
        </body>
    </Html>
  );
}