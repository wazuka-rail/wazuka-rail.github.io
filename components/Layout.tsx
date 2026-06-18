import { Noto_Sans_JP } from "next/font/google";
import type { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  preload: false,
  variable: "--font-noto-sans",
});

type LayoutProps = {
  readonly children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={`${noto.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
