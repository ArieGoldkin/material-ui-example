import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import FilterListIcon from "@material-ui/icons/FilterList";
import ReplayIcon from "@material-ui/icons/Replay";
import IconButton from "@material-ui/core/IconButton";
import SelectInput from "../SelectInput/SelectInput";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { green, red, orange } from "@material-ui/core/colors";
import { quantityOptions, rows } from "./data";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    background: "#0A0A0A",
    padding: "0 0.5rem",
  },
  table: {
    minWidth: 650,
  },
  boxHeader: {
    alignItems: "center",
    display: "flex",
    paddingLeft: "0.5rem",
  },
  oneOfTwo: {
    color: "#fff",
  },
  box: {
    background: "#323232",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBtn: {
    padding: "0.3rem",
    marginLeft: "0.5rem",
  },
  iconStyle: {
    color: "#B0B0B0",
    fontSize: "1.2rem",
  },
  cellStyle: {
    padding: "0.4rem 0.1rem",
    color: "#fff",
    border: "none",
    fontSize: "0.8rem",
  },
  textCell: {
    paddingLeft: "0.5rem",
  },
  textColorGreen: {
    color: green[500],
  },
  textColorRed: {
    color: red[500],
  },
});

const DataTable = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <Typography className={classes.oneOfTwo}>1 of 2</Typography>
          <SelectInput
            start=".000"
            label="Quantity"
            id="quantity"
            options={quantityOptions}
          />
        </Box>
        <Box>
          <IconButton className={classes.iconBtn}>
            <ReplayIcon className={classes.iconStyle} />
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <FilterListIcon className={classes.iconStyle} />
          </IconButton>
        </Box>
      </Box>
      <TableContainer component={Paper} className={classes.container}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.cellStyle}>Trade Date</TableCell>
              <TableCell className={classes.cellStyle} align="left">
                Side
              </TableCell>
              <TableCell className={classes.cellStyle} align="center">
                Product
              </TableCell>
              <TableCell className={classes.cellStyle} align="center">
                Quantity
              </TableCell>
              <TableCell className={classes.cellStyle} align="center">
                Price
              </TableCell>
              <TableCell
                className={`${classes.cellStyle} ${classes.textCell}`}
                align="left"
              >
                Counter party
              </TableCell>
              <TableCell className={classes.cellStyle} align="center">
                Provided Price
              </TableCell>
              <TableCell className={classes.cellStyle} align="right">
                Sale PL
              </TableCell>
              <TableCell className={classes.cellStyle} align="center">
                Type
              </TableCell>
              <TableCell className={classes.cellStyle} align="center">
                Execution
              </TableCell>
              <TableCell className={classes.cellStyle} align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.tradeDate}>
                <TableCell
                  className={classes.cellStyle}
                  component="th"
                  scope="row"
                >
                  {row.tradeDate}
                </TableCell>
                <TableCell
                  className={`${classes.cellStyle} ${
                    row.side === "BUY"
                      ? classes.textColorGreen
                      : classes.textColorRed
                  }`}
                  align="left"
                >
                  {row.side}
                </TableCell>
                <TableCell
                  className={`${classes.cellStyle} ${classes.textCell}`}
                  align="left"
                >
                  {row.product}
                </TableCell>
                <TableCell className={classes.cellStyle} align="center">
                  {row.quantity}
                </TableCell>
                <TableCell className={classes.cellStyle} align="right">
                  {row.price}
                </TableCell>
                <TableCell
                  style={{ color: orange[500] }}
                  className={`${classes.cellStyle} ${classes.textCell}`}
                  align="left"
                >
                  {row.counterParty}
                </TableCell>
                <TableCell className={classes.cellStyle} align="right">
                  {row.providedPrice}
                </TableCell>
                <TableCell className={classes.cellStyle} align="right">
                  {row.salesPl}
                </TableCell>
                <TableCell
                  style={{ color: orange[500] }}
                  className={`${classes.cellStyle} ${classes.textCell}`}
                  align="left"
                >
                  {row.type}
                </TableCell>
                <TableCell
                  style={{ color: orange[500] }}
                  className={classes.cellStyle}
                  align="center"
                >
                  {row.execution}
                </TableCell>
                <TableCell className={classes.cellStyle} align="center">
                  {row.status ? (
                    <FiberManualRecordIcon
                      style={{ color: green[500], fontSize: "1rem" }}
                    />
                  ) : (
                    <FiberManualRecordIcon
                      style={{ color: red[500], fontSize: "1rem" }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
