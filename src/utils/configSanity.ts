import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "3oittd4b",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true
})