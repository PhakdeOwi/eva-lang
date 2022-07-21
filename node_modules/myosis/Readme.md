# myOSis
displays what operating system you are using

## introduction
myOSis is a module that I created to find out what operating system you are using

## intallation
before using this module must be installed first, with below command

>npm install --global myOSis

**note** `--global` flag to install globally

## usage

Example for usage

`test.js`
```javascript
const myOSis = require("./index.js");

// return your operating system
console.log(myOSis());

// return false if not same with your operating system
console.log(myOSis("linux"));


```