import { addBookData } from "./scripts/addBook";
import fetchData from "./scripts/retrieveData";
import './style.scss';

const submitBtn = document.querySelector('.add-book-btn');
submitBtn.addEventListener('click', addBookData)

fetchData();
