const datetimeElement = document.querySelector(".datetime");

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let today = new Date();
let hour = today.getHours();
let min = [today.getMinutes()].map((x) => `${x}`.padStart(2, "0")).join(":");
let sec = [today.getSeconds()].map((x) => `${x}`.padStart(2, "0")).join(":");
let day = today.getDate();
let month = monthNames[today.getMonth()];
let year = today.getFullYear();
let datetime =
  month + " " + day + ", " + year + " " + hour + ":" + min + ":" + sec;
datetimeElement.innerHTML = datetime;
