import axios from "axios";
import store from './../../store/store'
import { changeLoader } from "../../store/action";
const axiosInstance = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=ef9be752efec7af3a6ff1321350998d8",
});

axiosInstance.interceptors.request.use(
  (config) => {
   
    store.dispatch(changeLoader(true));

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
    (config) => {
     
      store.dispatch(changeLoader(false));
  
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );


export default axiosInstance;
