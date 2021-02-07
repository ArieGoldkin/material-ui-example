import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CropFreeSharpIcon from "@material-ui/icons/CropFreeSharp";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import HeightSharpIcon from "@material-ui/icons/HeightSharp";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tableHeader: {
    background: "#262626",
    display: "flex",
    justifyContent: "space-between",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    background: "#323232",
    paddingRight: "1.5rem",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  },
  tab: {
    color: "#fff",
    fontSize: "0.8rem",
    lineHeight: "1rem",
    marginLeft: "0.5rem",
  },
  iconBtn: {
    padding: "0.3rem",
    marginLeft: "0.5rem",
  },
  iconStyle: {
    color: "#B0B0B0",
    fontSize: "1.2rem",
  },
  moveIcon: {
    position: "relative",
    color: "#B0B0B0",
    fontSize: "1.2rem",
    zIndex: 1,
  },
  movedIcon: {
    position: "absolute",
    top: "5px",
    left: "5px",
    color: "#B0B0B0",
    fontSize: "1.2rem",
    transform: "rotate(90deg)",
  },
  containerWrapper: {
    backgroundColor: "inherit",
  },
});

const Tab = (props) => {
  const classes = useStyles();
  return (
    <>
      <Paper>
        <Box className={classes.tableHeader}>
          <Box className={classes.title}>
            <IconButton className={classes.iconBtn}>
              <CropFreeSharpIcon className={classes.iconStyle} />
            </IconButton>
            <FiberManualRecordIcon
              style={{
                color: green[500],
                fontSize: "0.8rem",
                marginLeft: "0.5rem",
              }}
            />
            <Typography className={classes.tab}>{props.tabTitle}</Typography>
          </Box>
          <Box>
            <IconButton className={classes.iconBtn}>
              <HeightSharpIcon className={classes.moveIcon} />
              <HeightSharpIcon className={classes.movedIcon} />
            </IconButton>
            <IconButton className={classes.iconBtn}>
              <CloseIcon className={classes.iconStyle} />
            </IconButton>
          </Box>
        </Box>
      </Paper>
      <Paper className={classes.containerWrapper}>{props.children}</Paper>
    </>
  );
};

export default Tab;
