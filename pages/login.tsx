import { createStyles, makeStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import loginStyle from "../styles/login.style";
import loginCSS from "../public/static/css/login.module.css";

interface Props {}

const useStyles = makeStyles(loginStyle);

export default function login({}: Props): ReactElement {
  const classed = useStyles();
  return (
    <div>
      <h1>Login</h1>
      <div className={classed.title}>test</div>
      <div className={classed.subtitle}>subtitle</div>
      <div className={loginCSS.section}>Bro Bro</div>
    </div>
  );
}
