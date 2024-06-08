const calculateTotalCost = (
  rates,
  rentper,
  pickupDate,
  dropoffDate,
  discounts,
  additionalCharges
) => {
  const rentalDurationInHours =
    (new Date(dropoffDate) - new Date(pickupDate)) / (1000 * 60 * 60); // Duration in hours

  let totalEstimatePrice = 0;
  let totalAmount = 0;
  let message = "";

  let remainingHours = rentalDurationInHours;

  const weeks = Math.floor(remainingHours / 168);
  remainingHours %= 168;

  const days = Math.floor(remainingHours / 24);
  remainingHours %= 24;

  // Calculate the cost based on the duration
  if (weeks > 0) {
    const weekCost = weeks * rates.weekly;
    totalEstimatePrice += weekCost;
    message += `Applied weekly rate for ${weeks} week(s) (weekly cost $${weekCost}). `;
  }
  if (days > 0) {
    const dayCost = days * rates.daily;
    totalEstimatePrice += dayCost;
    message += `Applied daily rate for ${days} day(s) (daily cost $${dayCost}). `;
  }
  if (remainingHours > 0) {
    const hourCost = Math.min(remainingHours * rates.hourly, rates.daily);
    totalEstimatePrice += hourCost;
    message += `Applied hourly rate for ${remainingHours} hour(s) (hourly cost $${hourCost}). `;
  }

  // Apply discount
  const discountAmount = totalEstimatePrice * (discounts / 100);
  totalAmount = totalEstimatePrice - discountAmount;
  if (discounts > 0) {
    message += `Applied discount of ${discounts}% (discount amount $${discountAmount}). `;
  }

  // Add additional charges
  totalAmount += additionalCharges;
  if (additionalCharges > 0) {
    message += `Applied additional charges (amount $${additionalCharges}).`;
  }

  // Format rental duration
  const formattedDuration = `${weeks > 0 ? weeks + " week(s) " : ""}${
    days > 0 ? days + " day(s) " : ""
  }${remainingHours > 0 ? remainingHours + " hour(s)" : ""}`.trim();

  return {
    totalEstimatePrice: totalEstimatePrice,
    discountAmount,
    additionalCharges,
    totalPrice: totalAmount,
    message: message.trim(),
    rentalDuration: formattedDuration,
  };
};


export default calculateTotalCost;