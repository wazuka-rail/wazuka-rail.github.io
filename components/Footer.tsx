import { useTranslation } from "next-i18next";
import {
  GitHubMarkWhiteIcon,
  TwitterWhiteIcon,
  WazukaRailIcon,
  YouTubeMonoDarkIcon,
} from "./icons";
import Link from "./Link";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4 lg:-mt-2">
              <Link href="/">
                <button className="inline-flex items-center gap-2 text-lg">
                  <WazukaRailIcon className="w-8 h-8" />
                  <span>{t("company.name")}</span>
                </button>
              </Link>
            </div>
            <p className="text-xs mb-6 sm:pr-8 opacity-80">
              This railway is fictional. Any resemblance to actual organizations
              is coincidental.
            </p>

            <div className="flex items-center gap-2">
              <Link href="https://www.youtube.com/@WazukaRail">
                <button>
                  <YouTubeMonoDarkIcon
                    className="w-7 h-7 opacity-80 hover:opacity-100"
                    title="YouTube"
                  />
                </button>
              </Link>
              <Link href="https://twitter.com/WazukaRail">
                <button>
                  <TwitterWhiteIcon
                    className="w-6 h-5 mx-0.5 my-1 opacity-80 hover:opacity-100"
                    title="Twitter"
                  />
                </button>
              </Link>
              <Link href="https://github.com/wazuka-rail">
                <button>
                  <GitHubMarkWhiteIcon
                    className="w-6 h-6 mx-0.5 my-0.5 opacity-80 hover:opacity-100"
                    title="GitHub"
                  />
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest">
              {t("nav.about")}
            </div>

            <nav className="flex flex-col gap-4">
              <Link href="/about#overview">
                <button>{t("about.overview")}</button>
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
          <span className="inline-block mx-1">
            Copyright© 2023 {t("company.fullname")}
          </span>
          <span className="inline-block mx-1">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
