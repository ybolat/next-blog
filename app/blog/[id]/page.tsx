import {Metadata} from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return response.json();
}

type Props = {
    params: {
        id: string;
    }
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    const post: any = await getData(id);

    return {
        title: post.title
    }
}

const Post = async ({params: {id}}: Props) => {
    const post: any = await getData(id);

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}

export default Post;
