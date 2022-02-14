export const dateDifference = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffDate = new Date(endDate - startDate);
  const finalDiff = `${
    diffDate.toISOString().slice(0, 4) - 1970
  } years ${diffDate.getMonth()} months ${diffDate.getDate() - 1} days`;

  return finalDiff;
};
