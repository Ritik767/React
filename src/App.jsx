import { Outlet, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
// import Login from "./page/Login"
import Layout from "./components/static/Layout";
import Work from "./page/Work";
import About from"./page/About";
import Contact from "./page/Contact";
import Project from "./page/Project"




const App = ()=> {
  // const [isOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // return (
  //   <main>
  //    <Home/>
  //    <Login/>
  //   </main>
  // );

  const router = useRoutes([
    {
      path:"/",
      element:<Layout/>,
      children:[{

        index:true,
        element:<Home/>,
      },
      {
        path:"projects",
        element:<Project/>,
      },{
        path:"work",
        element:<Work/>,
      },{
        path:"about",
        element:<About/>,
      },{
        path:"contact",
        element:<Contact/>,
      },
    
    ],
    },
  ]);
  return router;

};
export default App;
