import axios from "axios";
import { json } from "stream/consumers";

async function getBlogs() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
}


export default async function Blog() {
    const blogs = await getBlogs();
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">World's best blog page</h1>

            {blogs.map((blog: todoType) => <Todo title={blog.title} body={blog.body} />)}
        </div>
    )
}

interface todoType {
    title: string;
    body: string;
}

function Todo({ title, body }: todoType) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-red-500">{title}</h2>
            <p className="text-white">{body}</p>
        </div>
    )
}