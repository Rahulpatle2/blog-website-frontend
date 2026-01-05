import { lazy} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
const Newest = lazy(() => import('./pages/Newest.jsx'))
const Contact = lazy(() => import("./pages/Contact.jsx"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const CreateBlog = lazy(() => import("./pages/CreateBlog.jsx")) ;
import { ToastContainer } from "react-toastify";
const BlogPost = lazy(() => import("./components/Blog/BlogPost.jsx")) ;
const UpdateBlog = lazy(() => import("./pages/UpdateBlog.jsx")) ;
import NoPageFound from "./pages/NoPageFound.jsx";
const SignIn = lazy(() => import("./components/SignIn.jsx")) ;
const SignUp = lazy(() => import("./components/SignUp.jsx")) ;
const Home = lazy(() => import("./pages/Home.jsx")) ;




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },       // default page
      { path: "newest", element: <Newest /> },
      { path: "contact", element: <Contact /> },
      {path:'create-blog', element:<CreateBlog/>},
      {path:'update-blog/:id',element:<UpdateBlog/>},
      {path:'blog/:id',element:<BlogPost/>},
      {path:'*',element:<NoPageFound/>}
      

    ],
  },
  {path:'/signin',element:<SignIn/>},
  {path:'/signup',element:<SignUp/>},

]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer/>
  </>
    
    
  
);
