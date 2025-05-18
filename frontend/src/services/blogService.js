// src/services/blogService.js

const API_BASE = "http://localhost:5000";

export const saveDraft = async (data) => {
  const res = await fetch(`${API_BASE}/save-draft`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const publishBlog = async (data) => {
  const res = await fetch(`${API_BASE}/publish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const getAllBlogs = async () => {
  const res = await fetch(`${API_BASE}/AllBlogs`);
  return res.json();
};

export const getBlogById = async (blog_id) => {
  const res = await fetch(`${API_BASE}/findBlog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ blog_id })
  });
  return res.json();
};
