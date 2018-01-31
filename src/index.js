const request = require('./request');

const methods = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch'];

methods.forEach((method) => {
  exports[method] = ({ url, headers, data }) => request(method.toUpperCase(), url, headers, data);
});
