import { useTranslation } from "next-i18next";
import { WazukaRailColorIcon } from "./icons";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "./Link";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-2xl flex flex-col px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <button className="text-2xl font-normal">
              <WazukaRailColorIcon className="w-12 h-12" />
              <span>{t("company.name")}</span>
            </button>
          </Link>
          <nav className="gap-6 hidden md:flex">
            <Link href="/">
              <button className="hover:text-secondary">{t("nav.home")}</button>
            </Link>
            <Link href="/about">
              <button className="hover:text-secondary">{t("nav.about")}</button>
            </Link>
          </nav>
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
        </div>
        <nav className="gap-6 flex md:hidden">
          <Link href="/">
            <button className="hover:text-secondary">{t("nav.home")}</button>
          </Link>
          <Link href="/about">
            <button className="hover:text-secondary">{t("nav.about")}</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
