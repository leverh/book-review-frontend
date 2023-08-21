import React, { useState } from 'react';
import './styles.css';


function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', review: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post the book data to my backend API
    fetch('YOUR_BACKEND_API_URL/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="add-book">
      <form onSubmit={handleSubmit}>
        {/* Add input fields for title, author, and review */}
        {/* Use the book state to bind the values */}
        {/* Add a submit button */}
      </form>
    </div>
  );
}

export default AddBook;
