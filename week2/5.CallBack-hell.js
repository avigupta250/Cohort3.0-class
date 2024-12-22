// setTimeout(() => {
//   console.log("Hi");
//   setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//       console.log("Hello There");
//     }, 2000);
//   }, 3000);
// }, 1000);

// Promisified Version
function setTimeOutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}


// Promide Chianing
// setTimeOutPromisified(1000).then(() => {
//   console.log("Hi");
//   return setTimeOutPromisified(3000)
// }).then(()=>{
//     console.log("Hello")
//     return setTimeOutPromisified(5000);
// }).then(()=>{
//     console.log("Hello there");
// });



// Async and Await syntax

// async function solve(){
//      await setTimeOutPromisified(1000);
//      console.log("hi");
//      await setTimeOutPromisified(3000);
//      console.log("hello");
//      await setTimeOutPromisified(5000);
//      console.log("hi there");
// }
// solve(); bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb



let promise=new Promise((resolve,reject)=>{
  
  const x=2;
  const y=3;

  if(x==y)resolve("passed");
  else reject("failed")

})


promise.then((returned)=>{
  console.log(returned)
}).catch((err)=>{
  console.log(err)
})