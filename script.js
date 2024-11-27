// script.js

// Handle Patient Registration Form Submission
const patientForm = document.getElementById("patientForm");
if (patientForm) {
    patientForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const patientName = document.getElementById("patientName").value;
        const patientAge = document.getElementById("patientAge").value;

        if (patientName && patientAge) {
            alert(`Patient Registered:\nName: ${patientName}\nAge: ${patientAge}`);
            patientForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
}

// Handle Appointment Scheduling Form Submission
const appointmentForm = document.getElementById("appointmentForm");
if (appointmentForm) {
    appointmentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const appointmentName = document.getElementById("appointmentName").value;
        const appointmentDate = document.getElementById("appointmentDate").value;

        if (appointmentName && appointmentDate) {
            alert(`Appointment Scheduled:\nName: ${appointmentName}\nDate: ${appointmentDate}`);
            appointmentForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
}

// Smooth Scrolling for Anchor Links (if using IDs on the same page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// random img
// const imageUrls = [
//     'https://via.placeholder.com/800x400?text=Hospital+1',
//     'https://via.placeholder.com/800x400?text=Hospital+2',
//     'https://via.placeholder.com/800x400?text=Hospital+3',
//     'https://via.placeholder.com/800x400?text=Hospital+4'
// ];

// // Select a random image from the array
// const randomIndex = Math.floor(Math.random() * imageUrls.length);
// const randomImage = imageUrls[randomIndex];

// // Set the selected image as the source of the img element
// document.getElementById('randomImage').src = randomImage;