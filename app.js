window.onload = () => {
  document.querySelector(".card").classList.add(randomPalo());
  document.querySelector(".card").innerHTML = randomNumber();
};

let randomNumber = () => {
  let num = Math.floor(Math.random() * 13);
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  return numbers[num];
};
let randomPalo = () => {
  let num = Math.floor(Math.random() * 4);
  let palo = ["diamond", "heart", "spade", "club"];
  return palo[num];
};
