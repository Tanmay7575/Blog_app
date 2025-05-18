# Blog App

This is a full-stack blog application built with **MERN** stack:

- Frontend: React + TailwindCSS (in `frontend/`)
- Backend: Node.js + Express + MongoDB (in `backend/`)
- Dev Tools:Nodemon ,Axios,dotenv

---

## 📁 Project Structure
blog_app/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── .env
│ ├── package.json
│ └── ...
│
## ├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ ├── tailwind.config.js
│ ├── vite.config.js
│ ├── package.json
│ └── ...
│
└── README.md

## 🚀 How to Run

### 1️⃣ Backend (Express + MongoDB)

1. Open terminal in the `backend/` folder:

```bash
cd backend
npm install
MONGO_URI=your_mongodb_connection_string_here
nodemon server.js

##How to run

### 2️⃣ Frontend (Vite React)
Another terminal
 Frontend (React + Vite)
cd frontend
npm install
npm run dev

App will run on:
🌐 http://localhost:5173


