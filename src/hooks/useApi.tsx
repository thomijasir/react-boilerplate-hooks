import 'regenerator-runtime/runtime';
import { useState, useEffect } from 'react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import useSession from './useSession';
import ApiService from '../services/ApiService';
import { ACCESS_TOKEN } from '../constants';
const { setBearer } = ApiService;

export type requestType = 'POST' | 'GET' | 'DELETE' | 'PATCH';

export type errorStatus = {
  errorState: boolean;
  errorStatus: number;
  message: string;
};

const useApi = (client: AxiosInstance) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorStatus>({
    errorState: false,
    errorStatus: 200,
    message: '',
  });
  const [token] = useSession(ACCESS_TOKEN, '');

  useEffect(() => {
    // ? SET TOKEN FIRST IF TOKEN AVAILABLE
    if (!client.defaults.headers.common.Authorization) {
      setBearer(token);
    }
  }, []);

  const request = async (
    type: requestType,
    uri: string,
    params?: any,
    config?: AxiosRequestConfig,
  ) => {
    setLoading(true);
    try {
      let configuredClient;
      switch (type) {
        case 'GET':
          configuredClient = client.get(uri, { params });
          break;
        case 'POST':
          configuredClient = client.post(uri, params, config);
          break;
        case 'PATCH':
          configuredClient = client.patch(uri, params, config);
          break;
        case 'DELETE':
          configuredClient = client.delete(uri);
          break;
        default:
          configuredClient = client.get(uri);
      }
      const result = await configuredClient;
      return Promise.resolve(result.data);
    } catch (err: any) {
      setError({
        errorState: true,
        errorStatus: err.response.status,
        message: err.message,
      });
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};

export default useApi;
