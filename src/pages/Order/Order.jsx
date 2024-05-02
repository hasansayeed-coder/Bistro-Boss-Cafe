/* eslint-disable no-unused-vars */

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../Hooks/useMenu";
import orderCoverImg from "../../assets/shop/banner2.jpg" ; 
import Cover from "../Shared/Cover/Cover";
import { useState } from "react";
import { useParams } from "react-router-dom";
import OrderTab from "./OrderTab/OrderTab";

const Order = () => {


    const categories = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks']; 
    const { category } = useParams() ; 
    const initialIndex = categories.indexOf(category) ; 
    const [tabIndex , setTabIndex] = useState(initialIndex) ;
    
    const [menu] = useMenu() ;

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>

            <Cover img={orderCoverImg} title="Order Food"></Cover>

            <Tabs defaultIndex={setTabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="grid grid-cols-5 mt-5 mb-5 ml-10 font-bold text-yellow-300 cursor-pointer">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                  <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>


            
        </div>
    );
};

export default Order;