export const saveHistory = (number, timeDate) => {
  let historyArray;
  let currentHistory = localStorage.getItem("history");
  if (!currentHistory) {
    historyArray = [];
  } else {
    historyArray = JSON.parse(currentHistory);
  }
  historyArray.unshift({
    number: number,
    timedate: timeDate,
  });
  localStorage.setItem("history", JSON.stringify(historyArray));
};
