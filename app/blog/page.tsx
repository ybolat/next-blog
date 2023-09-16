import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    });

    return response.json();
}

const Blog = async () => {

    return (
        <>
            <h1>Blog page</h1>
            <PostSearch/>
            <Posts/>
        </>
    );
}

export default Blog;
