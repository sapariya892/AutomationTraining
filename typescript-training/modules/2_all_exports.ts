//Name export  : Expoting the date and function with it name separately.

const PI = 3.14;

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}
export { PI, add, subtract };