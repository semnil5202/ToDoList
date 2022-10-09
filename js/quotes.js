const quotes = [
  {
    wiseSaying: "Youth isn’t always all it’s touted to be.",
    author: "- Lawana Blackwell",
  },
  {
    wiseSaying:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "- Maya Angelou",
  },
  {
    wiseSaying: "Life is either a daring adventure or nothing at all.",
    author: "- Helen Keller",
  },
  {
    wiseSaying: "This too shall pass.",
    author: "- Et hoc transibit",
  },
  {
    wiseSaying: "Great minds have purposes, others have wishes.",
    author: "- Washington Irving",
  },
];

const saying = document.querySelector(".wise-saying");
const auth = document.querySelector(".author");
const randomNum = Math.ceil(Math.random() * quotes.length) - 1;

saying.innerText = quotes[randomNum].wiseSaying;
auth.innerText = quotes[randomNum].author;
