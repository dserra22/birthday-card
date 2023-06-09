import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Dancing+Script:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Monsieur+La+Doulaise&family=Pacifico&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/number.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
