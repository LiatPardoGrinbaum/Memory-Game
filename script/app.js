let countCorrect = 0;
let countInCorrect = 0;
const scoreCorrect = document.querySelector(".scoreCorrect");
const scoreInCorrect = document.querySelector(".scoreInCorrect");

const cardsArr = [
  {
    id: "pic1",
    src: "./lanscape/img1.jpg",
    isSec: false,
  },
  {
    id: "pic2",
    src: "./lanscape/img2.jpg",
    isSec: false,
  },
  {
    id: "pic3",
    src: "./lanscape/img3.jpg",
    isSec: false,
  },
  {
    id: "pic4",
    src: "./lanscape/img4.jpg",
    isSec: false,
  },
  {
    id: "pic5",
    src: "./lanscape/img5.jpg",
    isSec: false,
  },
  {
    id: "pic6",
    src: "./lanscape/img6.jpg",
    isSec: false,
  },
  {
    id: "pic1",
    src: "./lanscape/img1.jpg",
    isSec: true,
  },
  {
    id: "pic2",
    src: "./lanscape/img2.jpg",
    isSec: true,
  },
  {
    id: "pic3",
    src: "./lanscape/img3.jpg",
    isSec: true,
  },
  {
    id: "pic4",
    src: "./lanscape/img4.jpg",
    isSec: true,
  },
  {
    id: "pic5",
    src: "./lanscape/img5.jpg",
    isSec: true,
  },
  {
    id: "pic6",
    src: "./lanscape/img6.jpg",
    isSec: true,
  },
];
const backImages = document.querySelectorAll(".back");

let randomCards = []; // the new array
//chosing cards and pushing them into a new array
function choseCards() {
  for (let i = 0; i < 12; i++) {
    let random = Math.floor(Math.random() * cardsArr.length);
    randomCards.push(cardsArr[random]);
    cardsArr.splice(random, 1);
  }
}
// seting the cards onto the board
function setCards() {
  choseCards();
  for (let i = 0; i < 12; i++) {
    e = backImages[i];
    let c = randomCards[i];
    e.style.backgroundImage = `url(${c.src})`;
  }
}
setCards();

let paused = false; // pause status

let firstI = 0; // firtI - first card chosen array placement
let firstC = 0; // firtC - first card chosen board placement
// second - second card chosen
let secondI = 0; // secondI - second card chosen array placement
let secondC = 0; // secondC - second card chosen board placement
//card chosing action -
function chose() {
  let cards = document.querySelectorAll(".cell"); // the card "button"
  let innerCards = document.querySelectorAll(".card"); // the card visual
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let obj = randomCards[i];
    let innerCard = innerCards[i];
    card.addEventListener("click", () => {
      if (!paused) {
        // if the game is not paused
        if (firstI) {
          // if the first card is chosen
          secondI = obj; // setting the second chose to his object
          secondC = innerCard; // setting the second chose to hit visual
          innerCard.style.animation = "flip 1s forwards"; // flip card
          if (firstI.id === secondI.id && firstI.isSec !== secondI.isSec) {
            //if the cards are the same type but not the same card
            pause();
            setTimeout(() => {
              firstC.style.display = "none"; // make the first card gone
              secondC.style.display = "none"; // make the second card gone
              firstC = 0; // rteset first card info
              firstI = 0; // rteset first card info
              secondC = 0; // rteset second card info
              secondI = 0; // rteset second card info
            }, 1000);
            countCorrect += 1;
            scoreCorrect.innerText = countCorrect;
            winnerMessage(countCorrect);
          } else {
            //if the cards aren't the same
            pause();
            setTimeout(() => {
              firstC.style.animation = "flipBack 1s forwards "; // flip the first card back
              secondC.style.animation = "flipBack 1s forwards "; // flip the second card back
              secondC = 0; // rteset first card info
              secondI = 0; // rteset first card info
              firstC = 0; // rteset second card info
              firstI = 0; // rteset second card info
            }, 1000);
            countInCorrect += 1;
            scoreInCorrect.innerText = countInCorrect;
          }
        } else {
          // if the first card isn't chosen
          firstI = obj; // setting the first chose to his object
          firstC = innerCard; // setting the first chose to his visual
          innerCard.style.animation = "flip 1s forwards"; // flip the first card
        }
      }
    });
  }
}
chose();
async function pause() {
  paused = true;
  setTimeout(() => (paused = false), 1000);
}

//timer setting:

const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
let totalSeconds = 0;

function setTime() {
  totalSeconds++;
  seconds.innerHTML = pad(totalSeconds % 60);
  minutes.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(value) {
  const valString = value + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const startTimer = setInterval(setTime, 1000);

//setting winner message
function winnerMessage(countCorrect) {
  const message = document.querySelector(".top-text");
  const welcome = document.querySelector(".welcome");
  if (countCorrect === 6) {
    message.style.display = "block";
    welcome.style.display = "none";

    message.innerText = "congratulations! You won the game!";
    clearInterval(startTimer);
  }
}

// function showAllCards() {
//   const card = document.querySelectorAll(".card");
//   for (let i = 0; i < 12; i++) {
//     let c = randomCards[i];
//     card[i].style.backgroundImage = `url(${c.src})`;
//     e.style.display = "block";
//   }
// }
// showAllCards();
