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
          const ArrayTiltes = jsonData.Search;
          console.log(jsonData.search);
          for (let i = 0; i < ArrayTiltes.length; i++) {
            const searchTitle = ArrayTiltes[i];
            console.log(searchTitle);
            const imgKachel = document.getElementById("first_img");
            imgKachel.src = searchTitle.Poster;
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
