import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home  from "./Components/Home";
import Cart  from "./Components/Cart";
import { BrowserRouter,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Header />
       <div>
       <Route  path='/' exact>
         <Home />
       </Route>
       <Route path='/ShoppingCart/' exact>
         <Home />
       </Route>
       <Route path='/ShoppingCart/cart/' exact>
       <Cart />
     </Route>
       </div>
    </BrowserRouter>
     
      
    
  );
}

export default App;

