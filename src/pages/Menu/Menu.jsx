import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.png" ;
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../Hooks/useMenu";
import soupImg from "../../assets/menu/soup-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg" ; 
import pizzaImg from "../../assets/menu/pizza-bg.jpg" ;
import dessertImg from "../../assets/menu/dessert-bg.jpeg" ;

const Menu = () => {

    const [menu] = useMenu() ; 
    const offered = menu.filter((item) => item.category === 'offered') ;
    const desserts = menu.filter((item) => item.category === 'dessert') ; 
    const soup = menu.filter((item) => item.category === 'soup') ; 
    const salad = menu.filter((item) => item.category === 'salad') ;
    const pizza = menu.filter((item) => item.category === 'pizza') ;


    return (
        <div>
           <Cover img={menuImg} title="Our Menu"></Cover>

           {/* main cover */}
           <SectionTitle heading="Today's Offer" subHeading="Don't Miss"></SectionTitle>

           {/* offered menu items */}
           <MenuCategory items={offered}></MenuCategory>

           {/* dessert menu items */}
           <MenuCategory items={desserts} title='dessert' img={dessertImg}></MenuCategory>
           <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
           <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
           <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;