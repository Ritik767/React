// // import React from "react";
import { useEffect, useState } from "react";
import Title from "../common/Title";
import Button from "../common/Button";

const AddProducts = () => {
  const [inputData, setInputData] = useState({
    name: "",
    category: "",
    exp: "",
    rate: "",
    order: "",
    qty: "",
  });

  const [error, setError] = useState({
    name: "",
    category: "",
    exp: "",
    rate: "",
    order: "",
    qty: "",
  });

  const validation = (value)=>{
    let err = {};
    if(!value.name){
      err = {...err, name:"Name needed"}
    } else if(value.name.length < 8){
        err = {...err, name:"Name must be in 8 character"}
    }
    if(!value.category){
      err = {...err, category:"Category needed"}
    }else if(value.category.length < 4){
      err = {...err, category:"Category must be in 4 character"}
  }
    if(!value.exp){
      err = {...err, exp:"Expiry Date needed"}
    }
    if(!value.rate){
      err = {...err, rate:"Rate needed"}
    }else if(value.rate < 10){
      err = {...err, rate:"Rate must be above 10"}
  }
    if(!value.order){
      err = {...err, order:"Re-order needed"}
    }
    if(!value.qty){
      err = {...err, qty:"Quantity needed"}
    }

    return err;
  }

  const [isValidate, setIsValidate] = useState(false);

useEffect(()=>{
  if(Object.keys(error).length === 0 && isValidate){
  console.log("Datas Are:", inputData);
  }
},[error, isValidate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(inputData));
    setIsValidate(true);
    // console.log(e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
    console.log(inputData);
  };


  return (
    <form onSubmit={handleSubmit} className="mt-[40px]">
      <Title title={"Add Products"} />
      <div className="grid grid-cols-2 gap-4 px-4 mt-10">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.name}
            id="name"
            name="name"
            className="border border-slate-300 rounded-md outline-none px-2 py-2"
          />
          <p className="text-red-500">{error?.name}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.category}
            id="category"
            name="category"
            
            className="border border-slate-300 rounded-md outline-none  px-2 py-2"
          />
          <p className="text-red-500">{error?.category}</p>
        </div>
        <div className="flex flex-col space-y-2 col-span-2">
          <label htmlFor="exp">Exp date</label>
          <input
            type="date"
            onChange={handleChange}
            value={inputData.exp}
            id="exp"
            name="exp"
            className="border border-slate-300 rounded-md outline-none  px-2 py-2"
          />
          <p className="text-red-500">{error?.exp}</p>
        </div>
        <div className="flex flex-col space-y-2 col-span-2">
          <label htmlFor="rate">Rate</label>
          <input
            type="number"
            onChange={handleChange}
            value={inputData?.rate}
            id="rate"
            name="rate"
            className="border border-slate-300 rounded-md outline-none  px-2 py-2"
          />
          <p className="text-red-500">{error?.rate}</p>
        </div>
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="order">Re-order Level</label>
          <input
            type="number"
            onChange={handleChange}
            value={inputData.order}
            id="order"
            name="order"
            className="border border-slate-300 rounded-md outline-none  px-2 py-2"
          />
          <p className="text-red-500">{error?.order}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="qty">Qty</label>
          <input
            type="number"           
            onChange={handleChange}
            value={inputData?.qty}
            id="qty"
            name="qty"
            className="border border-slate-300 rounded-md outline-none  px-2 py-2"
          />
          <p className="text-red-500">{error?.qty}</p>
        </div>
        {/* <button
          type="submit"
          // onClick={() => {
          //   onclick && onclick();
          // }}
          className="p-2 border rounded-md col-span-2 bg-blue-500 text-white"
        >
          Submit
        </button> */}
        <Button title={"Submit"} type="submit" className="col-span-2" />
      </div>
    </form>
  );
};

export default AddProducts;
