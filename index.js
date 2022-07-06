// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log('i m with');
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);
fruits.pop();
console.log(fruits);

var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(2, 2); //first parameter is index and 2nd parameter is no. of item to delete
console.log('arr after spice : ' + arr);

// https://gorest.co.in/public/v2/users
