banana

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const fetchData = async url => { const response = await fetch(url); return response.json(); }

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const sum = (a, b) => a + b;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
class MyClass { constructor() { this.property = getRandomString(); } }

false - false
const randomNumber = getRandomNumber();
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
false - kiwi
const filterEvenNumbers = numbers => numbers.filter(isEven);

