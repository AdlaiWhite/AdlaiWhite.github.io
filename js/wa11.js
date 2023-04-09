const button = document.querySelector("#js-new-quote");

button.addEventListener('click', getQuote) 

button.addEventListener('click', getImage) 

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQuote(){
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

const endpoint2 = "https://api.catboys.com/img";

async function getImage(){
    try {
   
           const response = await fetch (endpoint2);
           if (!response.ok){
               throw Error(response.statusText)
           }
           const json = await response.json()
   
           displayImage(json.url);
    }
    catch (err) {
   
       console.log(err);
       alert('Failed to fetch new trial');
   
    }
}

   function displayImage(image) {

    const quoteText = document.querySelector("#js-image")
    quoteText.style = image;

    var img = document.createElement('img');
    img.src = image;
    document.getElementById('js-image').appendChild(img);

}

getImage();