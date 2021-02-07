import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import MenuIcon from "@material-ui/icons/Menu";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import BarChartIcon from "@material-ui/icons/BarChart";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  },
  rotateTrafficIcon: {
    transform: "rotate(90deg)",
    color: "#fff",
  },
  iconColor: {
    color: "#fff",
  },
}));

export const MainListItems = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon className={classes.iconColor} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MenuIcon className={classes.iconColor} />
        </ListItemIcon>
        <ListItemText primary="Menu" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ImportExportIcon className={classes.rotateTrafficIcon} />
        </ListItemIcon>
        <ListItemText primary="Traffic" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon className={classes.iconColor} />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon className={classes.iconColor} />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon className={classes.iconColor} />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </div>
  );
};

export default MainListItems;
