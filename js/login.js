let openForm = document.querySelector(".btn-write-us");
let popupForm = document.querySelector(".form-modal");
let feedbackForm = document.querySelector(".form-feedback");
let closeForm = document.querySelector(".btn-close");
let userName = document.querySelector(".input-user-name");
let userMail = document.querySelector(".input-user-email");
let userMessage = document.querySelector(".user-message");

var isStorageSupport = true;
var storageMail = "";

try {
  storageMail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupForm.classList.add("modal-show");

  if (storageMail) {
    userMail.value = storageMail;
    userMessage.focus();
  } else {
    userName.focus();
  }

});

closeForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
  popupForm.classList.remove("close-btn-error");
  userMail.classList.remove("form-error");
  userName.classList.remove("form-error");
});

feedbackForm.addEventListener("submit", function(evt) {
  if (!userName.value || !userMail.value) {
    evt.preventDefault();
    popupForm.classList.remove("close-btn-error");
    popupForm.offsetWidth = popupForm.offsetWidth;
    popupForm.classList.add("close-btn-error");
    if (!userName.value) {
      userName.classList.add("form-error");
    } else {
      userName.classList.remove("form-error");
    }
    if (!userMail.value) {
      userMail.classList.add("form-error");
    } else {
      userMail.classList.remove("form-error");
    }
  } else {
    localStorage.setItem("email", userMail.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupForm.classList.contains("modal-show")) {
      evt.preventDefault();
      popupForm.classList.remove("modal-show");
      popupForm.classList.remove("close-btn-error");
      userMail.classList.remove("form-error");
      userName.classList.remove("form-error");
    }
  }
});
