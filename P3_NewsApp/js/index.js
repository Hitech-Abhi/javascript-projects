console.log('Welcome to Project 3');

//Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '642cc6e2c31f45a9a8f0a37963ca306e'

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();

//open the object
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach (function(element, index) {
            let news =`<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                <b>Breaking News ${index+1}:</b> &nbsp ${element["title"]}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse"
                                aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                                <div class="accordion-body">${element["content"]}.<a href = "${element['url']}" target ="_blank">Read More</a></div>
                            </div>
                        </div>`
            
            newsHtml += news;
            
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("Some error occured");
    }
}

xhr.send();

