const apiUrl = 'https://www.omdbapi.com/?apikey=e4db3ced&t=';
let finalUrl = "";

let inputField = document.getElementById("filmoPaieska");
let movieYear = document.getElementById("metai");
let movieGenre = document.getElementById("zanras");
let movieRuntime = document.getElementById("trukme");
let movieDirector = document.getElementById("rez");
let movieRating = document.getElementById("reitingas");
let moviePlot = document.getElementById("aprasymas");
let tableHead = document.getElementById("lenteles-pav");


const ieskoti = () => {
    let movieChoice = document.getElementById("filmoPaieska").value;
    finalUrl = apiUrl + "{" + movieChoice + "}";
    console.log(finalUrl);


const request = new XMLHttpRequest();
request.open('GET', finalUrl, true);

request.onload = function() {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
        for (let i in data) {
            if (data.Response === "False") {
                tableHead.innerHTML = "Tokio filmo nėra. Bandykite dar kartą"
                movieYear.innerHTML = "";
                movieGenre.innerHTML = "";
                movieRuntime.innerHTML = "";
                movieDirector.innerHTML = "";
                movieRating.innerHTML = "";
                moviePlot.innerHTML = "";
            } else {
               tableHead.innerHTML = "Filmo " + "\"" + data.Title + "\"" + " informacija:";
               movieYear.innerHTML = data.Year;
               movieGenre.innerHTML = data.Genre;
               movieRuntime.innerHTML = data.Runtime;
               movieDirector.innerHTML = data.Director;
               movieRating.innerHTML = data.imdbRating;
               moviePlot.innerHTML = data.Plot;
            }
        }
    } else {
        //Reached the server, but it returned an error
    }
}

request.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + finalUrl);
};

request.send();

} //ieskoti pabaiga

/* Funkcija, kuri suaktyvina paiešką, input laukelyje įrašius filmo pavadinimą ir paspaudus Enter.
Nebūtina pele paspausti mygtuką "Ieškoti"*/
inputField.addEventListener("keyup", function (event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("submit").click();
    }
})

//paspaudus pele mygtuką "Ieškoti", iškviečiama funkcija ieškoti, kuri ir suranda filmo informaciją
submit.addEventListener('click', ieskoti);







