const currencyConverter = function (amount) {
  return amount * 1206;
};

export const currencyFormatter = function (currency) {
  // Convert currency to som
  const som = currencyConverter(currency);

  // Format the currency
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'som',
  }).format(som);
};
