import { createClient } from "next-sanity";

const client = createClient({
    projectId: "your-project-id",
    dataset: "your-dataset",
    apiVersion: "2021-03-25",
    useCdn: false,
});

export async function sanityFetch({query, params ={}}: {query: string; params?: any}) {
    return await client.fetch(query, params);
}