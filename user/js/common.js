document.getElementById('bitly').addEventListener('click', () => {
    window.location.href = "./home.html";
});

document.getElementById('myLinks').addEventListener('click', () => {
    window.location.href = "./myLinks.html";
});

document.getElementById('LogOut').addEventListener('click', () => {
    logout()
});

checklogin();

async function checklogin() {
    let response = await fetch('https://urlshortener-backend-heroku.herokuapp.com/checklogin', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json()
    if (res.type_ != 'success') {
        custom_alert('danger' , 'Unauthorized Login..');
        setTimeout(() => {
            window.location.href = "../index.html"
        }, 800);
    }else{
        const username = window.localStorage.getItem("user");
        document.getElementById('username').innerHTML = username.split('@')[0]
    }
}


async function logout() {
    let response = await fetch('https://urlshortener-backend-heroku.herokuapp.com/logout', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json()
    custom_alert(res.type_,res.message);
    setTimeout(() => {
        window.localStorage.removeItem("user");
        window.location.href = "../index.html"
    }, 3000);
}

function custom_alert(type, message) {
    let newAlert = $("#message");
    if (type === 'success') {
        newAlert.html(`
        <div class="fade-in text-center m-0 alert alert-${type} fade show" role="alert">
            <i class="fa fa-check-circle alert-success" aria-hidden="true"></i> ${message}
        </div>`);
    } else if (type === 'warning') {
        newAlert.html(`
        <div class="fade-in text-center m-0 alert alert-${type} fade show" role="alert">
            <i class="fa fa-exclamation-circle alert-warning" aria-hidden="true"></i> ${message}
        </div>`);
    } else {
        newAlert.html(`
        <div class="fade-in text-center m-0 alert alert-${type} fade show" role="alert">
            <i class="fa fa-times-circle alert-danger" aria-hidden="true"></i> ${message}
        </div>`);
    }

    setTimeout(() => {
        newAlert.html("");
    }, 3000);
}

const mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    if (result) {
        custom_alert("success", "Copied To Clipboard..");
    }
}