
import { useEffect, useState } from "react";
// import Title from "../components/common/Title";
import Button from "../components/common/Button";

const Login = () => {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const [isValidate, setIsValidate] = useState(false);

  const validation = (value) => {
    let err = {};
    if (!value.username) {
      err = { ...err, username: "Username needed" };
    } else if(value.username.length < 5)
    {
      err = {...err, username:"Minimum length 5"};
    }
    if (!value.password) {
      err = { ...err, password: "Password needed" };
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
        value?.password)
      ){
        err = {...err, password: "Strong password needed"};
      }
    return err;
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isValidate) {
      console.log("Datas are:", inputData);
    }
  }, [error, isValidate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(inputData));
    setIsValidate(true);
  };

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);
    // console.log(inputData);
    setInputData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
// const [password, setPassword] = useState("");
// const [visible, setVisible] = useState(true);

  return (
    <div className="w-full bg-blue-200 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full m-2 !max-w-[400px] p-10 rounded-md shadow-lg"
      >
        <h1 className="text-center font-bold text-2xl text-rose-600">Login page</h1>
        <div className="mt-4 space-y-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              value={inputData?.username}
              
              type="text"
              name="username"
              className="border rounded-md px-4 py-2 shadow outline-none"
            />
            <p className="text-red-500">{error?.username}</p>
          </div>
          <div className="productInput">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              
              value={inputData?.password}
              type="password"
              name="password"
             
            />
            <p className="text-red-500">{error?.password}</p>
          </div>
        </div>
        <Button title={"Login"} className="w-full mt-8 bg-rose-500" />
      </form>
    </div>
  );
};
export default Login;
