const now = new Date();
const pad = (n) => n.toString().padStart(2, '0');

const formattedDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const formattedTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

console.log(`${formattedDate} ${formattedTime}`);