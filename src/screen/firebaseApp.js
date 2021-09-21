import React, {useState, useEffect} from 'react';
import './home.css';
import {
    getAuthors,
    getQuoteById,
    getQuotesByAuthor,
    getRandomQuote
  } from '../feature/services/quoteservice';

function FirebaseApp() {
  const [loading, setLoading] = useState(false);


  

  const mainview = () => {
    return (
        <div className="Home">
            
        </div>
      );
  }

  return ((loading)? "Loading":mainview())
  
}

export default FirebaseApp;