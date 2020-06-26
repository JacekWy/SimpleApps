//Bmi appp
function resultBmi() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  result = parseInt(weight) / Math.pow(parseInt(height) / 100, 2);

  if (result < 16) {
    var nameResult = "Wyglodzenie";
  } else if (result < 16.99) {
    var nameResult = "Wychudzenie";
  } else if (result < 18.48) {
    var nameResult = "Niedowaga";
  } else if (result < 24.99) {
    var nameResult = "Waga Prawidlowa";
  } else if (result < 29.99) {
    var nameResult = "Nadwaga";
  } else if (result < 34.99) {
    var nameResult = "1 stopiem otylosci";
  }

  document.getElementsByClassName("result")[0].innerHTML =
    "Wynik: " + result.toFixed(2) + "</br>" + nameResult;
}
