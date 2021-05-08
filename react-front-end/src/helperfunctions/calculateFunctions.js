// calculate average, to zero decimal place ie. 54.5% = 55%
const calculatePercentage = (saving, totalCost) => {
  return ((saving / totalCost) * 100).toFixed(0);
};

// calculate days remaining until total cost is reached, given
// the savings so far and the daily drip amount

const calculateDaysRemaining = (saving, totalCost, dailyDrip) => {
  return Math.ceil((totalCost - saving) / dailyDrip);
};

export { calculatePercentage, calculateDaysRemaining };
