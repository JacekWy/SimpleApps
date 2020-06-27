function startCount() {
  var numberSec = document.getElementById("number").value;

  setInterval(() => {
    document.getElementsByClassName("counter")[0].innerHTML = numberSec;
    numberSec--;
  }, 1000);
}
