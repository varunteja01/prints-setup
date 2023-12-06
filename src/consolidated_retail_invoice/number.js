export const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    currency: 'INR',
  }).format(value)
