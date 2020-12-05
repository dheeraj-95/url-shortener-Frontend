const form = document.getElementById('reset-form');
const resetbtn = document.getElementById('resetbtn');

function resetPassword() {
    const email = document.getElementById('email').value;
    resetbtn.innerHTML = 'Loading...'
    if (!email) {
        custom_alert('warning', 'Please fill email field...')
        resetbtn.innerHTML = 'Send Verification'
    } else {
        sendVerification(email)
    }
}

async function sendVerification(email) {
    let data = {
        email: email
    }
    let response = await fetch('https://urlshortener-backend-heroku.herokuapp.com/resetpassword', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    custom_alert(res.type_, res.message);
    if (res.type_ == 'success') {
        resetbtn.innerHTML = 'Check your Inbox..'
    } else {
        resetbtn.innerHTML = 'Send Reset Link'
    }
}