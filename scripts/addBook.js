import fetchData from "./retrieveData";

function addBookData() {
    const inputTitle = document.getElementById('title').value;
    const inputPages = document.getElementById('pages').value;
    const inputAuthor = document.getElementById('author').value;
    const inputLoanStatus = document.getElementById('loan-status').checked;

    if (inputTitle !== '' && inputPages !== '' && inputAuthor !== '') {
        let book = {
            author: inputAuthor,
            pages: inputPages,
            title: inputTitle,
            isLoaned: inputLoanStatus
        }

        fetch('http://localhost:4444/library', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
          })
          .then(response => response.json())
          .then(data => console.log('Server response:', data))
          .catch(error => console.error('Error:', error));
        
          fetchData();
    }
}

export {addBookData}