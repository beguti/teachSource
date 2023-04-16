import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Pages/main";
import Login  from "./Pages/login";
import MainLayout from "./Components/mainLayout";
import AuthLayout from "./Components/authLayout";
import AddPost from "./Pages/addPost";
import Profile from "./Pages/profile";
import NotFound from "./Pages/notFound";

function App() {

  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/addPost" element={<AddPost />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/*" element={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
