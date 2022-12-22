import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext, FirebaseContext } from "./context/Context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Post from "./context/postContext";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import CreatePage from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/view" element={<ViewPost />} />
          </Routes>
        </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
