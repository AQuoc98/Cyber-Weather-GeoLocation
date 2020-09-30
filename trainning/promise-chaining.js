const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject("Not valid")
      }
    }, 1000);
  })
}

// promise hell
// asyncAdd(1, 2)
//   .then(sum1 => {
//     console.log("kq1:", sum1)
//     asyncAdd(sum1, "3")
//       .then(sum2 => {
//         console.log("kq2:", sum2)
//         asyncAdd(sum2, 4)
//           .then(sum3 => {
//             console.log("kq3:", sum3)
//           })
//           .catch(err => console.log(err))
//       })
//       .catch(err => console.log(err))
//   })
//   .catch(err => console.log(err))

// promise chaining ==> code clean hon
// asyncAdd(1, 2)
//   .then(sum1 => {
//     console.log(sum1)
//     return asyncAdd(sum1, "3")
//   })
//   .then(sum2 => {
//     console.log(sum2)
//     return asyncAdd(sum2, 4)
//   })
//   .then(sum3 => {
//     console.log(sum3)
//   })
//   .catch(console.log)

// promise all
//sum1 = 1+2 (2s) && sum2 = 2 +3 (3s)
// sum3 = sum1 + sum2
Promise.all([asyncAdd(1, 2), asyncAdd(2, 3)])
  .then(([sum1, sum2]) => {
    console.log("TCL: sum1", sum1)
    console.log("TCL: sum2", sum2)
    return asyncAdd(sum1, sum2)
  })
  .then(sum3 => console.log(sum3))
  .catch(console.log)