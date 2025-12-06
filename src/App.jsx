import { useEffect } from "react"
import Header from "./components/Header"
import ProductDetail from "./components/ProductDetail"
import ProductItem from "./components/ProductItem"
import ProductList from "./components/ProductList"
import CartItem from "./components/CartItem"
import apStore from "./utils/cartStore"
import { Provider } from "react-redux";
import { Cart } from "./components/Cart"
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom"; 
import Searched from "./components/Searched"
import PlaceOrder from "./components/PlaceOrder"
import SignUp from "./components/SignUp"




export const App = () => {


  const router=createBrowserRouter([
    {
      path:"/",
      element:<div>
        <Header/>
      
        <Outlet/>
              </div>,

              children:[


                {
                  path:'/',
                  element:  <ProductList/>
                },
                  {
                    path:'productdetail/:id',
                    element:<ProductDetail/>
                  },
                  {
                    path:"cart",
                    element:<Cart/>
                  },
                  {
                    path:"search/:term",
                    element:<Searched/>
                  },
                  {
                    path:"/placeorder",
                    element: <PlaceOrder/>
                  },
                  {
                    path:"/signup",
                    element:<SignUp/>
                  
                  }
              ]

    }
  ])


  return (
    <div>
<Provider store={apStore}>
<RouterProvider router={router}>


      <Header/>
     
      <ProductList/>
      <ProductDetail/>
    <Cart/>



</RouterProvider>
  </Provider>
    </div> )
}


export default App