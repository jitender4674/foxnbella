"use strict";

// selecting elements
const dropMenu = document.getElementById('drop-menu-btn');
const menuWindow = document.getElementById('menuWindow');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
// console.log(nav);


// menu reveal
dropMenu.addEventListener('click', () => {
    menuWindow.classList.remove('hidden');
})

// menu close
menuCloseBtn.addEventListener('click', () => {
    menuWindow.classList.add('hidden');
});

main.addEventListener('click', () => {
    if (!menuWindow.classList.contains('hidden')) {
        menuWindow.classList.add('hidden');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menuWindow.classList.add('hidden');
    }
})




