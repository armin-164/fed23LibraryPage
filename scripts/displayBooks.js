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

    const learnMoreButton = document.createElement('button');
    learnMoreButton.innerText = 'Learn More';

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookStatus);
    bookCard.appendChild(learnMoreButton);

    bookContainer.appendChild(bookCard);
  });
}


export { createBook };
