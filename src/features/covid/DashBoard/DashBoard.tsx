import React, { useEffect } from "react";

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import styles from "./DashBoard.module.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectDaily, fetchAsyncGetDaily } from "../covidSlice";
import SwitchCountry from "../SwitchCountry/SwitchCountry";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import PieChart from "../PieChart/PieChart";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#008080",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));

const DashBoard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const daily = useSelector(selectDaily);

  useEffect(() => {
    dispatch(fetchAsyncGetDaily("japan"));
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar color="secondary" position="absolute">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Covid 19 Live Dashboard
            </Typography>
            <div>
              <Typography variant="body1">
                {new Date(daily[daily.length - 1].Date).toDateString()}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>

        <Container className={classes.content}>
          <div className={styles.container}>
            <SwitchCountry />
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={7}>
              <Chart />
            </Grid>
            <Grid item xs={12} md={5}>
              <PieChart />
            </Grid>
          </Grid>
        </Container>
      </div>
    </MuiThemeProvider>
  );
};

export default DashBoard;
