document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const trainDetails = document.getElementById("train-details");

  // Define an array of train objects for demonstration purposes
  const trains = [
    {
      name: "R&D Express",
      trainNo: 123123,
      departure: "09:00",
      origin: "Main Gate",
      destination: "R&D Building",
      duration: "1.20 min",
      stops: ["Nasik", "Asangaon", "Thane", "Pune"],
      date: "15-04-2023",
    },
    {
      name: "Inner-Circle Local",
      trainNo: 321123,
      departure: "21:00",
      origin: "H-7",
      destination: "Inner Circle",
      duration: "7 mins",
      stops: [
        "Techno",
        "H-12",
        "H-13",
        "Management Building",
        "PMC",
        "R&D",
        "Inner-Cirlce",
      ],
      date: "20-04-2023",
    },
  ];

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

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const from = searchForm.from.value;
    const to = searchForm.to.value;
    const matchingTrains = trains.filter(
      (train) => train.origin === from && train.destination === to
    );
    if (matchingTrains.length > 0) {
      const trainList = document.createElement("ul");
      trainList.classList.add("train-list");
      matchingTrains.forEach((train) => {
        const trainItem = document.createElement("li");
        trainItem.classList.add("train-item");
        trainItem.textContent = train.name;
        trainItem.addEventListener("click", () => {
          displayTrainDetails(train);
        });
        trainList.appendChild(trainItem);
      });
      trainDetails.innerHTML = "";
      trainDetails.appendChild(trainList);
    } else {
      trainDetails.innerHTML = "<p>No trains found.</p>";
    }
  });
});
