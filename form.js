// form.js
let username = document.getElementById("user");
let password = document.getElementById("pass");
let uerror = document.getElementById("usererror");
let perror = document.getElementById("passerror");

function validateform() {
    let f = true; 

    if (username.value === "") {
        uerror.innerHTML = "Username should not be empty";
        f = false;
    } else if (username.value.length < 3) {
        uerror.innerHTML = "Username should be greater than 3 characters";
        f = false;
    } else {
        uerror.innerHTML = "";
    }

    if (password.value === "") {
        perror.innerHTML = "Password should not be empty";
        f = false;
    } else if (password.value.length < 5) {
        perror.innerHTML = "Password should be greater than 5 characters";
        f = false;
    } else {
        perror.innerHTML = "";
    }

    return f; 
}
