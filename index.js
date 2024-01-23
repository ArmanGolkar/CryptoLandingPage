const toggler= document.querySelector(".toggler")
const navMenu = document.querySelector("#navMenu")

toggler.addEventListener('click',()=>{
    navMenu.classList.toggle("active")
})

const scroll=document.getElementById("scroll")
scroll.addEventListener('click',() =>{
    document.querySelector(".get-started").scrollIntoView({behavior: 'smooth'})
})


fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')
    .then(res => res.json())
    .then(json => {
        const container = document.querySelector('.Price-container');
        const coins = Object.getOwnPropertyNames(json);
        var containerHtml= ``

        for (let coin of coins) {
            const coinInfo = json[`${coin}`];
            console.log(coinInfo)
            const price = coinInfo.usd;
            const change = coinInfo.usd_24h_change.toFixed(5);
            

            containerHtml+= `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="images/${coin}.png">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>/USD</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
        `;
        }
        container.innerHTML=containerHtml
    });
