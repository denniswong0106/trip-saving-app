// calculate average, to zero decimal place ie. 54.5% = 55%
const calculatePercentage = (saving, totalCost) => {
  return ((saving / totalCost) * 100).toFixed(0);
};

// calculate days remaining until total cost is reached, given
// the savings so far and the daily drip amount

const calculateDaysRemaining = (dailyDrip, totalCost, saving = 0) => {
  return Math.ceil((totalCost - saving) / dailyDrip);
};

// calculate the date at which savings will be finished.
// returns a date string with year month date.
const expectedDate = (currentDate, days) => {
  const current = new Date(currentDate);

  const output = new Date(current.setDate(current.getDate() + days));
  return output.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// grabs today's date
const today = new Date();

// uses booking the booking days to calculate remaining days untill the trip
const daysRemaining = (bookingDate) => {
  const tripDay = new Date(bookingDate);
  const timeDiff = Math.abs(today - tripDay);
  
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};

// grabs today's date and converts it to a Month, Day, Year format
const currentDay = () => {
  return today.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
};


export { calculatePercentage, calculateDaysRemaining, expectedDate, daysRemaining, currentDay };
