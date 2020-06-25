const modals = document.getElementsByClassName("modal");
const modalTriggers = document.getElementsByClassName("modal-trigger");
const triggerArray = Array.from(modalTriggers).entries();
const modalClose = document.getElementsByClassName("closeBtn");
const openModal = document.getElementsByClassName("modal-open");
const element = document.documentElement;

for (let [index, trigger] of triggerArray) {
  //   let triggerIndex = index;
  toggleModal = () => {
    modals[index].classList.toggle("modal-open");
    // document.querySelector("body").style.overflow = 'hidden';
  };

  trigger.addEventListener("click", toggleModal);
  modalClose[index].addEventListener("click", toggleModal);

  window.addEventListener("click", (event) => {
    if (event.target.closest(".modal")) {
      modals[index].classList.remove("modal-open");
      // console.log("haha");
    // document.querySelector("body").style.overflow = 'visible';
    }
  })

  window.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
      modals[index].classList.remove("modal-open");
    }
  });
}