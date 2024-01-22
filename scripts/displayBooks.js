import fetchData from "./retrieveData";

function createBook(arr) {
  const bookContainer = document.querySelector(".books-container");

  arr.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList = "book-card";

    const bookTitle = document.createElement("span");
    bookTitle.innerText = book.title;

    const bookStatus = document.createElement("span");

    if (book.isLoaned) {
      bookStatus.innerText = "Available";
    } else {
      bookStatus.innerText = "Unavailable";
    }

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookStatus);

    bookContainer.appendChild(bookCard);
  });
}

async function displayData() {
  const myData = await fetchData();
  createBook(myData);
}

export { displayData };
