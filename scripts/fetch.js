// Import the apikey from the appropriate location
import apikey from "./apikey.js";

document.addEventListener("DOMContentLoaded", function () {
  function submitForm() {
    let searchTerm = document.getElementById("search").value;

    if (searchTerm.trim() !== "") {
      const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`;

      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((jsonData) => {
          console.log(jsonData);
          // Handle the data as needed
          const ArrayTitles = jsonData.Search;
          console.log(jsonData.Search);

          const imgKachel = document.getElementsByClassName("card-img-top");
          const titleKachel = document.getElementsByClassName("card-title");

          for (let i = 0; i < ArrayTitles.length; i++) {
            const searchTitle = ArrayTitles[i];
            console.log(searchTitle);

            // Hier wird sichergestellt, dass das entsprechende Bild ausgewählt wird
            const imgCard = imgKachel[i];
            console.log(imgCard);

            imgCard.src = searchTitle.Poster;

            const titleCard = titleKachel[i];
            console.log(titleCard);

            titleCard.innerText = searchTitle.Title;
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      alert("Please enter a search term.");
    }
  }

  let searchButton = document.getElementById("searchButton");

  if (searchButton) {
    searchButton.onclick = submitForm;
  } else {
    console.error("Element with ID 'searchButton' not found.");
  }
});
