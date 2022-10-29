let ratings = [];
let orange = "hsl(25, 97%, 53%)";
let white = "hsl(0, 0%, 100%)";

const ratingSelect = document.querySelectorAll(".rating__el");
const submit = document.querySelector(".submit");
const rating = document.querySelector(".selected__rating");
const home = document.querySelector(".home");
const thanks = document.querySelector(".thanks");

for (let i = 0; i < ratingSelect.length; i++) {
  ratingSelect[i].addEventListener("click", (e) => {
    if (ratings.length < 1) {
      ratings.push(ratingSelect[i].innerHTML);
      e.target.style.backgroundColor = orange;
      e.target.style.color = white;
    }

    console.log(ratings);

    if (ratings.length > 0) {
      submit.addEventListener("click", () => {
        home.style.display = "none";
        thanks.style.display = "flex";
        console.log(ratings);
        rating.innerHTML = ratings;
      });
    }
  });
}
