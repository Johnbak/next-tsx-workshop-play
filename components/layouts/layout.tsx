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
      <Footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: 8,
        }}
      />
      <style jsx global>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
    </React.Fragment>
  );
}
