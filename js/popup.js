let popupBasket = document.querySelector(".hidden-block-catalog");
let buttonBuy = document.querySelector(".btn-buy");
let closeButton = document.querySelector(".hidden-btn-maps");
let continueButton = document.querySelector(".continue-buy")

buttonBuy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.add("modal-show-catalog");
});

closeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove("modal-show-catalog");
});

continueButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove("modal-show-catalog");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupBasket.classList.contains("modal-show-catalog")) {
      evt.preventDefault();
      popupBasket.classList.remove("modal-show-catalog");
    }
  }
});
