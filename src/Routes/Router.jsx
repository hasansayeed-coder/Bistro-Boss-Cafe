import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Secrect from "../pages/Shared/Secrect/Secrect";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import Cart from "../pages/Dashboard/Cart/Cart"
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/' , 
            element : <Home></Home>
        } , 
        {
          path : '/menu' , 
          element : <Menu></Menu>
        } , 
        {
          path : '/order/:category' , 
          element : <Order></Order>
        } , 
        {
          path : '/login' ,
          element : <Login></Login>
        } , 
        {
          path : '/signup' , 
          element : <Signup></Signup>
        } , 
        {
          path : '/secrect' , 
          element : <PrivateRoute>
            <Secrect></Secrect>
          </PrivateRoute>
        }
      ]
    },
    {
      path : 'dashBoard' , 
      element : <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute> , 
      children : [
        // normal user
        {
          path : 'userHome' , 
          element : <UserHome></UserHome>
        } ,
        {
          path : 'cart' , 
          element : <Cart></Cart>
        } , 
        {
          path : 'payment' ,
          element : <Payment></Payment>
        } , 
        {
          path : 'paymentHistory' , 
          element : <PaymentHistory></PaymentHistory>
        } ,
        // admin only routes
        {
          path : 'adminHome' , 
          element : <AdminRoute><AdminHome></AdminHome></AdminRoute>
        } ,
        {
          path : 'addItems' , 
          element : <AddItem></AddItem>
        } ,
        {
          path : 'manageItems' , 
          element : <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        } , 
        {
          path : 'updateItem/:id' , 
          element : <UpdateItem></UpdateItem> ,
          loader : ({params}) => fetch(`https://bistro-boss-server-eight-jade.vercel.app/menu/${params.id}`)
        } , 
        {
          path : 'users' , 
          element : <AllUsers></AllUsers>
        }
      ]
    }
  ]);
  