'use client'

import {FormEventHandler, useState} from "react";
import {getPostsBySearch} from "@/services/getPosts";
import useSWR from "swr";

const PostSearch = () => {
    const {mutate} = useSWR("posts");
    const [search, setSearch] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostsBySearch(search);

        await mutate(posts);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"search"} placeholder={"search"} onChange={e => setSearch(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </form>
    );
}

export default PostSearch;
