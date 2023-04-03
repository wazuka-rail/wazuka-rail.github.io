import { useTranslation } from "next-i18next";
import React from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import Link from "../../components/Link";
import { getStaticPaths, getStaticProps } from "../../lib/getStatic";
export { getStaticPaths, getStaticProps };

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("nav.about")}</h1>
      <Link href="/">Home</Link>
      <LanguageSwitcher />
    </>
  );
};

export default About;
