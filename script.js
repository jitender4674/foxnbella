'use strict';

// nav buttons
const servicesBtn = document.getElementById('services-btn');
const servicesWindow = document.getElementById('servicesContainer');
const bookAppointmentBtn = document.getElementById('book-appointment-btn');
const bookAppointmentWindow = document.getElementById('book-appointment-container');

// section 1
const section1 = document.querySelector('.section-1');








// --------------------------------------------------
servicesBtn.addEventListener('click', () => {
    servicesWindow.classList.toggle('hidden');
    bookAppointmentWindow.classList.add('hidden');
});


bookAppointmentBtn.addEventListener('click', () => {
    bookAppointmentWindow.classList.toggle('hidden');
    servicesWindow.classList.add('hidden');
});


// section1 eventlistner
section1.addEventListener('click', () => {
    servicesWindow.classList.add('hidden');
    bookAppointmentWindow.classList.add('hidden');
})