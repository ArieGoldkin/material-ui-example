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
    color: "#fff",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectInput: {
    padding: "0.3rem 1rem",
  },
  select: {
    color: "black",
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
            className={classes.labelInput}
            htmlFor="outlined-quantity"
          >
            {props.start}
          </InputLabel>
          <Select
            size="small"
            native
            value={state.age}
            onChange={handleChange}
            label={props.label}
            inputProps={{
              className: classes.labelInput,
              quantity: props.start,
              id: props.id,
            }}
          >
            <option aria-label="None" value="" />
            {props.options.map((option) => {
              return (
                <option
                  className={classes.select}
                  key={option.id}
                  value={option.value}
                >
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
