const backgroundsArr = [
  "pexels-aarti-vijay-2693529.jpg",
  "pexels-sami-anas-5137664.jpg",
  "pexels-felix-mittermeier-2832026.jpg",
  "pexels-jeremy-bishop-2923595.jpg",
  "pexels-andy-vu-3244513.jpg",
];

const imgNum = Math.ceil(Math.random() * backgroundsArr.length) - 1;
const backgroundImg = document.createElement("img");
backgroundImg.className = "background-img";
backgroundImg.src = `img/${backgroundsArr[imgNum]}`;

document.body.append(backgroundImg);
