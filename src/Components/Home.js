import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

import "./style.css"
const Home = () => {

    const {
        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
      } = CartState();

      const transformProducts = ()=>{
          let sortedProducts=products;

          if(sort){
              sortedProducts=sortedProducts.sort((a,b)=>
                  sort==="lowToHigh" ? a.price - b.price :b.price -a.price
              );
          }  
          return sortedProducts;
      }
      console.log(products);
    return (
        <div className="home">
        <div className="filters"></div>
            <div className="productContainer">
             {transformProducts().map((prod) => {
                    return<SingleProduct prod={prod} key={prod.id} />
                  })}
            
            </div>
        </div>
    )
}

export default Home
