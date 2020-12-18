import React, { ReactElement, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

interface Props {
  children: ReactNode; //props
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      {children}
      <Footer />
    </React.Fragment>
  );
}
