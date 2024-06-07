function calculateRemainingAmount(hours, daily,hourly) {
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;

  const dailyAmount = days * daily;
  const hourlyAmount = remainingHours * hourly;

  return Math.min(dailyAmount, daily) + hourlyAmount;
}

export default calculateRemainingAmount;