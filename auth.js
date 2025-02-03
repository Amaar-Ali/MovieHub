document.getElementById("login-btn").addEventListener("click", function () {
    const password = document.getElementById("password").value;
    if (password === "1511") {
        localStorage.setItem("authenticated", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect Password. Try again.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("authenticated")) {
        window.location.href = "index.html";
    }
});
