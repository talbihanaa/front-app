import axios from "axios";


export const register =async(values)=>{

    const result = await axios.post("http://localhost:3030/auth/inscription",{...values});
    return result
}
export const login =async(values)=>{

    const response = await axios.post("http://localhost:3030/auth/signIn",{...values});
    return response
}