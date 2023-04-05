const button = document.querySelector("#js-new-quote");

button.addEventListener('click', getQuote) 

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQuote(){

 //console.log ("It Works!");

 try {

        const response = await fetch (endpoint);
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json()

        displayQuote(json.message);

 }
 catch (err) {

    console.log(err);
    alert('Failed to fetch new trial');

 }

}

function displayQuote(quote) {

    const quoteText = document.querySelector("#js-quote-text")
    quoteText.textContent = quote;


}

getQuote();



