document.addEventListener("DOMContentLoaded", () => {
  //train database
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
      price: "20",
    },
    {
      name: "Inner-Circle Local",
      trainNo: 321123,
      departure: "10:00",
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
      price: "15",
    },
  ];
  const trainName = localStorage.getItem("trainNAME");
  let train = trains.find((train) => (train.name = trainName));
  setTrainDetails(train);
  document.getElementById("train-name").innerHTML = train.name;
  document.getElementById("train-no").innerHTML = train.trainNo;
  document.getElementById("train-departure").innerHTML = train.departure;
  document.getElementById("train-duration").innerHTML = train.duration;
  document.getElementById("from").innerHTML = train.origin;
  document.getElementById("to").innerHTML = train.destination;
  document.getElementById("date").innerHTML = train.date;
  document.getElementById("price").innerHTML = train.price + " ₹";
  let cost = train.price * document.querySelector("input").value;
  localStorage.setItem("totalCost", cost);
  document.getElementById("cost").innerHTML = cost + " ₹";
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let passengers = document.querySelector("input").value;
    localStorage.setItem("passengers", passengers);
    console.log(passengers);
    window.location.href = "passengerDetails.html";
  });

  //Event Listener for change in total passengers
  const input = document.querySelector("input");
  input.addEventListener("change", () => {
    cost = train.price * document.querySelector("input").value;
    localStorage.setItem("totalCost", cost);
    document.getElementById("cost").innerHTML = cost + " ₹";
    console.log("Total Cost " + cost);
  });

  const cancelBtn = document.getElementById("cancelBtn");
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("cancel");
    //window.location.href = "payment.html";
  });
  cancelBtn;
});
function setTrainDetails(train) {
  localStorage.setItem("train-name", train.name);
  localStorage.setItem("train-no", train.trainNo);
  localStorage.setItem("train-departure", train.departure);
  localStorage.setItem("train-origin", train.origin);
  localStorage.setItem("train-destination", train.destination);
  localStorage.setItem("train-date", train.date);
  localStorage.setItem("train-price,", train.price);
}
