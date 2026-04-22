import axios  from "axios";
export  async function registerUser(name,email,password,role){
    const body={name,email,password, role};
    try {
        const url='http://localhost:5400/user/signup'
        const response=await axios.post(url,body);
        console.log(response)
        console.log(response.data)
        return response.data;
    } catch (error) {
        
    }
     
}