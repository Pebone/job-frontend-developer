import axios from "axios";

export const api_key = "c75329f076be4710a94cf7017ffa7487";

const api = axios.create({
  baseURL: `https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=c75329f076be4710a94cf7017ffa7487`,
  // baseURL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=c75329f076be4710a94cf7017ffa7487`,
});

export default api;
