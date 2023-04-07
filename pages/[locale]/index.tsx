import { useTranslation } from "next-i18next";
import type { ReactElement } from "react";
import { getStaticPaths, getStaticProps } from "../../lib/getStatic";
export { getStaticPaths, getStaticProps };
import Head from "next/head";
import Layout from "../../components/Layout";
import type { NextPageWithLayout } from "../_app";

const stations = [
  "kamo",
  "ibirao",
  "ishitera",
  "shirasu",
  "wazuka",
  "harayama",
  "yubune",
  "higashiYubune",
  "sunakodani",
];

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("company.name")}</title>
      </Head>
      <main>
        <h1 className="text-2xl ">
          {t("_line", { name: t("wazuka") })}
        </h1>
        {stations.map(name => (
          <h2 className="text-1xl" key={name}>
            {t("_sta", { name: t("sta." + name) })}
          </h2>
        ))}
      </main>
    </>
  );
};

Index.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Index;
