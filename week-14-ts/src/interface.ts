
interface Address{
    city:string;
    country:string;
    pincode:number;
}

interface User{
    name:string;
    age:number;
    address:Address
}

let user:User={
    name:"Avinash",
    age:23,
    address:{
        city:"Patna",
        country:"India",
        pincode:852123
    }
}


function isLegal(user:User):boolean{
    return user.age>18
}

const ans=isLegal(user)

if(ans)console.log("Im legal")
    else console.log("Im not legal")


interface People{
    name:string;
    age:number;
    greet:()=>string;
}


class Human implements People{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    
   greet(){
    return 'hii'
   }


}

let Avi=new Human("Avinash",23);
console.log(Avi.name+Avi.greet());

// what is diffenrce betwene abstract and interface
 /**if a class can implement an interface then what is the point of an abstract class
 * 
 */
abstract class User2{
    name:string;
    constructor(name:string){
        this.name=name
    }

    abstract greet():string
}