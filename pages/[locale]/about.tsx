import { Trans, useTranslation } from "next-i18next";
import type { ReactElement } from "react";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
const ns = ["common", "about"];
const getStaticProps = makeStaticProps(ns);
export { getStaticPaths, getStaticProps };
import Head from "next/head";
import Layout from "../../components/Layout";
import type { NextPageWithLayout } from "../_app";

const eventDates = [
  "1922-04-11",
  "1929-05-16",
  "1933-05-08",
  "1934-05-07",
  "1934-12-01",
  "1936-10-01",
  "1945-06-19",
  "1947-07-25",
  "1956-04-01",
  "1960-06-01",
  "1970-10-01",
  "1974-03-05",
  "1981-09-18",
  "1983-03-08",
  "1986-09-19",
  "1987-02-10",
  "1987-04-01",
  "1987-10-01",
  "1988-04-24",
  "1996-04-01",
  "2006-03-12",
  "2009-03-10",
  "2010-09-09",
  "2011-04-01",
  "2012-04-01",
];

const About: NextPageWithLayout = () => {
  const { t } = useTranslation(ns);
  return (
    <>
      <Head>
        <title>{t("nav.about") + " - " + t("company.name")}</title>
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
        <h1>{t("about:history")}</h1>
        <dl>
          {eventDates.map(d => (
            <>
              <dt key={"date" + d}>{d}</dt>
              <dd key={"event" + d}>{t("about:historyEvents." + d)}</dd>
            </>
          ))}
        </dl>
      </main>
    </>
  );
};

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default About;
