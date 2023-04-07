import { useTranslation } from "next-i18next";
import type { ReactElement } from "react";
import { getStaticPaths, getStaticProps } from "../../lib/getStatic";
export { getStaticPaths, getStaticProps };
import Head from "next/head";
import Layout from "../../components/Layout";
import type { NextPageWithLayout } from "../_app";

const About: NextPageWithLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("nav.about")} - {t("company.name")}</title>
      </Head>
      <main>
        <h1 id="#overview">{t("about.overview")}</h1>
        <p>
          The Wazuka Chagenkyo Railway is a fictional railway company.
        </p>
      </main>
    </>
  );
};

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default About;
