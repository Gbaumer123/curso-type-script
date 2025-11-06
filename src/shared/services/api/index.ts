import axios from 'axios';
import { ErrorInterceptor, ResponseInterceptor } from './axios-config/interceptors';

export const Api = axios.create({
  baseURL: 'http://localhost:3333',
});

Api.interceptors.response.use(
    (response) => ResponseInterceptor(response),
    (error) => ErrorInterceptor(error),
);

export default Api;