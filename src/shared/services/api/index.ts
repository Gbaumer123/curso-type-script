import axios from 'axios';

import { ErrorInterceptor, ResponseInterceptor } from './axios-config/interceptors';
import { Environment } from '../../environment';

// Configuração base do axios para a aplicação
export const Api = axios.create({ // Cria uma instância do axios com configuração personalizada
  baseURL: Environment.BASE_URL // Define a URL base para todas as requisições
});

Api.interceptors.response.use(// Adiciona interceptadores de resposta e erro
    (response) => ResponseInterceptor(response),//sucesso
    (error) => ErrorInterceptor(error),//erro
);

export default Api;// Exporta a instância configurada do axios para uso em outras partes da aplicação