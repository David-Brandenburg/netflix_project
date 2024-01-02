const firstImg = document.getElementById("first_img_carousel");
const secondImg = document.getElementById("sec_img_carousel");
const thirdImg = document.getElementById("third_img_carousel");
const fourImg = document.getElementById("four_img_carousel");
const fiveImg = document.getElementById("five_img_carousel");
const sixImg = document.getElementById("six_img_carousel");
const sevenImg = document.getElementById("seven_img_carousel");
const eightImg = document.getElementById("eight_img_carousel");
const nineImg = document.getElementById("nine_img_carousel");
const tenImg = document.getElementById("ten_img_carousel");

const TopTen = [
  {
    Title: "Silver and the Book of Dreams",
    Year: "2023",
    imdbID: "tt22037984",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTFiNWRjYjMtZjk1NC00NDk5LTkwYTUtZmI1ZTc4YmU3YWJjXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Sorcerer's Stone (2001)",
    Year: "2001",
    imdbID: "tt0241527",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU3MWYzNzEtZmYwNS00ZjhjLTljMTQtYzk5NTk1ZTJkYTZjXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
    Title: "Candy Cane Lane",
    Type: "movie",
    Year: "2023",
    imdbID: "tt21328106",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg",
    Title: "Harry Potter and the Chamber of Secrets",
    Type: "movie",
    Year: "2002",
    imdbID: "tt0295297",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjU0OTcwMTItMzQ1NS00YWU5LWFhM2QtMDZjZDM3Y2RiNzcyXkEyXkFqcGdeQXVyNDc1MjYwOTE@._V1_SX300.jpg",
    Title: "Till Death",
    Type: "movie",
    Year: "2021",
    imdbID: "tt11804152",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
    Title: "Harry Potter and the Prisoner of Azkaban",
    Type: "movie",
    Year: "2004",
    imdbID: "tt0304141",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGZkMWQ2MzMtYTkxYS00OThmLWI0ZTQtNmY0ZTkyY2E4MjliXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "National Lampoon's Christmas Vacation",
    Type: "movie",
    Year: "1989",
    imdbID: "tt0097958",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
    Title: "Harry Potter and the Goblet of Fire",
    Type: "movie",
    Year: "2005",
    imdbID: "tt0330373",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    Title: "Harry Potter and the Order of the Phoenix",
    Type: "movie",
    Year: "2007",
    imdbID: "tt0373889",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    Title: "Harry Potter and the Half-Blood Prince",
    Type: "movie",
    Year: "2009",
    imdbID: "tt0417741",
  },
];

for (let i = 0; i < TopTen.length; i++) {
  const movie = TopTen[i];
  console.log(movie);

  // Assign the source to the corresponding image element based on the loop index
  if (i === 0) {
    firstImg.src = movie.Poster;
  } else if (i === 1) {
    secondImg.src = movie.Poster;
  } else if (i === 2) {
    thirdImg.src = movie.Poster;
  } else if (i === 3) {
    fourImg.src = movie.Poster;
  } else if (i === 4) {
    fiveImg.src = movie.Poster;
  } else if (i === 5) {
    sixImg.src = movie.Poster;
  } else if (i === 6) {
    sevenImg.src = movie.Poster;
  } else if (i === 7) {
    eightImg.src = movie.Poster;
  } else if (i === 8) {
    nineImg.src = movie.Poster;
  } else if (i === 9) {
    tenImg.src = movie.Poster;
  }
}
