import { AxiosResponse } from 'axios';

export const ResponseInterceptor = (response: AxiosResponse) => {
    // Interceptor para tratar respostas de requisição
    return response; // Retorna a resposta sem alterações
}
