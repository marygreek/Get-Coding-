document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    console.log("Connected!");
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        window.location.href = "Home.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const NewUserForm = document.getElementById("NewUser-form");
    console.log("Connected!");
    
    NewUserForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        window.location.href = "NewUserIntro.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const NewUserIntro = document.getElementById("NewUserIntro");
    console.log("Connected!");
    
    NewUserIntro.addEventListener("submit", function (event) {
        event.preventDefault(); 
        window.location.href = "Autoandtransportwiz.html";
    });
});