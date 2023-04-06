import Link from "next/link";
import { useRouter } from "next/router";
import languageDetector from "../lib/languageDetector";
import { first } from "../lib/utilities";
import nextI18NextConfig from "../next-i18next.config";

const labels: { [locale: string]: string } = {
  "en": "English",
  "ja": "日本語",
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentLocale = first(
    router.query.locale,
    nextI18NextConfig.i18n.defaultLocale,
  );

  const getPathname = (locale: string) => {
    let p = router.pathname;
    Object.keys(router.query).forEach((k) => {
      if (k === "locale") {
        p = p.replace(`[${k}]`, locale);
        return;
      }
      p = p.replace(`[${k}]`, router.query[k] as string);
    });
    return p;
  };
  return (
    <>
      {nextI18NextConfig.i18n.locales.map(locale => (
        locale === currentLocale || (
          <Link href={getPathname(locale)} key={locale}>
            <button
              className="bg-primary text-white hover:bg-primary-light font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-50"
              onClick={() =>
                languageDetector.cache?.(locale)}
            >
              {labels[locale] || locale}
            </button>
          </Link>
        )
      ))}
    </>
  );
};

export default LanguageSwitcher;
