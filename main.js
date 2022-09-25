const submitBtn = document.querySelector(".submit-btn");
const input = document.querySelectorAll("input");
const errorMsg = document.querySelectorAll(".error-message");
const wrongEmail = document.querySelector(".wrong-email");

const regex = /(.+)@(.+){2,}\.(.+){2,}/

submitBtn.addEventListener("click", function() {
    if (input[0].value == "") {
        errorMsg[0].classList.add("toggle-error");
        input[0].classList.add("error-border"); 
    } else {
        errorMsg[0].classList.remove("toggle-error");
        input[0].classList.remove("error-border");
    };

    if (input[1].value == "") {
        errorMsg[1].classList.add("toggle-error");
        input[1].classList.add("error-border");
    } else {
        errorMsg[1].classList.remove("toggle-error");
        input[1].classList.remove("error-border");
    };

    if (input[2].value == "") {
        errorMsg[2].classList.add("toggle-error"),
        wrongEmail.classList.remove("toggle-error");
        input[2].classList.add("error-border");

    } else if (!input[2].value.match(regex)) {
        wrongEmail.classList.add("toggle-error"),
        errorMsg[2].classList.remove("toggle-error");
    } else {
        errorMsg[2].classList.remove("toggle-error"),
        wrongEmail.classList.remove("toggle-error");
        input[2].classList.remove("error-border");
    
    };

    if (input[3].value == "") {
        errorMsg[3].classList.add("toggle-error");
        input[3].classList.add("error-border");
    } else {
        errorMsg[3].classList.remove("toggle-error");
        input[3].classList.remove("error-border");
    }
    
})