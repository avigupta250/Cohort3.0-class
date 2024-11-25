
// intersection
type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
//   &--->everything from both
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  
// Union
// |--->a or b or both
  type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

type typeUser={
    name:string;
    role:string;
}

type typeAdmin={
    name:string;
    permission:string
}

type UserOrAdmin=typeAdmin|typeUser
function Master(user:UserOrAdmin):string{
    return  "Welcome"+" "+user.name
}

let user1:UserOrAdmin={
    name:"Avinash",
    role:"Admin"
}


console.log(Master(user1))