// const fs=require('fs');


// function promisifiedFileRead(){
//     return new Promise((resolve)=>{
//         fs.readFile('a.txt',"utf-8",(err,data)=>{
//             resolve(data);
//         })
//     })
// }




// promisifiedFileRead().then((data)=>{console.log(data)});


 

// class myPromise{
//     constructor(fn){
//         this.fn=fn;
//         this.fn(()=>{
//             this.resolve();
//         })

//     }

//     then(callBack){
//         this.resolve=callBack;
//     }
// }

const s="Avinash kumar";
// const lw=s.toLowerCase();
// console.log(lw);
const str=s.toLowerCase().split("").sort().join("");
console.log(str);