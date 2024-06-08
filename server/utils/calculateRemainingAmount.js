function calculateRemainingAmount(hours, rates) {
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;

  const dailyAmount = days * rates.daily;
  const hourlyAmount = remainingHours * rates.hourly;

  return Math.min(dailyAmount, rates.daily) + hourlyAmount;
}

export default calculateRemainingAmount;
