const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getTime() {
  const day = document.querySelector(".currentDay");
  const Time = document.querySelector(".currentTime");

  const date = new Date().getDay();
  const weekday = weekdays[date];

  const time = new Date().toLocaleTimeString("en-US", { hour12: true });

  day.innerHTML = `${weekday}`;
  Time.innerHTML = `${time}`;
  setTimeout(() => getTime(), 1000);
}

getTime();
