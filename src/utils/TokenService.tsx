import lGet from 'lodash/get';
import { ACCESS_TOKEN } from '../constants';

class TokenService {
  setToken = (token: string) => {
    const time = new Date().getTime();
    // Set Expire For 20 Hour
    const expires = time + 20 * 3600 * 1000;
    const value = {
      token,
      expires,
    };
    const convert = JSON.stringify(value);
    sessionStorage.setItem(ACCESS_TOKEN, convert);
  };

  getToken = () => {
    const nowTime = new Date().getTime();
    const getToken = sessionStorage.getItem(ACCESS_TOKEN);
    if (getToken) {
      const token = JSON.parse(getToken);
      const expires = lGet(token, 'expires', 0);
      // Check Is Toke Expire
      if (nowTime < expires) {
        return token.token;
      }
    }
    return null;
  };

  removeToken = () => {
    sessionStorage.removeItem(ACCESS_TOKEN);
  };
}

export default new TokenService();
