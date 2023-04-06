import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { first } from "../lib/utilities";
import nextI18NextConfig from "../next-i18next.config";

class Document extends NextDocument {
  render() {
    const locales = this.props.__NEXT_DATA__.query.locale;
    const currentLocale = first(locales, nextI18NextConfig.i18n.defaultLocale);
    return (
      <Html lang={currentLocale}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
