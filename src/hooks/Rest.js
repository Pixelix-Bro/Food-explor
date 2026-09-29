import axios from 'axios'

export const ApiClient = axios.create({
  baseURL: 'https://food-explor.vercel.app/',
  timeout: 4000,
})
