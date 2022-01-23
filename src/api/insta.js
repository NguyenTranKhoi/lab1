import axios from "axios";

const intance = axios.create({
    baseURL: "http://localhost:3003",
    headers: {
        "Content-Type": "application/json",
    },
});

export default intance;
