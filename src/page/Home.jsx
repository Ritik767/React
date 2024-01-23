import { useState } from "react";
import Navbar from "../components/static/Nav" 
import Sidebar from "../components/static/Sidebar"
import Counter from "../components/counter/Counter"
import AddProducts from "../components/addProduct/AddProducts";
import Product from "../components/product/Product"
import AddProduct from "../components/addProduct/AddProduct"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <div className="px-[5%] py-10">
        <Product />
        <AddProduct/>
        <AddProducts/>

        {/* <div className="productInput">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name}
          onChange={(e) =>{
            console.log(e);
            setName(e?.target?.value);
          }}/>
        </div> 
         <div className="productInput">
          <label htmlFor={email}>Email</label>
          <input type="text" id={email} value={email}
          onChange={(e) =>{
            console.log(e);
            setEmail(e?.target?.value);
          }}/>
        </div> */}
        </div>
        <Counter />
      
    </>
  )
}

export default Home;