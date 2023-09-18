//This should check to make sure passwords match, not functional in form window yet

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const passwordField = document.getElementById("user_password");
    const confirmPasswordField = document.getElementById("confirm_password");

    form.addEventListener("submit", function (event) {
        if (passwordField.value !== confirmPasswordField.value) {
            event.preventDefault(); // Prevent form submission
            alert("Passwords do not match. Please try again.");
        }
    });
});