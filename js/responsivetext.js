window.onload = (function () {
  getDateTime();
})();

function getDateTime() {
  var now = new Date();
  var hour = now.getHours();
  if (hour >= 0 && hour <= 5) {
    document.getElementById("greeting").innerHTML = "Good Night 🌚";
  } else if (hour > 5 && hour <= 10) {
    document.getElementById("greeting").innerHTML = "Good Morning🌞";
  } else if (hour > 10 && hour <= 15) {
    document.getElementById("greeting").innerHTML = "Siang Sheyeeng!!";
  } else if (hour > 15 && hour <= 18) {
    document.getElementById("greeting").innerHTML = "Sore!!";
  } else if (hour > 18 && hour <= 21) {
    document.getElementById("greeting").innerHTML = "Helo cantik :)";
  } else if (hour > 21 && hour <= 24) {
    document.getElementById("greeting").innerHTML =
      "Time to sleep, sweet dream ya 🌚";
  }
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
