// Selectors
const pass = document.querySelector("#password");
const confpass = document.querySelector("#confirm_password");
const button = document.querySelector("button");
const wrongtext = document.querySelector(".wrongpassword")

// Even Listener

button.addEventListener('click', checkPassword);

//Function

function checkPassword() {
    if (pass.value == confpass.value) {
        console.log("Match!")
        pass.classList.remove("wrong");
        confpass.classList.remove("wrong");
        wrongtext.setAttribute("style", "display:none");
    } else {
        console.log("No match")
        pass.className = "wrong";
        confpass.className = "wrong";
        wrongtext.getAttribute("display");
        wrongtext.removeAttribute("style");

    };
};