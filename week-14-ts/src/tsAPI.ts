// https://projects.100xdevs.com/tracks/ts-hard/ts-hard-1

interface User4{
    id:number;
    name:string;
    email:string;
    createdAt:Date;
}

type UpdateProps=Pick<User4,'name'|'email'>

function updateUser(user:UpdateProps){
    // hitt the databse
    console.log(`Name:${user.name},Email:${user.email}`);
}


// Partial ?----->Optional

interface User5{
    id?:number;
   readonly name?:string;
    email?:string;
    createdAt?:Date;
}

// ReadOnly--doesnot lett reassign

interface User6{
    id?:number;
    name?:string;
    email?:string;
    createdAt?:Date;
}

const user5:User5={
name:"Avi"
}
// make the particular field readonly or make the whole obj Readonly
const user6:Readonly<User6>={
    name:"Avi"
}
// user5.name="Avinash"---?gives error because name is readonly



// Record and map

interface User7 {
    id: string;
    name: string;
  }
  

  type Users = Record<string, User7>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

 
  // Initialize an empty Map
  const usersMap = new Map<string, User7>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
  type event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK