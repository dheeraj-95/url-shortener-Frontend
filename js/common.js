document.getElementById('Login').addEventListener('click', () => {
    window.location.href = "../index.html";
});

document.getElementById('SignUp').addEventListener('click', () => {
    window.location.href = "../signup.html";
});

document.getElementById('admin').addEventListener('click', () => {
    window.location.href = "../admin.html";
});

if(!navigator.cookieEnabled){
    let newAlert = $("#message");
    message = 'This site uses cookies in order to ensure secure login and logout. Please enable cookies in your browser and comeback..'
    newAlert.html(`
        <div class="fade-in text-center m-0 alert alert-warning fade show" role="alert">
            <i class="fa fa-exclamation-circle alert-warning" aria-hidden="true"></i> ${message}
        </div>`);
}