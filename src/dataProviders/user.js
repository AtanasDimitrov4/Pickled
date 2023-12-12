import axios from 'axios';

export async function createUser(body) {
  try {
    const res = await axios.post('https://dummyjson.com/users/add', body);
    console.log('createUser', res.data);
    return true;
  }
  catch (error) {
    console.error('Oops', error);
    return false;
  }
}