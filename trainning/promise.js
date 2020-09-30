const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Chay vao reject")
    // resolve("Chay vao resolve")
  }, 2000);
})


somePromise
  .then((value) => {
    console.log("then:", value)
  })
  .catch((err) => {
    console.log("catch:", err)
  })

// somePromise
//   .then((value) => {
//     console.log("then:", value)
//   }, (err) => {
//     console.log("then error:", err)
//   })
