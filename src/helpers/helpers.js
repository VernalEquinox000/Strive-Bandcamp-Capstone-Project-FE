export const dateConverter = (date) => {
  let year = date.slice(0, 4);
  let day = date.slice(8, 10);
  let month;
  switch (date.slice(5, 7)) {
    case "00":
      month = "January";
      break;
    case "01":
      month = "February";
      break;
    case "02":
      month = "March";
      break;
    case "03":
      month = "April";
      break;
    case "04":
      month = "May";
      break;
    case "05":
      month = "June";
      break;
    case "06":
      month = "July";
    case "07":
      month = "August";
      break;
    case "08":
      month = "September";
      break;
    case "09":
      month = "October";
      break;
    case "10":
      month = "November";
      break;
    case "11":
      month = "December";
  }
  return `${day} ${month} ${year}`; //+ year;
};
