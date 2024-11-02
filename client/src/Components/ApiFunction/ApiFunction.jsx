import axios from "axios"

export const POST = async(action,params) => {
    try{
        const result = await axios.post(action,params);
        if(result.status === 200){
            return result
        }
    }
    catch(error){
        console.log(error)
    }

}