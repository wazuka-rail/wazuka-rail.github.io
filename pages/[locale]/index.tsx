import { useTranslation } from "next-i18next";
import React from "react";
import { getStaticPaths, getStaticProps } from "../../lib/getStatic";
export { getStaticPaths, getStaticProps };
import { WazukaRailColorIcon } from "../../components/icons";
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
      <Link href="/">
        <button className="text-2xl font-normal">
          <WazukaRailColorIcon className="w-12 h-12" />
          <span>{t("company.name")}</span>
        </button>
      </Link>
      <Link href="/about">
        <button className="text-secondary">
          {t("nav.about")}
        </button>
      </Link>
      <LanguageSwitcher />
      <h1 className="text-2xl font-bold">
        {t("_line", { name: t("wazuka") })}
      </h1>
      {stations.map(name => (
        <h2 className="text-1xl font-bold" key={name}>
          {t("_sta", { name: t("sta." + name) })}
        </h2>
      ))}
    </>
  );
};

export default Index;
