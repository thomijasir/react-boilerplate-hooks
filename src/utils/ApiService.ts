import axios, { AxiosInstance } from 'axios';
import packageInfo from '../../package.json';

class ApiService {
  static INSTANCE: ApiService;
  static getInstance = () => {
    if (!ApiService.INSTANCE) ApiService.INSTANCE = new ApiService();
    return ApiService.INSTANCE;
  };

  APIClient: AxiosInstance;

  constructor() {
    this.APIClient = axios.create({
      baseURL: '/',
      timeout: parseInt(process.env.TIMEOUT || '30000', 10),
      headers: {
        'X-Client-Version': packageInfo.version,
      },
    });

    this.APIClient.interceptors.response.use(
      (config: any) => config,
      this.errorHandle,
    );
  }

  errorHandle = (error: any) => Promise.reject(error);

  setBearer = (token: string): void => {
    this.APIClient.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  };
}

export default ApiService.getInstance();
