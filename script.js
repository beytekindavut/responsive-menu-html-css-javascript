
const menu = document.getElementById('menu');

const overlay = document.getElementById('overlay')

const openBtn = document.getElementById("openMenu");

const closeBtn = document.getElementById("closeMenu");

const content = document.getElementById("mainContent");


function openMenu(){

  menu.classList.add('show');

  overlay.classList.add('active');

  content.classList.add('blur');

}



function closeMenu(){

    menu.classList.remove('show');

    overlay.classList.remove('active');

    content.classList.remove('blur');


}


openBtn.addEventListener('click',openMenu);

closeBtn.addEventListener('click',closeMenu);


overlay.addEventListener('click',closeMenu);
