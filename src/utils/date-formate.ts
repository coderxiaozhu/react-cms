import moment from "moment";

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

export const formatDate = (date: string, format: string = DATE_TIME_FORMAT) => {
  return moment.utc(date).utcOffset(8).format(format);
}
