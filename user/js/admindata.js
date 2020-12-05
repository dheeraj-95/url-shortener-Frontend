getlinks()
getusers()

async function getlinks() {
    let response = await fetch('https://urlshortener-backend-heroku.herokuapp.com/getlinks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    document.getElementById('links').innerHTML = res.length
}

async function getusers() {
    let response = await fetch('https://urlshortener-backend-heroku.herokuapp.com/getusers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    document.getElementById('users').innerHTML = res.length -1
}