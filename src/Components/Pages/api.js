
import axios from "axios";


const getdata=()=>{
    return axios.get("http://localhost:8080/products")
}

export {getdata}