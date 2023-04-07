import type { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  readonly children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
