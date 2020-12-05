let form = document.getElementById('signup-Form');
const btn = document.getElementById('signupbtn')

function signup() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmpassword = document.getElementById('confirmpassword').value

    if (!email || !password || !confirmpassword) {
        custom_alert('warning', 'Please fill all the fields...')
        btn.innerHTML = 'Fill All the fields...'
        setTimeout(() => {
            btn.innerHTML = 'Sign Up'
        }, 3500);
    } else {
        if (password != confirmpassword) {
            custom_alert('warning', "'Confirm Password' field must match 'Password' field ...")
            btn.innerHTML = 'Try again...'
            setTimeout(() => {
                btn.innerHTML = 'Sign Up'
            }, 3500);
        } else {
            register(email, password)
        }
    }
}

async function register(email, password) {
    btn.innerHTML = 'Loading...'
    let data = {
        email: email,
        password: password
    }
    let response = await fetch('https://urlshortener-backend-heroku.herokuapp.com/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json();
    custom_alert(res.type_, res.message);
    if (res.type_ == 'success') {
        btn.innerHTML = 'Check your inbox..'
        btn.style.backgroundColor = 'green'
        btn.disabled = true
        setTimeout(() => {
            btn.innerHTML = 'Sign Up'
            form.reset()
            window.location.href = './index.html';
            btn.disabled = false
        }, 3500);
    } else {
        btn.innerHTML = 'Sign Up'
    }
}