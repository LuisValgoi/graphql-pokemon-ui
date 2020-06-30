import URLs from './URL';

export default {
  getUrl(key) {
    const url = URLs[key];

    if (!url) {
      throw new Error(
        'Url defined by Constant: ' + key + ' not found in UrlProvider.js'
      );
    }

    return url;
  },

  replace(url, replaceValue, searchValue = ':id') {
    return url.replace(searchValue, replaceValue);
  }
};
