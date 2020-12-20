import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Layout from "../components/layouts/layout";
import Menu from "../components/layouts/menu";
import MaterialTable from "material-table";
import { products } from "./api/dummy";

interface Props {}

export default function stock({}: Props): ReactElement {
  const columns = [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "IMAGE",
      field: "image",
    },
    {
      title: "NAME",
      field: "name",
    },
    {
      title: "PRICE",
      field: "price",
    },
    {
      title: "STOCK",
      field: "stock",
    },
    {
      title: "CREATED",
      field: "updatedAt",
    },
  ];
  return (
    <Layout>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable columns={columns} data={products} title="Demo Title" />
      </div>
    </Layout>
  );
}
