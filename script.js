'use strict';

const servicesBtn = document.getElementById('services-btn');
const servicesWindow = document.getElementById('servicesContainer');
const bookAppointmentBtn = document.getElementById('book-appointment-btn');

const bookAppointmentWindow = document.getElementById('book-appointment-container');






// -------------------------------------------------------
servicesBtn.addEventListener('mouseenter', () => {
    servicesWindow.classList.remove('hidden');
});

servicesWindow.addEventListener('mouseleave', () => {
    servicesWindow.classList.add('hidden');
});


bookAppointmentBtn.addEventListener('mouseenter', () => {
    bookAppointmentWindow.classList.remove('hidden');
});
bookAppointmentWindow.addEventListener('mouseleave', () => {
    bookAppointmentWindow.classList.add('hidden');
})
