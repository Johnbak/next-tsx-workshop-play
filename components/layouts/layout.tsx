import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
} from "@material-ui/core";
import React, { ReactElement, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

interface Props {
  children: ReactNode; //props
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(5),
      paddingLeft: 300,
    },
  })
);

export default function Layout({ children }: Props): ReactElement {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <main className={classes.content}>
        <Toolbar />
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "red",
          }}
        >
          {children}
        </Container>
      </main>
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
