import { useEffect, useMemo, useState } from "react";
import Card from "../common/Card";
import Title from "../common/Title";

const ProductList = () => {
  const [list, setList] = useState([
    {
      title: "Nature",
      dec: "lorem ipsum lorem",
      id: 1,
      price: 400,
      qty: 23,
      image:
        "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg",
    },
    {
      title: "Winter",
      dec: "Winter season is very cold.",
      id: 2,
      qty: 45,
      price: 300,
      image:
        "https://cdn.mos.cms.futurecdn.net/8Zw7hWD5ZaquyftsRbEmof-1200-80.jpg",
    },
    {
      title: "Boat",
      dec: "Boating is lorem ipsum.",
      id: 3,
      qty: 45,
      price: 30,
      image:
        "https://www.navionics.com/media/magefan_blog/20210312_Support_MRN_0774_1_5.jpg",
    },
    {
      title: "Great Himalayas",
      dec: "Moye Moye",
      id: 4,
      price: 300,
      qty: 400,
    },
  ]);

  const [show, setShow] = useState("");
 const [view, setView] = useState("grid");

  // useEffect(() => {
  //   alert("hello");
  // }, [list]);

  
  // const [totalqty, setTotalQty] = useState(0);
  // useEffect(() => {
    //   setTotalQty(list.reduce((acc, item) => acc + item?.qty, 0));
    // }, [list]);
    
    const [mapData, setMapData] = useState([])

  const totalqty = useMemo(() => {
    return mapData.reduce((acc, items)=> acc + parseInt(items?.qty),0);  //parseInt for convert to all string to num
    },[mapData]);

  const totalamount = useMemo(() => {
    return mapData.reduce((acc,items)=>acc+ (items?.price * items?.qty),0); // items.qty for the after filter use to show filtered total amt
  },[mapData]);

  const filterList = useMemo(()=>{
    return mapData.filter((item)=>item?.price>150)
  },[mapData]);
   
// useEffect(()=>{
//   setMapData(list)
// },[list]);
useEffect(()=>{
  setMapData(show === "filter" ? filterList:list);
},[list, show]);

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <Title title={"Products"} />
        <div className="flex gap-2">
        <button
        className="py-1 px-3 bg-blue-600 rounded-md text-white hover:bg-blue-600"
          onClick={() => {
            setList((pre) => {
              return [
                ...pre,
                {
                  title: "Name",
                  dec: "Description",
                  id: list?.length + 1,
                  price: 300,
                  qty: 400,
                },
              ];
            });
          }}
        >
          Add
        </button>  
        <button
        className="py-1 px-3 bg-blue-600 rounded-md text-white hover:bg-blue-600"
          onClick={() => {
            setShow("filter");
          }}
        >
          Filter
        </button>
         <button
         className="py-1 px-3 bg-blue-600 rounded-md text-white hover:bg-blue-600"
          onClick={() => {
            setShow("all");
          }}
        >
          All
        </button>
        <button
         className="py-1 px-3 bg-blue-600 rounded-md text-white hover:bg-blue-600"
          onClick={() => {
            setView("grid");
          }}
        >
          Grid
        </button>
        <button
         className="py-1 px-3 bg-blue-600 rounded-md text-white hover:bg-blue-600"
          onClick={() => {
            setView("table");
          }}
        >
          Table
        </button>
      </div>
      </div>
      { view === "grid" ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* {Array.isArray(list) && */}
        {mapData.map((item, index) => {
            return (
              <Card
                key={index}
                dec={item?.dec}
                pic={item?.image}
                title={item?.title}
                price={item?.price}
                qty={item?.qty}
              />
            );
          })}
      </div> ): (
        <table className="w-full">
          <thead >
          <tr className="">
            <th>S.N</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
              {mapData.map((item, index)=>{
                return (
                <tr key={item.id} className="even:bg-pink-700">
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.price * item.qty}</td>
                </tr>
                );
              })}
          </tbody>
        </table>
      )}

      <div className="flex flex-col items-end">
        <p>Total Qty:{totalqty}</p>
        <p>Total Amount:{totalamount}</p>
      </div>
    </div>
  );
};

export default ProductList;
