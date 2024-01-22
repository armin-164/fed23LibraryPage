import { createBook } from "./displayBooks";

function fetchData() {
  const bookContainer = document.querySelector(".books-container");
  bookContainer.innerHTML = "";
  fetch("http://localhost:4444/library")
    .then((response) => response.json())
    .then((data) => createBook(data))
    .catch((error) => console.error("Error:", error));
}

export default fetchData;
