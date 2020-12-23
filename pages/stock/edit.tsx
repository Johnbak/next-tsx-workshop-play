import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import Layout from "../../components/layouts/layout";

interface Props {
  data: number[];
}

export default function edit({ data }: Props): ReactElement {
  return (
    <Layout>
      <div>
        <h1>Edit</h1>
        <span>{JSON.stringify(data)}</span>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { data: [1, 2, 3, 4, parseInt(context.query.id.toString())] },
  };
};
