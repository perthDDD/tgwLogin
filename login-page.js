const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "234QEmCfXK" && password === "p1DGk7tBFj") {
        alert("You have successfully logged in.");
        window.open("https://www.notion.so/funkywave-217/TGW-EDU-4f97829ceeb84dfbb54c8a6af67f2f91?pvs=4");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
