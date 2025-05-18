import { useEffect, useState } from "react";
import instance from "../axiosConfig";

export default function BlogList({ onSelect }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    instance.get("/Allblogs")
      .then(res => setBlogs(res.data))
      .catch(err => alert("Error fetching blogs"));
  }, []);

  const publishedBlogs = blogs.filter(blog => blog.status === "published");
  const draftBlogs = blogs.filter(blog => blog.status === "draft");

  return (
    // <div className=" max-w-6xl mx-auto p-6 bg-white rounded shadow">
    <div className="w-full h-full p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">All Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Published Blogs */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-700 text-center">Published</h3>
          <ul className="flex flex-wrap gap-3 justify-center">
            {publishedBlogs.map(blog => (
              <li
                key={blog._id}
                onClick={() => onSelect(blog._id)}
                className="cursor-pointer px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 font-medium text-sm rounded-full shadow-sm transition"
              >
                {blog.title}
              </li>
            ))}
            {publishedBlogs.length === 0 && (
              <p className="text-gray-500 text-center">No published blogs</p>
            )}
          </ul>
        </div>

        {/* Draft Blogs */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-yellow-700 text-center">Drafts</h3>
          <ul className="flex flex-wrap gap-3 justify-center">
            {draftBlogs.map(blog => (
              <li
                key={blog._id}
                onClick={() => onSelect(blog._id)}
                className="cursor-pointer px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium text-sm rounded-full shadow-sm transition"
              >
                {blog.title}
              </li>
            ))}
            {draftBlogs.length === 0 && (
              <p className="text-gray-500 text-center">No draft blogs</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

