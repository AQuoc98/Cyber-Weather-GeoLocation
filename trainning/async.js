// Thế nào là Async/ bất đồng bộ
console.log("First line")

setTimeout(() => {
  console.log("Second line xxs")
}, 2000);

setTimeout(() => {
  console.log("Second line")
}, 0);

console.log("Third line")