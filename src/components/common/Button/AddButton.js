import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #0395e9 30%, #0395e9 90%)",
    borderRadius: 3,
    border: 0,
    width: "100%",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const BuyButton = () => {
  return <StyledButton>Add</StyledButton>;
};

export default BuyButton;
