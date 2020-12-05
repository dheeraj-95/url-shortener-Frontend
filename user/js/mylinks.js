const user = window.localStorage.getItem('user');
const result_div = document.getElementById('result_');


myLinks()
async function myLinks() {
    let data = {
        user: user
    }
    let response = await fetch('https://urlshortener-backend-heroku.herokuapp.com/MyLinks', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json()
    displayResult(res)
}

function displayResult(data) {
    let dataArray = data.result
    result_div.innerHTML = ''
    dataArray.forEach(link => {
        const card = document.createElement('div');
        card.className = 'card fade-in p-0 links-card col-lg-6'
        card.innerHTML = (`
            <div class="short-link row p-2 m-0 text-center">
                <div class="col-lg-6  col-sm-12">
                    <span class="description">
                        Shortened Url
                    </span><br>
                    <small>
                        <a href="https://urlshortener-backend-heroku.herokuapp.com/fy/${link.shortLink}">
                        urlshortener-backend-heroku.herokuapp.com/fy/${link.shortLink}                
                        </a>
                    </small>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <span class="description">
                    Shortened On 
                    </span><br>
                    <span style="color:hsl(300, 24%, 80%)">
                        <small>${link.issuedOn}</small>
                    </span>
                </div>
            </div>
            <div class="long-link p-0 col">
                <div class="description text-center col-sm-12">
                    long Url
                </div>
                <div class="col-sm-12 px-0 text-center">
                    <a href="${link.longLink}"><small id="long">${link.longLink}</small></a>
                </div>
            </div>
            <div class="col btns col-sm-12 p-0">
                <div class="my-links-btns row m-0">
                    <div class="col-sm-6 p-0">
                        <button type="button" onclick="copy('${link.longLink}')"  class="btn btn-block">Copy Long Url &nbsp; <i class="fa fa-copy" aria-hidden="true"></i></button>
                    </div>
                    <div class="col-sm-6 p-0">
                        <button type="button"  onclick="copy('urlshortener-backend-heroku.herokuapp.com/fy/${link.shortLink}')" class="btn btn-block">Copy Url &nbsp; <i class="fa fa-copy" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        `)
        result_div.appendChild(card)
    })
}