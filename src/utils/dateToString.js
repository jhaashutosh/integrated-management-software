import moment from "moment";

const dateToString = (date) => {
  const stringDate = moment(date).format("YYYY-MM-DD");
  return stringDate;
};

export default dateToString;
