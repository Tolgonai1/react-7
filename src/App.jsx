import './App.css'
import {Layout} from "./components/Layout.jsx";
import {Products} from "./pages/Products.jsx";
import {Cart} from "./pages/Cart.jsx";
import {Routes,Route} from "react-router-dom";

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Products/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
