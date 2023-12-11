import axios from "axios";

export async function getRecipe() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() -11; 
  
    const recipeOfDay = `${day}${month}`;
    try {
      const res = await axios.get(`http://api.punkapi.com/v2/beers/${recipeOfDay}`);
      return res.data;
    } catch (e) {
      console.error('There is an empty plate on the table', e);
      return null;
    }
}



