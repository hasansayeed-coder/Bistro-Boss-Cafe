import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg" ; 

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">

            <SectionTitle
            subHeading="Check it out" heading="Featured Item">
            </SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">

            <div>
                <img src={featuredImg} alt="" />
            </div>

            <div className="md:ml-10">
              <p>Aug 20 , 2029</p>
              <p className="uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam minima, commodi architecto ipsa assumenda qui fugiat, eveniet quasi nam doloribus vitae vel voluptatem quis error. Aut cumque magni, repellat quam, beatae blanditiis consectetur assumenda libero dolorum maxime nesciunt iusto error ducimus cupiditate nobis explicabo sunt, possimus aperiam porro? Perspiciatis!</p>

              <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now!!</button>
            </div>

            </div>

            
            
        </div>
    );
};

export default Featured;