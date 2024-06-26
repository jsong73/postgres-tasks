import axios from "axios";

    // const baseURL= "http://orbo.onrender.com";
   const baseURL= "http://localhost:3001";
   
    export const login = async (data) => {
        try {
            const res = await axios.post(`${baseURL}/login`, data);
            // console.log("res", res.data)
            return res.data;
     
        } catch (error) {
            console.log("err", error)
        }
    }
    export const signup = async (data) => {
        try{
            const res = await axios.post(`${baseURL}/register`, data);
            // console.log("res", res.data)
            return res.data
        }catch(error){
            console.log("err", error)
        }
    }

    export const tasks = async(token) => {
        try {
            const res = await axios.get(`${baseURL}/tasks`,{
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
            console.log("res", res.data)
            return res.data;
        } catch (error){
            console.log(error)
        }
    }

    
    export const task = async(id, token) => {
        try {
            const res = await axios.get(`${baseURL}/tasks/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
            // console.log("res", res.data)
            return res.data;
        } catch (error){
            console.log(error)
        }
    }

    export const addTask = async(taskData, token) => {
        try{
            const res = await axios.post(`${baseURL}/tasks`, taskData, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
            console.log("res", res)
            return res.data
        }catch(error) {
            console.log(error)
        }
    }

    export const deleteTask = async(id, token) => {
        try{
            const res = await axios.delete(`${baseURL}/tasks/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
            console.log("res", res)
            return res.data
        }catch(error) {
            console.log(error)
        }
    }

    export const updateTask = async(id, taskData, token) => {
        try{
            const res = await axios.put(`${baseURL}/tasks/${id}`, taskData, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
            console.log("res", res)
            return res.data
        }catch(error) {
            console.log(error)
        }
    }
    


    export const subtasks = async(id, token) => {
        try {
            const res = await axios.get(`${baseURL}/tasks/${id}/subtasks`,{
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })

            console.log("res", res.data)
            return res.data;
        } catch (error){
            console.log(error)
        }
    }

    export const addSubtask = async(id, subtaskData, token) => {
        try {
            const res = await axios.post(`${baseURL}/tasks/${id}/subtasks`, subtaskData, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
            console.log("res", res.data)
            return res.data;
        } catch (error){
            console.log(error)
        }
    }
    
    export const deleteSubtask = async(id, subtaskId, token) => {
        try {
            const res = await axios.delete(`${baseURL}/tasks/${id}/subtasks/${subtaskId}`, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
            console.log("res", res.data)
            return res.data;
        } catch (error){
            console.log(error)
        }
    }

    export const updateSubTask = async (id, subtaskId, destinationColumn, token) => {
        try {
            const res = await axios.put(
                `${baseURL}/tasks/${id}/subtasks/${subtaskId}`,
                { status: destinationColumn }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                }
            );
            console.log("res", res.data);
            return res.data;
        } catch (error) {
            console.error("Axios error:", error);
        }
    };