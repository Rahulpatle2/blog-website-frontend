import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Newest from "./pages/Newest.jsx";
import Contact from "./pages/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog.jsx";
import { ToastContainer } from "react-toastify";
import BlogPost from "./components/Blog/BlogPost.jsx";
import UpdateBlog from "./pages/UpdateBlog.jsx";
import NoPageFound from "./pages/NoPageFound.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Newest /> },       // default page
      { path: "newest", element: <Newest /> },
      { path: "contact", element: <Contact /> },
      {path:'createBlog', element:<CreateBlog/>},
      {path:'updateBlog/:id',element:<UpdateBlog/>},
      {path:'blog/:id',element:<BlogPost/>},
      {path:'*',element:<NoPageFound/>}

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer/>
  </>
    
    
  
);
