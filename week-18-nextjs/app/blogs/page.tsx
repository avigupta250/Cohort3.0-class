import axios from "axios"


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