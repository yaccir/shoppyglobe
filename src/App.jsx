import { useEffect } from "react"
import Header from "./components/Header"
import ProductDetail from "./components/ProductDetail"
import ProductItem from "./components/ProductItem"
import ProductList from "./components/ProductList"
import CartItem from "./components/CartItem"
import apStore from "./utils/cartStore"
import { Provider } from "react-redux";
import { Cart } from "./components/Cart"





export const App = () => {

//removable code

useEffect(()=>{




},[])



//end of removable code

  return (
    <div>

<Provider store={apStore}>

      <Header/>
     
      <ProductList/>
      <ProductDetail/>
    <Cart/>

</Provider>
  
    </div> )
}


export default App