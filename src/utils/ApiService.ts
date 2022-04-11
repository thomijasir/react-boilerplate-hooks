import axios, { AxiosInstance } from 'axios';
import packageInfo from '../../package.json';
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
class ApiService {
  static INSTANCE: ApiService;
  static getInstance = () => {
    if (!ApiService.INSTANCE) ApiService.INSTANCE = new ApiService();
    return ApiService.INSTANCE;
  };

  anteikuClient: AxiosInstance;

  constructor() {
    this.anteikuClient = axios.create({
      baseURL: process.env.ANTEIKU_URL,
      timeout: parseInt(process.env.TIMEOUT || '30000', 10),
      headers: {
        'X-Client-Version': packageInfo.version,
      },
    });

    this.anteikuClient.interceptors.response.use(
      (config: any) => config,
      this.errorHandle,
    );
  }

  errorHandle = (error: any) => Promise.reject(error);

  setBearer = (token: string): void => {
    this.anteikuClient.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  };
}

export default ApiService.getInstance();
