import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../pages/Main";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ForgotPassword from "../pages/ForgotPassword";
import BookDetail from "../pages/BookDetail";
import BookList from "../pages/BookList";
import Navbar from "../components/header/Navbar";
import Footer from "../components/Footer/Footer";
import { Layout } from "antd";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";

const { Content } = Layout;

function AppRouter() {
  // const { currentUser } = useContext(FirebaseAuthContext);
  const currentUser = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Navbar />
      <Content>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/books" element={<BookList />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/books:id" element={<BookDetail />} />
          <Route
            exact
            path="/profile"
            element={currentUser ? <Dashboard /> : <Signin />}
          />
          <Route
            exact
            path="/cart"
            element={currentUser ? <Cart /> : <Signin />}
          />
          <Route path="/" element={<Main />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
