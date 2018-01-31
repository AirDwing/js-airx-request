# @airx/request

A minimum request package for browser.

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/@airx/request.svg)](https://npmjs.org/package/@airx/request) [![npm](https://img.shields.io/npm/dt/@airx/request.svg)](https://npmjs.org/package/@airx/request) [![codebeat badge](https://codebeat.co/badges/52228e56-dbe5-4fb9-b962-c84fd95fe8a3)](https://codebeat.co/projects/github-com-airdwing-js-airx-request-master)

## Usage

Enabled methods:  get, delete, head, options, post, put, patch

```js
const mr = require('@airx/request');
// import mr from '@airx/request';
// mr means for mini-request

mr.get({
  url: '/'
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});

mr.post({
  url: '/',
  headers: {
    'Content-Type': 'application/json'
  },
  data: JSON.stringify({username:'xxx', password: 'xxx'})
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});
```

## License

Apache 2.0
