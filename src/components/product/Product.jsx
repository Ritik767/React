import { useEffect, useState } from "react";
import Card from "../common/Card";
import Title from "../common/Title";

const ProductList = () => {
  const [list, setList] = useState([
    {
      title: "Nature",
      dec: "lorem ipsum lorem",
      id: 1,
      image:
        "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg",
    },
    {
      title: "Winter",
      dec: "Winter season is very cold.",
      id: 1,
      image:
        "https://cdn.mos.cms.futurecdn.net/8Zw7hWD5ZaquyftsRbEmof-1200-80.jpg",
    },
    {
      title: "Boat",
      dec: "Boating is lorem ipsum.",
      id: 1,
      image:
        "https://www.navionics.com/media/magefan_blog/20210312_Support_MRN_0774_1_5.jpg",
    },
    {
      title: "Great Himalayas",
      dec: "Moye Moye",
      id: 1,
    },
  ]);
  // useEffect(() => {
  //   alert("hello");
  // }, [list]);
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <Title title={"Products"} />
        <button
          onClick={() => {
            setList((pre) => {
              return [
                ...pre,
                {
                  title: "Name",
                  dec: "Description",
                  id: 1,
                },
              ];
            });
          }}
        >
          add
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.isArray(list) &&
          list.map((item, index) => {
            return (
              <Card
                key={index}
                dec={item?.dec}
                pic={item?.image}
                title={item?.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;