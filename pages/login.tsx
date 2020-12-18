import { createStyles, makeStyles } from "@material-ui/core";
import React, { ReactElement } from "react";

interface Props {}

const styles = createStyles({
  section: {
    color: "red",
    fontSize: 100,
  },
});

const useStyles = makeStyles(styles);

export default function login({}: Props): ReactElement {
  const classed = useStyles();
  return (
    <div>
      <h1>Login</h1>
      <div className={classed.section}>test</div>
    </div>
  );
}
