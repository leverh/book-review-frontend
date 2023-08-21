import React, { useState, useEffect } from 'react';
import './styles.css';
import API_BASE_URL from '../../config';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchBooks() {
          try {
            const response = await axios.get(`${API_BASE_URL}/books/`);
              setBooks(response.data);
              setLoading(false);
          } catch (error) {
              console.error("Error fetching books:", error);
              setLoading(false);
          }
      }

      fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
      <div>
          {books.map(book => (
              <div key={book.id}>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
              </div>
          ))}
      </div>
  );
}

export default BookList;