import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50,
  },
  labelInput: {
    // fontSize: "0.8rem",
    transform: " translate(14px, 9px) scale(1)",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectInput: {
    padding: "0.3rem 1rem",
  },
  select: {
    padding: "0.2rem 0.2rem",
  },
}));

const theme = createMuiTheme({
  overrides: {
    marginDense: {
      transform: " translate(14px, 6px) scale(1)",
    },
  },
});

const SelectInput = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    quantity: "",
  });

  const handleChange = (event) => {
    const quantity = event.target.name;
    setState({
      ...state,
      [quantity]: event.target.value,
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
        >
          <InputLabel
            classes={{ marginDense: classes.labelInput }}
            htmlFor="outlined-quantity"
          >
            {props.start}
          </InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            label={props.label}
            inputProps={{
              className: classes.select,
              quantity: props.start,
              id: props.id,
            }}
          >
            <option aria-label="None" value="" />
            {props.options.map((option) => {
              return (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

export default SelectInput;
