export const getMonthIntFromDate = (date = new Date()) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const monthInt = +(`${year}${month < 9 ? `0${month + 1}` : month + 1}`);

  return { monthInt, month, year };
};

export const parseToMonthInt = (year: number, month: number) => (
  parseInt(`${year}${month >= 10 ? month : `0${month}`}`)
);

export const parseMonthIntToObj = (monthInt?: number) => {
  let year;
  let month;

  if (monthInt) {
    const str = monthInt.toString();
    year = parseInt(str.slice(0, 4));
    month = +str.slice(4) - 1;
  } else {
    const date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
  }

  return { month, year };
};
