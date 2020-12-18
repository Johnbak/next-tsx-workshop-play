import React, { ReactElement } from "react";

interface Props {}

export default function index({}: Props): ReactElement {
  return <div></div>;
}

//Call in server-side
index.getInitialProps = ({ res, err }) => {
  res.writeHead(301, { Location: "/login" }); //redirect to login
  res.end();
  return {};
};
