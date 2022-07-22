export const formatDateToMMYYYY = (date: string | Date) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${month}/${year}`;
};
