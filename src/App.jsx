
import Header from "./components/Header"
import React, { Suspense } from "react";

const ProductDetail=React.lazy(()=>{
  return import("./components/ProductDetail")
})

import ProductList from "./components/ProductList"
import apStore from "./utils/cartStore"
import { Provider } from "react-redux";

const Cart=React.lazy(()=>{
 return  import ("./components/Cart")
})
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom"; 
import Searched from "./components/Searched"

// import { Cart } from "./components/Cart";

const PlaceOrder=React.lazy(()=>{
return import  ("./components/PlaceOrder")
})







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
                    element:
                    <Suspense fallback="LOADING PRODUCT DETAIL.....">
                          <ProductDetail/>  
                    </Suspense>
                    
                  },
                  {
                    path:"cart",
                    element:<Suspense fallback="Loading CART.....">
                      <Cart/>
                    </Suspense>
                   
                  },

                  {
                    path:"search/:term",
                    element:<Searched/>
                  },
                  {
                    path:"/placeorder",
                    element: <Suspense fallback="Loading placeorder">
                      <PlaceOrder/>
                    </Suspense>
                  },
                
                
              ]

    }
  ])


  return (
    <div>
<Provider store={apStore}>
<RouterProvider router={router}/>


      
    




  </Provider>
    </div> )
}


export default App