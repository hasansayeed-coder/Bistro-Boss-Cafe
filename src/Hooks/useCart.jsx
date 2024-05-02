import { useQuery } from "@tanstack/react-query";
import useaxiosSecure from "./useaxiosSecure";

import useAuth from "./useAuth";

const useCart = () => {

    const axiosSecure = useaxiosSecure() ;
    const {user} = useAuth() ;
    const {refetch , data : cart=[]} = useQuery({
    queryKey : ['cart' , user?.email] , 
    queryFn : async () => {
        const response = await axiosSecure.get(`/carts?email=${user.email}`)
        return response.data  ;
    }
   })
   return [cart, refetch] ;
};

export default useCart;