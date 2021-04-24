const menuToggle = document.querySelector('.toggle');
const navig = document.querySelector('.navig');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navig.classList.toggle('active');
}

