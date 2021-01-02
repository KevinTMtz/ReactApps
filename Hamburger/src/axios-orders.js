import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hamburger-app-d3a32-default-rtdb.firebaseio.com/',
});

export default instance;
