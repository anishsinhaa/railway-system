document.addEventListener("DOMContentLoaded", () => {
  //greet
  let username = localStorage.getItem("username");
  let checkLogin = localStorage.getItem("checkLogin");
  if (checkLogin) {
    document.getElementById("greet").innerHTML = "Welcome " + username;
    //dashboard-nav
    //let hp = document.getElementById("dashboard");
    //hp.addEventListener("click", (e) => {
    //  console.log("dashboard loading");
    //  window.location.href = "dashboard.html";
    //});
    //train-name-click
    let trainClick = document.querySelectorAll("#trainrow");
    Array.from(trainClick).forEach((train) => {
      train.addEventListener("click", (e) => {
        let trainName = e.target.innerHTML;
        console.log(trainName);
        localStorage.setItem("trainNAME", trainName);
        window.location.href = "book-0.html";
      });

      //searchTrains button
      const btn = document.getElementById("submitButton");
      btn.addEventListener("click", (e) => {
        console.log("click");
      });
      //train-search-form
      // const searchForm = document.getElementById("search-form");
      // searchForm.addEventListener("submit", (event) => {
      //   // Send the search details to main.js
      //   window.location.href = "book-1.html";
      // });
    });
  }
});
