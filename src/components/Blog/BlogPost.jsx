import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogContext from "../../context/blogContext.js";


const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, setData } = useContext(BlogContext);

  
  const finedData = data.find((item) => item._id === id);

  
  useEffect(() => {
    if (!finedData) {
      navigate("/newest", { replace: true });
    }
  }, [finedData, navigate]);

  
  if (!finedData) return null;

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 text-white shadow-lg rounded-2xl p-6 sm:p-10">

        {/* Blog Image */}
        {finedData.imageUrl && (
          <img
            src={finedData.imageUrl}
            alt="Blog Banner"
            loading="lazy"
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-md"
          />
        )}

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold  mt-6 leading-tight">
          {finedData.title}
        </h1>

        {/* Date + Author */}
        <div className="mt-3 flex flex-wrap gap-3 text-sm ">
          <p>📅 Published on {finedData.date}</p>
          <p>✍️ By <span className="font-semibold text-blue-600">{finedData.author.username}</span></p>
        </div>

        <div className="my-6 border-t border-gray-200"></div>

        {/* Full Blog Details */}
        <p className="text-base leading-7 whitespace-pre-line">
          {finedData.details}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={(e) => {
              
              navigate(`/update-blog/${finedData._id}`);
            }}
            className="px-4 py-2 rounded text-white bg-blue-500"
          >
            Update Blog
          </button>

          
        </div>

      </div>
    </div>
  );
};

export default BlogPost;
