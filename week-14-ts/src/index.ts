

function sum(a:number,b:number){


   console.log( a+b);

}

// sum(4,5);

function isAdult(age:number){
    if(age>=18)return true;
    else return false;
}

// console.log(isAdult(21)) 

// Create a function that take a function as input and runs after 1 second

function delayedCall(fn:()=>void){
setTimeout(fn,1000);
}

delayedCall(function(){
    console.log("Hi there")
})


