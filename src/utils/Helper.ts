import lGet from 'lodash/get';

export const getLang = (): 'en' | 'id' => {
  switch (window.navigator.language.split('-')[0]) {
    case 'en':
      return 'en';
    case 'id':
      return 'id';
    default:
      return 'id';
  }
};

export const getParamURL = (urlKey: string) => {
  const rawUrl = window.location.search;
  const result = rawUrl
    .substring(rawUrl.indexOf('?') + 1)
    .split('&')
    .reduce(
      (memo, param) => ({
        ...memo,
        [param.split('=')[0]]: param.split('=')[1],
      }),
      {},
    );
  return lGet(result, urlKey, '');
};

export const ArrayStringSearch = (
  objectTarget: string,
  str: string,
  listObject: any,
) =>
  listObject.filter(
    (el: any) => el[objectTarget].toLowerCase().indexOf(str.toLowerCase()) > -1,
  );

export const createUUID = (): string => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 || 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r && 0x3) || 0x8).toString(16);
  });
  return uuid;
};
