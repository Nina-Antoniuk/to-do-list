export const getDateFromTimestamp = (timeStamp: number): string => {
  const date = new Date(timeStamp);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month.toString().length === 1) {
    return `${day}.0${month}.${year}`;
  }

  return `${day}.${month}.${year}`;
};
