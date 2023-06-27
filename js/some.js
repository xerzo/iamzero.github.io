fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
    .then(quote => { 
    document.querySelector('#anime').innerText = quote.anime
    document.querySelector('#char').innerText = quote.character
    document.querySelector('#qoute').innerText = quote.quote
    
    })
