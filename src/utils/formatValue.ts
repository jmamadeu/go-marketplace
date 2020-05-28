const formatValue = (value: number) =>
  Intl.NumberFormat('pt-AO', { currency: 'AOA', style: 'currency' }).format(
    value,
  );

export default formatValue;
