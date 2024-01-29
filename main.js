let button = document.querySelector("button");

button.onclick = function () {
  let lHeart = document.querySelector(".content .l-heart");
  let rHeart = document.querySelector(".content .r-heart");
  let py = document.querySelector(".content .py");
  let h2 = document.querySelector(".content h2");
  let h1 = document.querySelector(".content h1");
  py.style.top = "187px"; // 187

  rHeart.style.top = "100px";
  rHeart.style.left = "101px";

  lHeart.style.top = "  100px";
  lHeart.style.left = "199px";

  h2.style.color = "white";

  h1.style.color = "white";
};
