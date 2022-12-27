const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// Serialized URL
console.log('Serialized URL (href) -', myUrl.href);
console.log('Serialized URL (toString) -',myUrl.toString());

// Host (root domain)
console.log('Host (root domain) -', myUrl.host);

// Hostname (does not get port)
console.log('Hostname (does not get port) -', myUrl.hostname);

// Pathname
console.log('Pathname -', myUrl.pathname);

// Serialized query
console.log('Serialized query -', myUrl.search);

// Params object
console.log('Params object -', myUrl.searchParams);

// Add params
console.log(`Add params -> e.g.: myUrl.searchParams.append('abc', '123')`);
myUrl.searchParams.append('abc', '123');

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))


