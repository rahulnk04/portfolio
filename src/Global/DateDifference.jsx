export const dateDifference = (startDate, endDate = new Date()) => {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();
  let yearDiff = endYear - startYear;
  let monthDiff = endMonth - startMonth;
  let dayDiff = endDay - startDay;

  if (dayDiff < 0) {
    monthDiff--;
    const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
    dayDiff = lastMonth.getDate() - startDay + endDay;
  }

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  let output = "";
  if (yearDiff > 0) {
    output += `${yearDiff} ${yearDiff === 1 ? "year" : "years"}`;
  }
  if (monthDiff > 0) {
    if (output) output += ", ";
    output += `${monthDiff} ${monthDiff === 1 ? "month" : "months"}`;
  }
  if (dayDiff > 0 && monthDiff === 0) {
    if (output) output += ", ";
    output += `${dayDiff} ${dayDiff === 1 ? "day" : "days"}`;
  }

  return output;
};
