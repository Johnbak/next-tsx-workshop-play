import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Layout from "../components/layouts/layout";
import Menu from "../components/layouts/menu";
import MaterialTable from "material-table";
import { products } from "./api/dummy";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

interface Props {}

export default function stock({}: Props): ReactElement {
  const columns = [
    {
      title: "ID",
      render: (item) => <Typography variant="body1">{item.id}</Typography>,
    },
    {
      title: "IMAGE",
      cellStyle: { padding: 0 },
      render: (item) => (
        <img
          src="https://sterkowski.com/3785-large_default/peaky-blinders-cap-harris-tweed.jpg"
          alt=""
          style={{ width: 70, height: 70, borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "NAME",
      cellStyle: { minWidth: 500 },
      render: (item) => <Typography variant="body1">{item.name}</Typography>,
    },
    {
      title: "PRICE",
      render: (item) => (
        <Typography variant="body1">
          <NumberFormat
            value={item.price}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={"฿ "}
          />
        </Typography>
      ),
    },
    {
      title: "STOCK",
      render: (item) => (
        <Typography variant="body1">
          <NumberFormat
            value={item.stock}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={0}
            fixedDecimalScale={true}
            suffix={" psc"}
          />
        </Typography>
      ),
    },
    {
      title: "CREATED",
      render: (item) => (
        <Typography>
          <Moment format="DD/MM/YY">{item.updatedAt}</Moment>
        </Typography>
      ),
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
