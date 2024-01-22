function fetchData() {
    return fetch("http://localhost:4444/library")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error:", error));
  };

  export default fetchData;