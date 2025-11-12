import formatCurrency from '../scripts/utils/money.js';

console.log("test suite: formatCurrency")

console.log("Convers cents into dollars");

if(formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log("workds with 0")
if(formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log("rounds up to the nearest cent")

if(formatCurrency(2000.7) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}

