export const dateDifference = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffDate = new Date(endDate - startDate);
  const getYear = diffDate.toISOString().slice(0, 4) - 1970;
  const finalDiff = `${
    getYear > 0 ? getYear + " years" : ""
  }  ${diffDate.getMonth()} ${diffDate.getMonth() > 1 ? "months" : "month"}`;

  return finalDiff;
};
