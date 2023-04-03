import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";
import nextI18NextConfig from "../next-i18next.config";

type Props = {};

interface Params extends ParsedUrlQuery {
  locale: string;
}

const i18nPaths: { params: Params }[] = nextI18NextConfig.i18n.locales.map((
  lng,
) => ({
  params: {
    locale: lng,
  },
}));

export const getStaticPaths = () => (
  {
    fallback: false,
    paths: i18nPaths,
  }
);

export const getStaticProps: GetStaticProps<Props, Params> = async (
  { params },
) => {
  const locale = params?.locale || nextI18NextConfig.i18n.defaultLocale;
  const translations = await serverSideTranslations(
    locale,
    ["common"],
    nextI18NextConfig,
  );
  return {
    props: {
      ...translations,
    },
  };
};
