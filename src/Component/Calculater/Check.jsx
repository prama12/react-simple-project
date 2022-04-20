function add(a, b) {
     let sum = a + b;
     return sum;
}

function sub(a, b) {
     let subb = a - b;
     return subb;
}

function mult(a, b) {
     let mul = a * b;
     return mul;
}

function div(a, b) {
     let divied = a / b;
     divied = divied.toFixed(2);
     return divied;
}


export default add;
export { add, sub, mult, div };