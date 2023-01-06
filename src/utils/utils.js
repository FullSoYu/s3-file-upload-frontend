export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(". ") + ".";

  //   var date = new Date();
  //   date.setHours(date.getHours() + 9);
  //   return date.toISOString().replace("T", " ").substring(0, 19);
};
