const form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    validate();
});

function showError(input, message) {
    const field = input.parentElement;
    const small = field.querySelector(".error");
    small.innerText = message;
}

function clearError(input) {
    const field = input.parentElement;
    const small = field.querySelector(".error");
    small.innerText = "";
}

function validate() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const age = document.getElementById("age");
    const phone = document.getElementById("phone");

    if (name.value === "") showError(name, "Name is required");
    else clearError(name);

    if (!email.value.includes("@")) showError(email, "Enter valid email");
    else clearError(email);

    if (password.value.length < 6) showError(password, "Min 6 characters");
    else clearError(password);

    if (age.value === "" || age.value < 10) showError(age, "Enter valid age");
    else clearError(age);

    if (phone.value.length < 10) showError(phone, "Invalid phone number");
    else clearError(phone);
}
