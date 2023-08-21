import React, { useState, useEffect } from 'react';
import './styles.css';


function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from my API
    fetch('YOUR_BACKEND_API_URL/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []); // The empty array means this useEffect will run once when the component mounts

  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.review}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
