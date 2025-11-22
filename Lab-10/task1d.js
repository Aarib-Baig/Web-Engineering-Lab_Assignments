const [a, b, op] = process.argv.slice(2);
const x = Number(a), y = Number(b);

if (op === 'add') console.log(x + y);
else if (op === 'subtract') console.log(x - y);
else if (op === 'multiply') console.log(x * y);
else if (op === 'divide') console.log(x / y);
else console.log('Invalid operation');