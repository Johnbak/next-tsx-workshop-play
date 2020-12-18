import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Layout from "../components/layouts/layout";
import Menu from "../components/layouts/menu";

interface Props {}

export default function stock({}: Props): ReactElement {
  return (
    <div>
      <Layout>
        <h1>Stock</h1> {/* send prop to layout */}
        <span>1111</span>
      </Layout>
    </div>
  );
}
