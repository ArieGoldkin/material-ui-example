function createData(
  tradeDate,
  side,
  product,
  quantity,
  price,
  counterParty,
  providedPrice,
  salesPl,
  type,
  execution,
  status
) {
  return {
    tradeDate,
    side,
    product,
    quantity,
    price,
    counterParty,
    providedPrice,
    salesPl,
    type,
    execution,
    status,
  };
}

export const rows = [
  createData(
    "2021-01-06 01:55:20",
    "BUY",
    " BTC-USD",
    0.016,
    1078.368,
    "Cumberland",
    0.226,
    0.0,
    "hedge",
    "rest API",
    true
  ),
  createData(
    "2021-01-06 01:55:10",
    "SELL",
    " BTC-USD",
    0.016,
    1079.516,
    "Colinflip dba GPD Holdings",
    0.226,
    0.982,
    "client",
    "rest API",
    true
  ),
  createData(
    "2021-01-06 01:54:20",
    "SELL",
    " XRP-USD",
    2.291,
    34040.516,
    "B2C2",
    34055.0,
    0.0,
    "hedge",
    "rest API",
    false
  ),
  createData(
    "2021-01-06 01:54:10",
    "BUY",
    " XRP-USD",
    2.291,
    34041.236,
    "I Trust dba Sunwest",
    34057.128,
    0.928,
    "Client",
    "rest API",
    true
  ),
];

export const quantityOptions = [
  {
    id: "1",
    value: 0.001,
  },
  {
    id: "2",
    value: 1.0,
  },
  {
    id: "3",
    value: 2.22,
  },
];
