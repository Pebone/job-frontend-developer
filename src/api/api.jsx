import axios from "axios";

export const api_key = "c75329f076be4710a94cf7017ffa7487"

const api = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?apiKey=c75329f076be4710a94cf7017ffa7487`,
});

export default api;