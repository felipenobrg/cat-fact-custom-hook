import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const useGetCat = () => {
    const { data, refetch, isLoading } = useQuery(["cat"], async () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    return { data, refetch, isLoading }
}