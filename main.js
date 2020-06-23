// var modal = document.getElementById('simpleModal');
// var modalBtn = document.getElementById('modalBtn');
// var closeBtn = document.getElementsByClassName('closeBtn')[0];

// modalBtn.addEventListener('click', openModal = () => {
//     // console.log(123);
//     modal.style.display = 'block';
// });

// closeBtn.addEventListener('click', closeModal = () => {
//     modal.style.display = 'none';
// })

// window.addEventListener('click', clickOutside = (e) => {
//     if (e.target == modal) {
//         modal.style.display = 'none';
//     }
// });

const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalClose = document.querySelectorAll('.closeBtn');

Array.from(modalTriggers).forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const modalName = trigger.dataset.modal;
        const modal = document.querySelector('.' + modalName);
        modal.classList.add('modal-open');
    });
});

Array.from(modalClose).forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('modal-open');
    });
});

