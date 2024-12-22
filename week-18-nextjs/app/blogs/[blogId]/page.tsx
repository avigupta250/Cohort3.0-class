import axios from "axios";

export default async function BlogPage({params}:any){


const blogId= (await params).blogId


const blogs = await axios.get(`https://jsonplaceholder.typicode.com/todos/${blogId}`);
const data = blogs.data


    return <div>
{JSON.stringify(data)}
    </div>

    
}