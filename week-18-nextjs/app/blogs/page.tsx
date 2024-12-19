// "use client"
import axios from "axios"
// import { useEffect, useState } from "react"


export default async function Blogs() {

    const blogs = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const data = blogs.data

    return <div>
        <h1> recoil , blogs from the best platform </h1>
        <div>
    {data.map((todo,index)=> (
            <div key={index}>
                {JSON.stringify(todo)}
            </div>
            ))}
        </div>
    </div>
}

// export default function Blogs() {

//     const [blogs, setBlogs] = useState([]);

//     useEffect( () => {

//         async function getData() {
//             const res= await axios.get("https://jsonplaceholder.typicode.com/todos");
         
//             const data =await res.data;
           
//             setBlogs(data)
            
//         }


//         getData()
//     },[])


//     return<div>
//       { blogs.length >0 && 
//       blogs.map((blog,index)=> (

//         <div key={index}>{JSON.stringify(blog)}</div>
//       ))
//       }
//     </div>
// }