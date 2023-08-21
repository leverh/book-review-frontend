import React, { useState } from 'react';
import './styles.css';
import API_BASE_URL from '../../config';


function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}books/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        author: author
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Book added:', data);
    })
    .catch((error) => console.error("There was an error adding the book", error));
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author: </label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBook;