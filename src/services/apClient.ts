import axios from 'axios';

const apClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e201d4fe10214514bf64e7ac4f7aa09c'
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apClient;