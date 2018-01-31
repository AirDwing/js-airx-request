const methods = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch'];

const getDefer = () => {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

const base = (method = 'GET', url = '/', headers = {}, data = false, timeout = 5000) => {
  const deferred = getDefer();
  let request = new XMLHttpRequest();
  request.open(method, url, true);
  // Set Headers
  Object.keys(headers).forEach((name) => {
    request.setRequestHeader(name, headers[name]);
  });
  // Handle Response
  request.onreadystatechange = function Response() {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        deferred.resolve(this.responseText);
      } else {
        deferred.reject(this.responseText);
      }
    }
  };
  request.timeout = timeout;

  if (data) {
    request.send(data);
  } else {
    request.send();
  }

  request = null;
  return deferred.promise;
};

methods.forEach((method) => {
  exports[method] = ({
    url, headers, data, timeout
  }) => base(method.toUpperCase(), url, headers, data, timeout);
});
