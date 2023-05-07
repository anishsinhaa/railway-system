document.addEventListener("DOMContentLoaded", () => {
  function displayTrainDetails(train) {
    trainDetails.innerHTML = "";
    const trainName = document.createElement("p");
    trainName.classList.add("train-name");
    trainName.textContent = train.name;
    trainDetails.appendChild(trainName);

    const trainDuration = document.createElement("p");
    trainDuration.classList.add("train-duration");
    trainDuration.textContent = `Duration: ${train.duration}`;
    trainDetails.appendChild(trainDuration);

    const trainStops = document.createElement("p");
    trainStops.classList.add("train-stops");
    trainStops.textContent = `Stops: ${train.stops.join(", ")}`;
    trainDetails.appendChild(trainStops);
  }
  const destination = ["Mumbai", "Pune"];
  let from = "";
  let to = "";
  let trainDetails = localStorage.getItem(trainDetails);
});
