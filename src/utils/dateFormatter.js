import moment from "moment";

export const formatAsDateMonthYear = date => {
    date = moment(date, "YYYY-MM-DD");
    return moment(date).format("DD MMMM YYYY");
};