function todayDate() {
  var d = new Date();
  var n = d.getFullYear() + " ";
  var dateElements = document.querySelectorAll(".yearDisplay");

  dateElements.forEach(function(el) {
    el.innerHTML = n;
  });
}
