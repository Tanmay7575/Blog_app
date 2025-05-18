import { useEffect, useRef, useState } from "react";
import instance from "../axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlogForm({ selectedBlog }) {
  const [form, setForm] = useState({ id: "", title: "", content: "", tags: "" });
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);
  const lastSavedRef = useRef(Date.now());

  useEffect(() => {
    if (selectedBlog) {
      setForm({
        id: selectedBlog._id || "",
        title: selectedBlog.title || "",
        content: selectedBlog.content || "",
        tags: selectedBlog.tags || "",
      });
    }
  }, [selectedBlog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setIsTyping(true);

    clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      saveDraft(true); // auto-save silently
      setIsTyping(false);
    }, 10000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (!isTyping && now - lastSavedRef.current >= 30000) {
        saveDraft(true);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isTyping]);

  const saveDraft = async (silent = false) => {
    try {
      await instance.post("/save-draft", form);
      lastSavedRef.current = Date.now();
      if (silent) {
        toast.info("Auto-saved draft");
        setTimeout(() => window.location.reload(), 1000);
      } else {
        toast.success("Draft saved");
        setTimeout(() => window.location.reload(), 1000);
      }
    } catch (error) {
      if (!silent) toast.error("Failed to save draft");
      console.error(error);
    }
  };

  const publishBlog = async () => {
    try {
      await instance.post("/publish", form);
      toast.success("Blog published");
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      toast.error("Failed to publish blog");
      console.error(error);
    }
  };

  return (
    <div className="flex-1 justify-center">
      <div className="w-full px-2 py-3 mb-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {form.id ? "Edit Blog" : "Create Blog"}
        </h2>

        {/* Title and Tags in one line */}
        <div className="flex gap-4 mb-3">
          <input
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input
            className="w-70 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            name="tags"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleChange}
            required
          />
        </div>

        {/* Content textarea full width */}
        <textarea
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />

        <div className="flex flex-wrap gap-4 justify-end pt-2">
          <button
            onClick={() => saveDraft(false)}
            className="px-5 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all"
          >
            Save as Draft
          </button>
          <button
            onClick={publishBlog}
            className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all"
          >
            Publish
          </button>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}
