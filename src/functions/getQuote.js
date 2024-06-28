const calculateQuote = (distanceInMiles) => {
  let baseCharge;
  let ratePerMile;
  let price;

  if (distanceInMiles <= 2.99) {
    baseCharge = 7.99;
    ratePerMile = 2.01;
  } else if (distanceInMiles <= 6.99) {
    baseCharge = 9.99;
    ratePerMile = 2.0;
  } else if (distanceInMiles <= 9.99) {
    baseCharge = 14.99;
    ratePerMile = 1.99;
  } else if (distanceInMiles <= 19.99) {
    baseCharge = 17.99;
    ratePerMile = 1.98;
  } else if (distanceInMiles <= 29.99) {
    baseCharge = 19.99;
    ratePerMile = 1.95;
  } else {
    baseCharge = 24.99;
    ratePerMile = 1.75;
  }

  price = baseCharge + distanceInMiles * ratePerMile;

  // Round price to 2 decimal places
  price = Math.round(price * 100) / 100;

  // Convert price to string with fixed 2 decimal places
  price = price.toFixed(2);

  return price;
};

export default calculateQuote;
