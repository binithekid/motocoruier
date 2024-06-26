import { AppProps } from "next/app";
import "@/styles/globals.css";

import { Poppins } from "@next/font/google";
import Head from "next/head";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={poppins.className}>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Script
        id="Google Tag Manager"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16557251194"
      />
      <Script id="Google Tag Manager" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'AW-16557251194');
        `}
      </Script>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
