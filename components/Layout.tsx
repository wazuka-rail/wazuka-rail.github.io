import type { ReactElement } from "react";
import FontStyle from "./FontStyle";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  readonly children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <FontStyle />
      <div className="font-noto-sans">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
