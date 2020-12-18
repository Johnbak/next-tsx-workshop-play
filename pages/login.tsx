import React, { ReactElement } from "react";
import loginStyle from "../styles/login.style";
import loginCSS from "../public/static/css/login.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

interface Props {}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column", //เรียงแบบแนวตั้ง
    justifyContent: "center", // justify ถูกใช้ในแนวตั้ง
    alignItems: "center", // ตรงกลางด้านแนวนอน
    minHeight: "100vh",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 320,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function login({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/static/img/e5.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Button fullWidth size="small" color="primary">
                Register
              </Button>
            </form>
          </CardContent>
        </Card>

        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-image: url("/static/img/bg4.jpg");
              text-align: center;
            }
          `}
        </style>
      </div>
    </React.Fragment>
  );
}
