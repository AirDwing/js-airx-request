const mr = require('../src');

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
  data: JSON.stringify({ username: 'xxx', password: 'xxx' })
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});
