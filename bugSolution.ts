function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Both arguments must be numbers");
  }
}

const result1 = addSafe(1, 2); // Correct result
const result2 = addSafe("1", 2); // Throws an error