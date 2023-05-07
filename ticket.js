document.addEventListener("DOMContentLoaded", () => {
  const passengers = JSON.parse(localStorage.getItem("passengers"));
  console.log(passengers);
  document.getElementById("name").innerHTML = document.getElementById(
    "pnr"
  ).innerHTML = "884576627";
  document.getElementById("train-name").innerHTML =
    localStorage.getItem("train-name");
  document.getElementById("train-no").innerHTML =
    localStorage.getItem("train-no");
  document.getElementById("train-departure").innerHTML =
    localStorage.getItem("train-departure");
  document.getElementById("train-origin").innerHTML =
    localStorage.getItem("train-origin");
  document.getElementById("train-destination").innerHTML =
    localStorage.getItem("train-destination");
  document.getElementById("train-date").innerHTML =
    localStorage.getItem("train-date");
  document.getElementById("totalCost").innerHTML =
    localStorage.getItem("totalCost");
  document.getElementById("seat").innerHTML = "A23";
});
