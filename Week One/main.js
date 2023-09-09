const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateTime() {
  const day = document.querySelector(".currentDay");
  const Time = document.querySelector(".currentTime");

  const date = new Date().getDay();
  const weekday = weekdays[date];

  const time = new Date().getTime();

  day.innerHTML = `${weekday}`;
  Time.innerHTML = `${time}`;
  setTimeout(() => updateTime(), 1000);
}

updateTime();
