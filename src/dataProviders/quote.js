import axios from 'axios';

export async function getQuote(id) {
    try {
      const res = await axios.get('https://dummyjson.com/quotes/random');
      return res.data;
    }
    catch (e) {
      console.error('I forgot what to say...', e);
      return null;
    }
  }