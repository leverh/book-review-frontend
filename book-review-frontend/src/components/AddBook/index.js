import React, { useState } from 'react';
import './styles.css';
import API_BASE_URL from '../../config';

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn_number: "",
    summary: "",
    cover_image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setBook(prevState => ({
        ...prevState,
        cover_image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('title', book.title);
    formData.append('author', book.author);
    formData.append('isbn_number', book.isbn_number);
    formData.append('summary', book.summary);
    if (book.cover_image) {
        formData.append('cover_image', book.cover_image);
    }

    fetch(`${API_BASE_URL}books/`, {
      method: 'POST',
      body: formData,
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
          <input type="text" name="title" value={book.title} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Author: </label>
          <input type="text" name="author" value={book.author} onChange={handleInputChange} required />
        </div>
        <div>
          <label>ISBN Number: </label>
          <input type="text" name="isbn_number" value={book.isbn_number} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Summary: </label>
          <textarea name="summary" value={book.summary} onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label>Cover Image: </label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBook;
