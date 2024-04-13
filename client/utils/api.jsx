import axios from "axios";

    const baseURL= "http://localhost:3001";

    export const login = async (data) => {
        try {
            const res = await axios.post(`${baseURL}/login`, data);
            console.log("res", res)
            return res.data;
        } catch (error) {
            console.log("err", error)
        }
    }
    export const signup = async (data) => {
        try{
            const res = await axios.post(`${baseURL}/register`, data);
            console.log("res", res.data)
            return res.data
        }catch(error){
            console.log("err", error)
        }
    }

    