import axios from 'axios';

export async function getVegetables() {
  try {
    const response = await axios.get('http://localhost:3001/vegetables');
    return response.data;
  } catch (error) {
    console.error('Error fetching vegetables:', error);
    return null;
  }
}