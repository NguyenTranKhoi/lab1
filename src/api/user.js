import intance from "./insta";

// eslint-disable-next-line import/prefer-default-export
export const signup = (user) => {
    const url = "/signup";
    return intance.post(url, user);
};

export const signin = (user) => {
    const url = "/signin";
    return intance.post(url, user);
};
