import lGet from 'lodash/get';
import { ACCESS_TOKEN } from '../constants';

export const setToken = (token: string) => {
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

export const getToken = () => {
  const nowTime = new Date().getTime();
  const getTokenValue = sessionStorage.getItem(ACCESS_TOKEN);
  if (getTokenValue) {
    const token = JSON.parse(getTokenValue);
    const expires = lGet(token, 'expires', 0);
    // Check Is Toke Expire
    if (nowTime < expires) {
      return token.token;
    }
  }
  return null;
};

export const removeToken = () => {
  sessionStorage.removeItem(ACCESS_TOKEN);
};
