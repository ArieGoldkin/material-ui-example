import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  researchBox: {
    background: "#262626",
    padding: "0.7rem 0.7rem 0 0.7rem",
    marginBottom: "0.5rem",
  },
  timeHeader: {
    display: "flex",
    marginBottom: "0.8rem",
  },
  fontTimeDateHeader: {
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
  date: {
    color: "#476D81",

    marginRight: "0.5rem",
  },
  time: {
    color: "#939393",
  },
  title: {
    color: "#fff",
    lineHeight: "1.8rem",
    marginBottom: "1rem",
  },
  content: {
    color: "orange",
    fontSize: "1rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #626262",
  },
  footerResearchBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.4rem 0",
  },
  bTc: {
    display: "flex",
    width: "33%",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
  },
  footerFontSize: {
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
  footerFontColor: {
    color: "#1F6D9D",
  },
  preview: {
    display: "flex",
    alignItems: "center",
    width: "22%",
    justifyContent: "space-between",
  },
  iconStyle: {
    fontSize: "1.2rem",
    color: "#1F6D9D",
  },
});

const ResearchItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.researchBox}>
      <Box className={classes.timeHeader}>
        <Typography className={`${classes.date} ${classes.fontTimeDateHeader}`}>
          {props.date}
        </Typography>
        <Typography
          className={`${classes.time}  ${classes.fontTimeDateHeader}`}
        >
          {props.time}
        </Typography>
      </Box>
      <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography>
      <Typography className={classes.content}>{props.content}</Typography>
      <Box className={classes.footerResearchBox}>
        <Box className={classes.bTc}>
          <Typography className={classes.footerFontSize}>
            {props.btc}
          </Typography>
          <Typography className={classes.footerFontSize}>
            {props.bitcoin}
          </Typography>
        </Box>
        <Box className={classes.preview}>
          <VisibilityIcon className={classes.iconStyle} />
          <Typography
            className={`${classes.footerFontSize} ${classes.footerFontColor}`}
          >
            {props.preview}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ResearchItem;
