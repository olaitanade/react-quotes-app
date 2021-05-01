
export async function getRandomQuote(language = "en") {
    try {
      // eslint-disable-next-line no-undef
    
      let response = await fetch("https://api.fisenko.net/quotes?l=" + language, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function getQuoteById(id) {
    try {
      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 5000);
      let response = await fetch("https://api.fisenko.net/quotes/" + id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      });
      clearTimeout(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function getAuthors(query="a") {
    try {
      // eslint-disable-next-line no-undef
      let response = await fetch("https://api.fisenko.net/quotes/authors?q=" + query, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function getQuotesByAuthor(id="4PO19Pf6DR") {
    try {
      // eslint-disable-next-line no-undef
    
      let response = await fetch("https://api.fisenko.net/quotes/author/"+id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }