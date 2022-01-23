import intance from "./insta";

export const getAll = () => {
    const url = "/posts";
    return intance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return intance.get(url);
};
export const add = (post) => {
    const url = `/posts`;
    return intance.post(url, post);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return intance.delete(url);
};
