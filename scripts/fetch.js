// Import the apikey from the appropriate location
import apikey from "./apikey.js";

document.addEventListener("DOMContentLoaded", function () {
  function submitForm() {
    let searchTerm = document.getElementById("search").value;

    if (searchTerm.trim() !== "") {
      const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`;
      const infoData = [];
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((jsonData) => {
          console.log(jsonData);
          // Handle the data as needed
          const ArrayTitles = jsonData.Search;
          console.log(ArrayTitles);
          for (let i = 0; i < ArrayTitles.length; i++) {
            const Title = ArrayTitles[i].imdbID;
            console.log(Title);

            const url2 = `http://www.omdbapi.com/?apikey=${apikey}&i=${Title}`;

            fetch(url2)
              .then((data2) => {
                return data2.json();
              })
              .then((jsonData2) => {
                console.log(jsonData2);
                infoData.push(jsonData2);
                console.log(infoData);

                const imgKachel =
                  document.getElementsByClassName("card-img-top");
                const titlePoster =
                  document.getElementsByClassName("title_poster");

                const description = document.getElementsByClassName("descrip");
                const Titledescription =
                  document.getElementsByClassName("title_info");
                const stars = document.getElementsByClassName("stars");
                const year = document.getElementsByClassName("release");
                const run = document.getElementsByClassName("run_time");
                const PG = document.getElementsByClassName("Rated");

                for (let j = 0; j < infoData.length; j++) {
                  const Movie = infoData[j];
                  console.log(Movie);

                  localStorage.setItem("search", JSON.stringify(Movie));

                  const imgCard = imgKachel[j];
                  console.log(imgCard);

                  imgCard.src = Movie.Poster;

                  const title = titlePoster[j];

                  title.innerText = Movie.Title;
                  console.log(title);

                  const Tdesc = Titledescription[j];
                  Tdesc.innerText = Movie.Title;
                  Tdesc.style.color = "white";

                  const starsCount = stars[j];
                  starsCount.innerText = `${Movie.imdbRating} Stars`;
                  starsCount.style.color = "white";

                  const release = year[j];
                  release.innerText = Movie.Year;
                  release.style.color = "#aaaaaa";

                  const runTime = run[j];
                  runTime.innerText = Movie.Runtime;
                  runTime.style.color = "#aaaaaa";

                  const USK = PG[j];
                  USK.innerText = Movie.Rated;
                  USK.style.color = "#aaaaaa";

                  const des = description[j];
                  des.innerText = Movie.Plot;
                  des.style.color = "#aaaaaa";
                  console.log(des);
                }
              });
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
