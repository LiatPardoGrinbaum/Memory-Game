const cardsArr = [
  {
    id: "pic1",
    source: "./lanscape/img1.jpg",
  },
  {
    id: "pic2",
    source: "./lanscape/img2.jpg",
  },
  {
    id: "pic3",
    source: "./lanscape/img3.jpg",
  },
  {
    id: "pic4",
    source: "./lanscape/img4.jpg",
  },
  {
    id: "pic5",
    source: "./lanscape/img5.jpg",
  },
  {
    id: "pic6",
    source: "./lanscape/img6.jpg",
  },
];
const backImages = document.querySelectorAll(".back");
let randomCards = [];

function chosecards() {
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * cardsArr.length);
    cardsArr.splice(random, 1);
    randomCards.push(random);
  }
}
chosecards();
console.log(randomCards);
function setCards() {
  chosecards();
  chosecards();
  div.style.background = `url( ${cardsArr[random].source} )`;
  img.src = arrObj[random].source;
}

// const cards = document.querySelector(".cards");
// // console.log(cards);

// cards.addEventListener("click", function (e) {
//   console.log(e.target);
//   e.target.style.display = "none";
// });
