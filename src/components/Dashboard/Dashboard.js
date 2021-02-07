import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MainListItems from "../ListItems/MainListItems";
import Avatar from "@material-ui/core/Avatar";
import profileImage from "../../images/profile_pic.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DataTable from "../DataTable/DataTable";
import Researches from "../Researches/Researches";
import Rfq from "../RFQ/Rfq";
import Tab from "../Tab/Tab";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
    justifyContent: "space-between",
  },
  toolbarHeader: {
    display: "flex",
    alignItems: "center",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    background: "#323232",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  timeBox: {
    background: "#424242",
    lineHeight: "4rem",
    width: "21%",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("lg")]: {
      width: "28%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
      width: "50%",
    },
  },
  timeBoxHidden: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  profileWrapper: {
    borderRadius: 0,
  },
  avatarSize: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  userNameStyle: {
    marginLeft: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  iconPadding: {
    padding: 0,
  },
  drawerPaper: {
    background: "#323232",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    background: "#1A1A1A",
  },
  container: {
    padding: "1rem",
    margin: 0,
  },
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    borderRadius: "3px",
    padding: 0,
    backgroundColor: "#0A0A0A",
  },
  dataTable: {
    backgroundColor: "#0A0A0A",
  },
  iconColor: {
    color: "#fff",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Box className={classes.toolbarHeader}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
          </Box>
          <Box className={clsx(classes.timeBox, open && classes.timeBoxHidden)}>
            <Box>{moment().format("h:mm:ss A")}</Box>
            <Box>{moment().format("dddd, MMMM Do YYYY")}</Box>
          </Box>
          <Box>
            <IconButton color="inherit" className={classes.profileWrapper}>
              <Avatar
                alt="Remy Sharp"
                src={profileImage}
                className={classes.avatarSize}
              />
              <Typography
                className={classes.userNameStyle}
                component="p"
                variant="subtitle2"
                color="inherit"
                noWrap
              >
                User Name
              </Typography>
            </IconButton>
            <IconButton color="inherit" className={classes.iconPadding}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={classes.iconColor} />
          </IconButton>
        </div>
        <Divider />
        <List>
          <MainListItems />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.dataTable}>
                <Tab tabTitle="Trades">
                  <DataTable />
                </Tab>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Tab tabTitle="RFQ">
                  <Rfq />
                </Tab>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Tab tabTitle="Researches">
                <Researches />
              </Tab>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Tab tabTitle="Another Data">
                <DataTable />
              </Tab>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
