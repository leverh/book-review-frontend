import React, { useState, useEffect } from 'react';
import './styles.css';
import API_BASE_URL from '../../config';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}books/`)
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch((error) => console.error("There was an error fetching the books", error));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn_number}</p>
            <p>Summary: {book.summary}</p>
            {book.cover_image && <img src={book.cover_image} alt={book.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;