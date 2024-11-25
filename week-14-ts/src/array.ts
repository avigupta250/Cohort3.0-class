
// function getMax(nums:number[]){

// }
// getMax([1,2,3])


interface User3 {
    firstName: string;
    lastName: string;
    age: number;
}

let arr: User3[] = [
    {
        firstName: "Harkirat",
        lastName: "Singh",
        age: 21
    },
    {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    }
];

function getLegalUser(user: User3[]){
    return user.filter((u) => u.age > 18);
}

const legalUsers = getLegalUser(arr);
console.log(legalUsers); 