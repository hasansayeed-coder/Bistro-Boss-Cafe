/* eslint-disable react/prop-types */
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useaxiosSecure from "../../Hooks/useaxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {

    const {user} = useAuth()  ;
    const {name , image , price , recipe , _id} = item ;
    const navigate = useNavigate() ;
    const location = useLocation() ;
    const axiosSecure = useaxiosSecure() ; 

    const [ , refetch]  = useCart() ; 

    const handleAddToCart = (food) => {
        // console.log(food , " " , ) ;

        if(user && user.email){
            // send cart item to the database

            const cartItem = {
                 menuId : _id , 
                 email : user.email , 
                 name , 
                 image , 
                 price , 
            }
            axiosSecure.post('/carts' , cartItem)
            .then((response) => {
                console.log(response.data) ;

                if(response.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch to update the cart items count
                    refetch();
                }
            })
        }
        else{
            // alert the user about logging in
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if(result.isConfirmed){
                    navigate('/login' , {state : {from : location}}) ; 
                }
            })
        }
    } ;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;