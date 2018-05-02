/*
function sayHello() {
    console.log('......................');
    console.log('hello');
    console.log('......................');
}
*/

/*
// sayHello();
let a = sayHello;
a();
a();
a();
*/

/*
function sayHello(name) {
    console.log('......................');
    console.log('Hello ' + name + '!');
    console.log('......................');
}

a = 'sophia';
a = a.toUpperCase();

sayHello(a);
sayHello('blanche');
sayHello('rose');
sayHello('dorothy');
*/

function calculateTax(amount) {
    let result = amount * 0.0825;
    result = parseFloat(result, 10);
    return result
}

let tax = calculateTax(100);
console.log('$' + tax);
