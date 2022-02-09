// Regular new Promise object
const promiseObj = new Promise((resolve, reject) => {
  let result = true;
  if (result) {
    resolve("Success");
  } else {
    reject("An error occured");
  }
})
  .then((result) => result) // must return the value to continue "then" chain
  .then((result2) => console.log(result2 + "!"))
  .catch((err) => console.error(err))
  .finally(() => console.log("Has finished running..."));

  
// Promise.all, will return the values after all the promises have resolved
// will fail if just one rejects
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err, "Error happened"));
