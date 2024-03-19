const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const isEven = num => num % 2 === 0;

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
orange + banana
const greet = name => `Hello, ${name}!`;
orange

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
true * 60
const getRandomSubset = (array, size) => array.slice(0, size);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
orange

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

17 + 97
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
