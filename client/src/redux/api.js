import axios from 'axios';

export const loadUsersAPI = async () => {
  return await axios.get('http://localhost:8000/users');
};
