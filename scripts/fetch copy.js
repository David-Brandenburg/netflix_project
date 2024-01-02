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
          console.log(ArrayTitles);

          const imgKachel = document.getElementsByClassName("card-img-top");
          const titlePoster = document.getElementsByClassName("title_poster");
          const moreInfoArry = [];
          for (let i = 0; i < ArrayTitles.length; i++) {
            const searchTitle = ArrayTitles[i];
            console.log(searchTitle);
            const moreInfoTitle = searchTitle.Title;

            const url2 = `http://www.omdbapi.com/?apikey=${apikey}&t=${moreInfoTitle}`;
            fetch(url2)
              .then((data2) => {
                return data2.json();
              })
              .then((jsonData2) => {
                console.log(jsonData2);

                moreInfoArry.push(jsonData2);
                console.log(moreInfoArry);

                localStorage.setItem("titleInfo", JSON.stringify(moreInfoArry));
              });

            localStorage.setItem("search", JSON.stringify(searchTitle));

            // Hier wird sichergestellt, dass das entsprechende Bild ausgewählt wird
            const imgCard = imgKachel[i];
            console.log(imgCard);

            imgCard.src = searchTitle.Poster;

            const title = titlePoster[i];

            title.innerText = searchTitle.Title;
            console.log(title);
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
