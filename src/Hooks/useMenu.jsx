import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {

    const axiosPublic = useAxiosPublic() ; 

    // const [menu, setMenu] = useState([]) ; 
    // const [loading , setLoading] = useState(true) ; 

    // useEffect( () => {
    //     fetch('https://bistro-boss-server-eight-jade.vercel.app/menu')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setLoading(false) ;
    //         setMenu(data) ;
    //     })
    // } , []) ;
    // return [menu , loading] 

    const {data : menu = [] , isPending : loading , refetch} = useQuery({
        queryKey : ['menu'] , 
        queryFn : async () => {
            const res = await axiosPublic.get('/menu') ; 
            return res.data ;
        }
    })

    return [menu , loading , refetch]

};

export default useMenu;