import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import AddButton from "../common/Button/AddButton";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    background: "#323232",
    padding: "0.5rem",
  },
  formControlButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "0.5rem 0",
  },
  buttonStyle: {
    color: "#fff",
    width: "50%",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  sellButton: {
    borderBottom: "3px solid red",
    color: "red",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  buyButton: {
    borderBottom: "3px solid green",
    color: "green",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  formControlSelect: {
    width: "100%",
    background: "#262626",
    borderRadius: "3px",
    border: "#fff",
  },
  inputStyle: {
    color: "#fff",
  },
  selectMenu: {
    color: "black",
  },
  addButton: {
    marginTop: "1rem",
    marginBottom: "0.2rem",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const Rfq = (props) => {
  const classes = useStyles();
  const [currentBtn, setCurrentBtn] = useState("BUY");

  const [state, setState] = useState({
    product: "",
    quantity: 0,
  });

  const handleChangeSelect = (event) => {
    const product = event.target.name;
    const quantity = event.target.name;
    setState({
      ...state,
      [product]: event.target.value,
      [quantity]: event.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <FormControl className={classes.formControlButtons}>
          <Button
            onClick={() => setCurrentBtn("SELL")}
            name="SELL"
            className={`${classes.buttonStyle} ${
              currentBtn === "SELL" && classes.sellButton
            }`}
          >
            Sell
          </Button>
          <Button
            onClick={() => setCurrentBtn("BUY")}
            name="BUY"
            className={`${classes.buttonStyle} ${
              currentBtn === "BUY" && classes.buyButton
            }`}
          >
            Buy
          </Button>
        </FormControl>
        <FormControl
          variant="outlined"
          color="primary"
          className={classes.formControlSelect}
        >
          <InputLabel
            className={classes.inputStyle}
            htmlFor="outlined-product-native-simple"
          >
            Product
          </InputLabel>
          <Select
            classes={{
              selectMenu: classes.selectMenu,
              icon: classes.inputStyle,
            }}
            native
            value={state.product}
            onChange={handleChangeSelect}
            label="Product"
            inputProps={{
              className: classes.inputStyle,
              name: "product",
              id: "product",
            }}
          >
            <option aria-label="None" value="" />
            <option className={classes.selectMenu} value="example1">
              example1
            </option>
            <option className={classes.selectMenu} value="example2">
              example2
            </option>
            <option className={classes.selectMenu} value="example3">
              example3
            </option>
          </Select>
        </FormControl>
        <FormControl
          className={classes.formControlSelect}
          style={{ marginTop: "1rem" }}
        >
          <TextField
            id="quantity"
            label="Quantity"
            type="number"
            onChange={handleChangeSelect}
            inputProps={{
              className: classes.inputStyle,
              name: "quantity",
              id: "quantity",
            }}
            InputLabelProps={{
              className: classes.inputStyle,
            }}
            variant="outlined"
          />
        </FormControl>
        <Box className={classes.addButton}>
          <AddButton />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Rfq;
