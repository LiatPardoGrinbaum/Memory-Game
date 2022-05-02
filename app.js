/* let h4 = {
  id: "4h",
  img: "asdf.jpg",
}[(h4, h5)];
function randomCard() {
  // בוחר 6 קלפים רנדומאלית
}
function randomPlace(param) {
  //
}
 */
// const cells = document.querySelectorAll(".cell");
// console.log(cells);

const arrObj = [
  {
    id: "club3",
    source: "./images/club_3.png",
  },
  {
    id: "club3",
    source: "./images/club_3.png",
  },
  {
    id: "club4",
    source: "./images/club_4.png",
  },
  {
    id: "club4",
    source: "./images/club_4.png",
  },
  {
    id: "club5",
    source: "./images/club_5.png",
  },
  {
    id: "club5",
    source: "./images/club_5.png",
  },
  {
    id: "diamond_1",
    source: "./images/diamond_1.png",
  },
  {
    id: "diamond_1",
    source: "./images/diamond_1.png",
  },
  {
    id: "club_queen",
    source: "./images/club_queen.png",
  },
  {
    id: "club_queen",
    source: "./images/club_queen.png",
  },
  {
    id: "club_king",
    source: "./images/club_king.png",
  },
  {
    id: "club_king",
    source: "./images/club_king.png",
  },
];

const backImages = document.querySelectorAll(".back");

const random = Math.floor(Math.random() * backImages.length);

function setCards() {
  backImages.forEach((div) => {
    const img = document.createElement("img");
    const random = Math.floor(Math.random() * arrObj.length);
    img.src = arrObj[random].source;
    div.setAttribute("id", arrObj[random].id);
    div.appendChild(img);
    arrObj.splice(random, 1);
  });
}
setCards();

const cards = document.querySelector(".cards");
// console.log(cards);

cards.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.display = "none";

  // if (e.target !== e.currentTarget) {
  // console.log(e.target);

  // }
});
