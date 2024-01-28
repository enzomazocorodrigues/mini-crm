function currency(value) {
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const amount = Number(value);

  return format(amount);
}

export default currency;
