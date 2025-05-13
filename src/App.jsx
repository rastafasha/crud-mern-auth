import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContex";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import TasksUserPage from "./pages/TasksUserPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/homePage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <main className="container mx-auto px-10">
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            
            <Route element={<ProtectedRoute/>}>
              <Route path="/tasks" element={<TasksPage/>}></Route>
              <Route path="/add-task" element={<TaskFormPage/>}></Route>
              <Route path="/tasks/user/:id" element={<TasksUserPage/>}></Route>
              <Route path="/profile" element={<ProfilePage/>}></Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
