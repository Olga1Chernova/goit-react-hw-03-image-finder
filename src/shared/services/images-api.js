import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pixabay.com/api',
    params: {
        key: '32280115-b50908f9a62d9acb0676d3a4b',
    }
}) //params for all project
export const searchImages = async (q, page) => {
    const {data} = await instance.get(
        `/`, {
            params: {
                q,
                page,
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: 12,
            } //params for a single request
        })
    return data;
}
