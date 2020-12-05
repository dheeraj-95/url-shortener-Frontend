const form = document.getElementById('reset-newpassword');
const btn = document.getElementById('resetPassBtn');

function resetpassword() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const ConfirmPassword = document.getElementById('confirmpassword').value;
    btn.innerHTML = 'Loading...'
    if (!email || !password || !ConfirmPassword) {
        custom_alert('warning', 'Please fill all the fields..')
        btn.innerHTML = 'Reset Password'
    } else if (ConfirmPassword != password) {
        custom_alert('warning', "'Confirm Password' field must match 'Password' field ...")
        btn.innerHTML = 'Reset Password'
    } else {
        UpdatePassword(email, password)
    }
}

async function UpdatePassword(email, password) {
    let data = {
        email: email,
        password: password
    }
    let response = await fetch('https://urlshortener-backend-heroku.herokuapp.com/newpassword', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    custom_alert(res.type_, res.message);
    if (res.type_ == 'success') {
        btn.innerHTML = 'Password Reset Successful..'
        btn.style.backgroundColor = 'green'
        btn.disabled = true
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 3500);
    } else {
        btn.innerHTML = 'Reset My Password'
    }
}