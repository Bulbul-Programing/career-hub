import { createBrowserRouter } from "react-router-dom";
import Rote from "../Component/Rote/Rote";
import Home from "../Component/Home/Home";
import ShowDetail from "../Component/ShowDetail/ShowDetail";
import AppliedJob from "../Component/AppliedJob/AppliedJob";
import ErrorElement from "../Component/ErrorElement/ErrorElement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Rote></Rote>,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/job/:showDetail',
          element: <ShowDetail></ShowDetail>,
          loader:() => fetch('../jobs.json') 
        },
        {
          path: '/applied-job',
          element: <AppliedJob></AppliedJob>,
          loader:()=> fetch('../jobs.json')
        },
        {
          path: '/blog',
          element: <div className="text-5xl font-extrabold text-center my-40">Blog Coming Soon.....</div>
        }
    ]
    },
  ]);

export default router;