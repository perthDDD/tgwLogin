const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "galdsg1921as" && password === "hkda9vm12") {
        alert("You have successfully logged in.");
        window.location.href = "https://funky-wave-252.notion.site/TGW-EDU-4f97829ceeb84dfbb54c8a6af67f2f91";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
