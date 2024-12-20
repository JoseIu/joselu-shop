export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
    maximumSignificantDigits: 2,
  }).format(value);
};
