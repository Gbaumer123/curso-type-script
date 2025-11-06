import { AxiosError } from 'axios';

export const ErrorInterceptor = (error: AxiosError) => {;// Interceptor para tratar erros de requisição
    if(error.message === 'Network Error'){// Verifica se é um erro de rede
        return Promise.reject(new Error('Erro de conexão, verifique sua rede.'));// Tratar erro de rede
    }

     if(error.response?.status === 401){
        // Tratar erro 401
    }

    return Promise.reject(error); // Propagar outros erros
}