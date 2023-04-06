import { useTranslation } from "next-i18next";
import React from "react";
import { getStaticPaths, getStaticProps } from "../../lib/getStatic";
export { getStaticPaths, getStaticProps };
import LanguageSwitcher from "../../components/LanguageSwitcher";
import Link from "../../components/Link";

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

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-3xl font-bold underline">{t("company.name")}</h1>
      <Link href="/about">
        <button className="text-secondary">
          {t("nav.about")}
        </button>
      </Link>
      <LanguageSwitcher />
      <h2 className="text-2xl font-bold">
        {t("_line", { name: t("wazuka") })}
      </h2>
      {stations.map(name => (
        <h3 className="text-1xl font-bold" key={name}>
          {t("_sta", { name: t("sta." + name) })}
        </h3>
      ))}
    </>
  );
};

export default Index;
