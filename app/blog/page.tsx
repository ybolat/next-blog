import Link from "next/link";

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    });

    return response.json();
}

const Blog = async () => {
    const posts = await getData();

    return (
        <>
            <h1>Blog page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Blog;
