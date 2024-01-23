import { useEffect, useState } from "react";
import Title from "../common/Title";
import Button from "../common/Button";

const Addproduct = () => {
  const [inputData, setInputData] = useState({
    name: "",
    Category: "",
    exp: "",
    rate: "",
    ["Re-order"]: "",
    Qty: "",
  });
  const [error, setError] = useState({});
  const [isValidate, setIsValidate] = useState(false);

  const validation = (value) => {
    let newErr = {};
    if (!value.name) {
      newErr = { ...newErr, name: "No name" };
    }
    if (!value.Category) {
      newErr = { ...newErr, Category: "No Category" };
    }
    if (!value.rate) {
      newErr = { ...newErr, rate: "No rate" };
    } else if (value.rate < 100) {
      newErr = {
        ...newErr,
        rate: "Rate must be atleast 100",
      };
    }
    if (!value.Qty) {
      newErr = { ...newErr, Qty: "No Qty" };
    }
    return newErr;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setError(validation(inputData));
    setIsValidate(true);
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
  };

  const postData = () => {
    console.log("okay", inputData);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isValidate) {
      postData();
    }
  }, [error, isValidate]);

  return (
    <form onSubmit={handelSubmit} className="mt-[40px]">
      <Title title={"Add Product"} />
      <div className="grid grid-cols-2 gap-6 px-4 py-8">
        <div className="productInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.name}
            name="name"
            id="name"
          />
          <p className="text-sm text-red-500">{error?.name}</p>
        </div>
        <div className="productInput">
          <label htmlFor="Category">Category</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.Category}
            name="Category"
            id="Category"
          />
          <p className="text-sm text-red-500">{error?.Category}</p>
        </div>
        <div className="productInput col-span-2">
          <label htmlFor="Exp">Exp Date</label>
          <input
            type="date"
            onChange={handleChange}
            value={inputData.exp}
            name="exp"
            id="Exp"
          />
        </div>
        <div className="productInput col-span-2">
          <label htmlFor="Rate">Rate</label>
          <input
            type="number"
            onChange={handleChange}
            value={inputData.rate}
            name="rate"
            id="Rate"
          />
          <p className="text-sm text-red-500">{error?.rate}</p>
        </div>
        <div className="productInput">
          <label htmlFor="Re-order">Re-order Level</label>
          <input
            type="number"
            onChange={handleChange}
            value={inputData["Re-order"]}
            name="Re-order"
            id="Re-order"
          />
        </div>
        <div className="productInput">
          <label htmlFor="Qty">Qty</label>
          <input
            type="number"
            onChange={handleChange}
            value={inputData.Qty}
            name="Qty"
            id="Qty"
          />
          <p className="text-sm text-red-500">{error?.Qty}</p>
        </div>
        <Button title={"Submit"} type="submit" className="col-span-2" />
      </div>
    </form>
  );
};

//   return (
//     <form onSubmit={handleSubmit} className="mt-[40px]">
//       <Title title={"Add Product"} />
//       <div className="grid grid-cols-2 gap-6 px-4 py-8">
//         <div className="productInput">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => {
//               console.log(e);
//               setName(e.target.value);
//             }}
//           />
//         </div>
//         <div className="productInput">
//           <label htmlFor="Category">Category</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => {
//               console.log(e);
//               setCategory(e.target.value);
//             }}
//             id="Category"
//           />
//         </div>
//         <div className="productInput col-span-2">
//           <label htmlFor="Exp">Exp Date</label>
//           <input type="text" id="Exp" />
//         </div>
//         <div className="productInput col-span-2">
//           <label htmlFor="Rate">Rate</label>
//           <input type="text" id="Rate" />
//         </div>
//         <div className="productInput">
//           <label htmlFor="Re-order">Re-order Level</label>
//           <input type="text" id="Re-order" />
//         </div>
//         <div className="productInput">
//           <label htmlFor="Qty">Qty</label>
//           <input type="text" id="Qty" />
//         </div>
//         <Button title={"Submit"} type="submit" className="col-span-2" />
//       </div>
//     </form>
//   );
// };

export default Addproduct;
