document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("payment-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (cardNumber.trim() === "") {
      alert("Please enter your card number.");
      return;
    }

    if (expiry.trim() === "") {
      alert("Please enter the expiry date.");
      return;
    }

    if (cvv.trim() === "") {
      alert("Please enter the CVV.");
      return;
    }

    alert("Payment successful!");
    console.log("Payment");
    window.location.href = "ticket.html";
  });
});
