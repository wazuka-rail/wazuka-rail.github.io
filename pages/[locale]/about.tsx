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
        <h1>{t("about.companyInfo")}</h1>
        <dl>
          <dt>{t("about:companyName")}</dt>
          <dd>{t("company.fullname")}</dd>
          <dt>{t("about:hq")}</dt>
          <dd>{t("about:company.hq")}</dd>
          <dt>{t("about:industry")}</dt>
          <dd>{t("about:company.industry")}</dd>
          <dt>{t("about:founded")}</dt>
          <dd>{t("about:company.founded")}</dd>
          <dt>{t("about:opStarted")}</dt>
          <dd>{t("about:company.opStarted")}</dd>
        </dl>
      </main>
    </>
  );
};

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default About;
