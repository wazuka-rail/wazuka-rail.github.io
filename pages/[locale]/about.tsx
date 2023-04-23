import { Trans, useTranslation } from "next-i18next";
import type { ReactElement } from "react";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
const ns = ["common", "about"];
const getStaticProps = makeStaticProps(ns);
export { getStaticPaths, getStaticProps };
import Head from "next/head";
import Layout from "../../components/Layout";
import type { NextPageWithLayout } from "../_app";

const About: NextPageWithLayout = () => {
  const { t } = useTranslation(ns);
  return (
    <>
      <Head>
        <title>{t("nav.about")} - {t("company.name")}</title>
      </Head>
      <main>
        <h1 id="#overview">{t("about.overview")}</h1>
        <Trans t={t}>about:overviewContent</Trans>
      </main>
    </>
  );
};

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default About;
