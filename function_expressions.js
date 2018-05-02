/*

//Variation 1
setTimeout(function () {
    console.log('I waited 2 seconds.');
}, 2000);

//Variation 2
function xTimeout() {
    console.log('I waited 2 seconds.');
};

setTimeout(xTimeout, 2000);

*/

// Variation 3
/*
let counter = 0;
function timeout() {
    setTimeout(function () {
        console.log('hi' + counter++);
        timeout();
    }, 2000);
}

timeout();
// ctrl + c
*/

//Variation 4 == Immediately Invoked Function Expression
(function () {
    console.log('Immediately Invoked Function Expression');
})();