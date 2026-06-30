# 🎓 Student Productivity Dashboard

A modern, responsive **React + Vite** web application designed to help students manage their academic life — tasks, notes, courses, and important dates — all in one clean dashboard.

Built as part of my **Full Stack Web Development Internship** at **Global Quest Technologies (GQT)**.

---

## ✨ Features

- 🔐 **Authentication** — Simple Signup & Login flow with client-side validation
- 📊 **Dashboard** — Time-based greeting, task statistics (total, pending, completed)
- ✅ **Task Manager** — Add, toggle, and delete daily tasks with live updates
- 📚 **Study Notes** — Subject-wise PDF viewer (DSA, DBMS, OS, System Design, Aptitude) with download support
- 🎥 **Courses** — Curated YouTube playlists embedded per subject
- 📅 **Study Calendar** — Add and track exams, deadlines, and important events
- 🧭 **Persistent Navigation** — Sidebar & Navbar present across all pages
- 💾 **Local Persistence** — User data, tasks, and events stored via `localStorage`

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React.js (Functional Components, Hooks) |
| Routing | React Router DOM |
| Build Tool | Vite |
| Styling | CSS3 |
| State Management | React `useState` |
| Storage | Browser `localStorage` |
| Linting | ESLint |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Top navigation bar
│   └── Sidebar.jsx       # Persistent side navigation
├── layout/
│   └── MainLayout.jsx    # Shared layout wrapper
├── pages/
│   ├── Dashboard.jsx     # Task management & overview
│   ├── Notes.jsx         # Subject-wise PDF notes
│   ├── Courses.jsx       # YouTube playlist viewer
│   ├── Calendar.jsx      # Event & deadline tracker
│   ├── Login.jsx         # User login
│   └── Signup.jsx        # User registration
├── App.jsx               # Root component & route definitions
└── main.jsx               # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/atharv7676/Internship-Project.git

# Navigate into the project
cd Internship-Project

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173/` 🎉

---

## 📸 Screenshots

| Login | Dashboard |
|---|---|
| Clean authentication screen | Task overview with live stats |

| Notes | Calendar |
|---|---|
| Subject-wise PDF viewer | Manage exams & deadlines |

---

## 🧠 What I Learned

This project served as a hands-on introduction to React fundamentals, including:
- Component-based architecture & reusable UI design
- Props & state management with `useState`
- Client-side routing using React Router
- Event handling and dynamic DOM updates
- Working with `localStorage` for data persistence

---

## 🔮 Future Improvements

- [ ] Replace `localStorage` with a backend (Node.js + Express + MongoDB)
- [ ] Add proper authentication with JWT
- [ ] Implement dark mode
- [ ] Add task categories & filters
- [ ] Make calendar events sync with notifications

---

## 👤 Author

**Atharv Prakash Morabale**
B.E. Computer Science & Engineering, VSMSRK Institute of Technology, Nipani
📧 atharvmorabale7@gmail.com

---

## 🙏 Acknowledgements

Developed during the **MERN Full Stack Internship** at [Global Quest Technologies (GQT)](https://gqtech.in/), under the mentorship of **Mr. G.R. Narendra**.

---

⭐ If you found this project helpful, consider giving it a star!
