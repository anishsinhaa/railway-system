document.addEventListener("DOMContentLoaded", () => {
  // Get the number of passengers from book-0.js
  const numOfPassengers = localStorage.getItem("passengers");
  console.log(numOfPassengers);
  const cost = localStorage.getItem("totalCost");
  console.log(cost);
  const train = localStorage.getItem("selectedtrain");
  console.log();
  function GenTicketDetails() {
    //Generate ticket details
    const trainDetails = document.querySelector("trainDetails");
    const newDiv = document.createElement("div");
    newDiv.innerHTML =
      "<label> TRAIN NAME :" +
      localStorage.getItem("train-name") +
      "</label> " +
      "<label> TRAIN NUMBER :" +
      localStorage.getItem("train-no") +
      "</label><br>" +
      "<label> TRAIN TIME :" +
      localStorage.getItem("train-departure") +
      "</label> " +
      "<label> TRAIN DATE :" +
      localStorage.getItem("train-date") +
      "</label><br>" +
      "<label> TRAIN ORIGIN :" +
      localStorage.getItem("train-origin") +
      "</label>  " +
      "<label> TRAIN DESTINATION :" +
      localStorage.getItem("train-destination") +
      "</label><br>" +
      "<label> TOTAL COST :" +
      localStorage.getItem("totalCost") +
      " ₹";
    ("</label><br>");
    trainDetails.appendChild(newDiv);
  }
  GenTicketDetails();
  // Generate forms for each passenger
  const passengerDetailsDiv = document.getElementById("passengerDetails");
  for (let i = 0; i < numOfPassengers; i++) {
    const passengerForm = document.createElement("div");
    passengerForm.innerHTML = `
          <label for="passengerName${i}">Passenger ${
      i + 1
    } Name:</label> <input type="text" id="passengerName${i}" name="passengerName${i}" required><br>
          <label for="passengerAge${i}">&nbsp;&nbsp;&nbsp;Passenger ${
      i + 1
    } Age:</label>
          <input type="number" id="passengerAge${i}" name="passengerAge${i}" value=required><br>&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="seatPreference${i}">Seat Preference:</label>
          <select id="seatPreference${i}" name="seatPreference${i}">
            <option value="Lower">Lower</option>
            <option value="Middle">Middle</option>
            <option value="Upper">Upper</option>
            <option value="Size Upper">Side Upper</option>
            <option value="Side Lower">Side Lower</option>
          </select>
        `;
    passengerDetailsDiv.appendChild(passengerForm);
  }

  // Handle form submission
  const passengerForm = document.getElementById("passengerForm");
  passengerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Collect passenger details and submit them to the server
    const formData = new FormData(passengerForm);
    const passengers = [];
    for (let i = 0; i < numOfPassengers; i++) {
      const passenger = {};
      passenger.name = formData.get(`passengerName${i}`);
      passenger.age = formData.get(`passengerAge${i}`);
      passenger.seatPreference = formData.get(`seatPreference${i}`);
      passengers.push(passenger);
    }
    console.log(passengers); // log the passengers array to the console for testing
    localStorage.setItem("passengers", JSON.stringify(passengers)); // store the passengers array in localStorage
    window.location.href = "payment.html";
  });

  // Handle cancel button click
  const cancelBtn = document.getElementById("cancelBtn");
  cancelBtn.addEventListener("click", () => {
    // Redirect to the home page or some other page
    window.location.href = "index.html";
  });
});
