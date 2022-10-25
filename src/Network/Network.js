import axios from "axios";
import { TASK_URL } from "../Utils/AppConstant";

//GET
export const getData = async(apiUrl)=>{
    const url= TASK_URL + apiUrl
    try{
        const response= await axios.get(url)
        return response;
    }
    catch(err){
        console.log('err', err)
        return err
    }
}

//POST
export const postData = async(apiUrl,obj)=>{
    const url= TASK_URL + apiUrl
    try{
        const response= await axios.post(url,obj)
        return response;
    }
    catch(err){
        console.log('err', err)
        return err
    }
}

//UPDATE
export const putData = async(apiUrl,obj)=>{
    const url= TASK_URL + apiUrl
    try{
        const response= await axios.put(url,obj)
        return response;
    }
    catch(err){
        console.log('err', err)
        return err
    }
}

//DELETE
export const delData = async(apiUrl)=>{
    const url= TASK_URL + apiUrl
    try{
        const response= await axios.delete(url)
        return response;
    }
    catch(err){
        console.log('err', err)
        return err
    }
}