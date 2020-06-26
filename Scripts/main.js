//Count app
var count = 0;
const dodaj = () => {
  count++;
  document.getElementsByTagName("h3")[0].innerHTML = count;
};

const odejmij = () => {
  count--;
  document.getElementsByTagName("h3")[0].innerHTML = count;
};
document.getElementsByTagName("h3")[0].innerHTML = count;
