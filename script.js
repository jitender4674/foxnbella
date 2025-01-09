'use strict';

const servicesBtn = document.getElementById('services-btn');
const servicesWindow = document.getElementById('servicesContainer');
const bookAppointmentBtn = document.getElementById('book-appointment-btn');

const bookAppointmentWindow = document.getElementById('book-appointment-container');






// -------------------------------------------------------
servicesBtn.addEventListener('mouseenter', () => {
    if (servicesWindow.classList.contains('hidden')) {
        servicesWindow.classList.remove('hidden');
    } else {
        servicesWindow.classList.add('hidden')
    }
});
servicesBtn.addEventListener('click', () => {
    if (servicesWindow.classList.contains('hidden')) {
        servicesWindow.classList.remove('hidden');
    } else {
        servicesWindow.classList.add('hidden')
    }
});
servicesWindow.addEventListener('mouseleave', () => {
    servicesWindow.classList.add('hidden');
});




bookAppointmentBtn.addEventListener('mouseenter', () => {
    bookAppointmentWindow.classList.remove('hidden');
});

bookAppointmentBtn.addEventListener('mouseleave', () => {
    bookAppointmentWindow.classList.add('hidden');
})

bookAppointmentBtn.addEventListener('click', () => {
    if (bookAppointmentWindow.classList.contains('hidden')) {
        bookAppointmentWindow.classList.remove('hidden');
    } else {
        bookAppointmentWindow.classList.add('hidden');
    }
});
