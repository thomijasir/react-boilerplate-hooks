const getLang = (): 'en' | 'id' => {
  switch (window.navigator.language.split('-')[0]) {
    case 'en':
      return 'en';
    case 'id':
      return 'id';
    default:
      return 'id';
  }
};

export default {
  getLang,
};
