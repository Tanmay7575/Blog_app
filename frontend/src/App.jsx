import { useState } from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="p-6 flex-1 flex flex-col">

        {/* Responsive container with fixed height to stretch items */}
        <div className="flex flex-col md:flex-row gap-6 flex-grow min-h-[400px]">
  <div className="w-full md:w-1/3 h-full border border-gray-300 rounded-lg p-4">
    <BlogForm />
  </div>
  </div>
  {/* {/* <div className="w-full md:w-2/3 h-full border border-gray-300 rounded-lg p-4">
    <BlogList onSelect={setSelectedBlogId} />
  </div>

        {/* Blog Details below */}
        {/* <div className="mt-6">
          <BlogDetails blogId={selectedBlogId} />
        </div>  */} 
        <div className="flex flex-col md:flex-row flex-grow gap-6 p-6">
  {/* Left: Blog List - takes 50% on md+ */}
  <div className="w-full md:w-1/2 h-full">
    <BlogList onSelect={setSelectedBlogId} />
  </div>

  {/* Right: Blog Details - takes 50% on md+ */}
  <div className="w-full md:w-1/2 h-full">
    <BlogDetails blogId={selectedBlogId} />
  </div>
</div>
      </div>
      
    </div>
  );
}

export default App;


