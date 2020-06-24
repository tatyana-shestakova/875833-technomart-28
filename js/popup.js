let popupBasket = document.querySelector(".hidden-block-catalog");
let buttonsBuy = document.querySelectorAll(".btn-buy");
let closeButton = document.querySelector(".hidden-btn-maps");
let continueButton = document.querySelector(".continue-buy")

for (var i = 0; i < buttonsBuy.length; i++) {
buttonsBuy[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.add("hidden-show");
});
}

closeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove("hidden-show");
});

continueButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove("hidden-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupBasket.classList.contains("hidden-show")) {
      evt.preventDefault();
      popupBasket.classList.remove("hidden-show");
    }
  }
});
