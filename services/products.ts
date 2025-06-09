import { Product } from "@prisma/client";
import { axiosInstance } from "./intance"
import { ApiRoutes } from "./api-routes";

export const search = async (query: string): Promise<Product[]> => {
    return (
        await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
            params: { query },
        })
    ).data;
};