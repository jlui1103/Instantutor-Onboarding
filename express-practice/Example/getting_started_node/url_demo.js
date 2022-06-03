const url = require('url');

// creating a url
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id100&status=active');

// Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
// Host (root domain)
console.log(myUrl.host);
// Hostname (does not include port)
console.log(myUrl.hostname);
// Serialized query
console.log(myUrl.search);
// Params Object
console.log(myUrl.searchParams);

// Adding param
myUrl.searchParams.append('abc', '123');

// Printing out the params
myUrl.searchParams.forEach((val, key) => console.log(`${key}: ${val}`));

// Other info logged as json here
console.log(myUrl);
/*
URL {
  href: 'http://mywebsite.com:8000/hello.html?id100=&status=active&abc=123',
  origin: 'http://mywebsite.com:8000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'mywebsite.com:8000',
  hostname: 'mywebsite.com',
  port: '8000',
  pathname: '/hello.html',
  search: '?id100=&status=active&abc=123',
  searchParams: URLSearchParams { 'id100' => '', 'status' => 'active', 'abc' => '123' },    
  hash: ''
}
*/