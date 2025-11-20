import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Portfolio online de Steph Hoel" />
        <meta name="keywords" content="steph hoel portfolio online" />
        <meta name="autor" content="Steph Hoel" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Old+Standard+TT:ital@0;1&display=swap" rel="stylesheet" />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
