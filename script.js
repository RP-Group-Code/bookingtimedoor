function goToBooking() {
  window.location.assign("booking.html");
}

function process() {
  var fullname = document.getElementById("fullnames").value;
  var package = document.getElementById("package").value;
  var num_of_people = document.getElementById("num-of-people").value;
  var totalPayment = package * num_of_people;
  document.getElementById("total").innerHTML = totalPayment;

  setTimeout(() => {
    alert("Terima kasih Telah memesan!" + fullname);
    window.location.assign("index.html");
  }, 3000);
}

