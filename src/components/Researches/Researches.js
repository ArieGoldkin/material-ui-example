import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import ResearchItem from "./ResearchItem";
import { data } from "./dummyData";

const useStyles = makeStyles({
  root: {
    padding: "0.5rem",
    background: "#323232",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px",
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
});
const Researches = (props) => {
  const classes = useStyles();

  const [search, setSearch] = useState({
    search: "",
  });

  const handleChangeSelect = (event) => {
    const search = event.target.name;
    setSearch({
      ...search,
      [search]: event.target.value,
    });
  };

  return (
    <Box className={classes.root}>
      <FormControl
        className={classes.formControlSelect}
        style={{ marginTop: "1rem", marginBottom: "0.8rem" }}
      >
        <TextField
          id="quantity"
          label="Search"
          type="text"
          onChange={handleChangeSelect}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
            className: classes.inputStyle,
            name: "search",
            id: "search",
          }}
          InputLabelProps={{
            className: classes.inputStyle,
          }}
          variant="outlined"
        />
      </FormControl>
      {data.map((data) => (
        <ResearchItem
          key={data.id}
          date={data.date}
          time={data.time}
          title={data.title}
          content={data.content}
          btc={data.btc}
          bitcoin={data.bitcoin}
          preview={data.preview}
        />
      ))}
    </Box>
  );
};

export default Researches;
