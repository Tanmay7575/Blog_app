
import { useEffect, useState } from "react";
import instance from "../axiosConfig";

export default function BlogDetails({ blogId }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!blogId) {
      setBlog(null);
      return;
    }
    instance
      .post("/findblog", { blog_id: blogId })
      .then((res) => {
        setBlog(res.data.blogs); // Adjust this if API shape differs
      })
      .catch(() => alert("Error loading blog"));
  }, [blogId]);

  if (!blog) {
    return (
      <p className="text-center text-gray-500 mt-4">Select a blog to view details</p>
    );
  }

  const tagsArray = typeof blog.tags === "string" ? blog.tags.split(",") : blog.tags || [];

  return (
    // <div className="w-full lg:max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden mt-6">
    <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">

      <div className="px-6 py-5">
        <h2 className="font-bold text-2xl mb-4 text-gray-900 break-words">
          {blog.title}
        </h2>
        <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line break-words">
          {blog.content}
        </p>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 flex flex-wrap gap-2">
        {tagsArray.length === 0 ? (
          <span className="text-gray-400 italic">No tags available</span>
        ) : (
          tagsArray.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag.trim()}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
