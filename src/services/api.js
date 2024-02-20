import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3334',
  baseURL: 'https://food-explorer-c78s.onrender.com',
})
