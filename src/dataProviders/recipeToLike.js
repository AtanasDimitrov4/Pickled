import axios from "axios";

export async function getThisRecipe(id){
    try {
        const res = await axios.get(`http://api.punkapi.com/v2/beers/${id}`);
        return res.data;
      } catch (e) {
        console.error('There is an empty plate on the table', e);
        return null;
      }
  }
