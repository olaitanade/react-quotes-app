import React, {useState, useEffect} from 'react';
import './home.css';
import {
    getAuthors,
    getQuoteById,
    getQuotesByAuthor,
    getRandomQuote
  } from '../feature/services/quoteservice';

function Home() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en');
  const [authorName, setAuthorName] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [quote, setQuote] = useState({text:"",author:""});
  const [author, setAuthor] = useState({name:"",uuid:""});

  useEffect(() => {
    randomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const randomQuote = () => {
    getRandomQuote(language)
      .then((response) => response.json())
      .then((json) => {
          setQuote(json)
          setLoading(false)
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('random quote called'));
  };

  const searchAuthor = () => {
    getAuthors(authorName)
      .then((response) => response.json())
      .then((json) => {
          setAuthors(json)
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('search author called'));
  };

  const quotesByAuthor = (anAuthor) => {
    setAuthor(anAuthor)
    getQuotesByAuthor(anAuthor.uuid)
      .then((response) => response.json())
      .then((json) => {
          setQuotes(json)
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('search author called'));
  };

  const mainview = () => {
    return (
        <div className="Home">
            <div>
                <h1>Random Quotes</h1>
                <label>
              Pick your language:
              <select value={language} onChange={(event)=>setLanguage(event.target.value)}>
                <option value="en">English</option>
                <option value="ru">Russia</option>
              </select>
            </label>
                <p>Author: {quote.author}</p>
                <p>{quote.text}</p>
                <button onClick={randomQuote}>
                    Get Random Quote
                </button>
            </div>
            <br/>
            <hr/>
            <br/>
            <div>
                <label>
                Auther Name Search:
                <input type="text" value={authorName} onChange={(e)=>setAuthorName(e.target.value)} />
                </label>
                <button onClick={searchAuthor}>
                    Search Author
                </button>
            </div>
            <div>
                <ul>
                    <h2 className='list-head'>Available Authors</h2>
                    {authors.map((anAuthor) => {
                        return (
                        <li key={anAuthor.uuid} className='list'>
                            <span className='repo-text'>{anAuthor.name} </span>
                            <button onClick={()=>quotesByAuthor(anAuthor)}>
                                Get Quotes
                            </button>
                        </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    <h2 className='list-head'>Author {author.name}'s Quotes</h2>
                    {quotes.map((aQuote) => {
                        return (
                        <li key={aQuote.uuid} className='list'>
                            <span className='repo-text'>{aQuote.text} </span>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>
      );
  }

  return ((loading)? "Loading":mainview())
  
}

export default Home;