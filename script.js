"use strict";

// selecting elements
const dropMenu = document.getElementById('drop-menu-btn');
const menuWindow = document.getElementById('menuWindow');
const menuCloseBtn = document.querySelector('.menu-close-btn');

// menu reveal
dropMenu.addEventListener('click', () => {
    menuWindow.classList.remove('hidden');
})

// menu close
menuCloseBtn.addEventListener('click', () => {
    menuWindow.classList.add('hidden');
});

// console.log(!menuWindow.classList.contains("hidden"))


