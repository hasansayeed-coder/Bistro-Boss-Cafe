/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth"

const axiosSecure = axios.create({
    baseURL : 'https://bistro-boss-server-eight-jade.vercel.app'
})
const useaxiosSecure = () => {
    const navigate = useNavigate() ; 
    const {logout} = useAuth() ; 
    
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped bt interceptor ' , token);
        config.headers.authorization = `Bearer ${token}`
        return config ; 
    }, function (error){
        return Promise.reject(error) ;
    })

    axiosSecure.interceptors.response.use(function(response){
        return response ;
    } , async(error) =>{
        const status = error.response.status ;

        if(status === 401 || status === 403){
            await logout() ;
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure ;
};

export default useaxiosSecure;