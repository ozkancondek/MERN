import { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  ReadOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../../context/AuthContext";

const { Header } = Layout;

const Navbar = () => {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    navigate(`/`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  const handleClick = (e) => {
    setCurrent({ current: e.key });
    if (e.key === "logout") {
      handleLogout();
    } else navigate(`/${e.key}`);
  };

  return (
    <Header>
      <div
        className="logo"
        src="https://image.shutterstock.com/image-photo/image-260nw-722253286.jpg"
        alt="logo"
        onClick={handleLogoClick}
      >
        {" "}
        <ReadOutlined style={{ fontSize: "35px" }} />
        <HeartOutlined style={{ fontSize: "35px" }} />
        <ShoppingOutlined style={{ fontSize: "35px" }} />
      </div>

      <Menu
        style={{ border: "2px solid red" }}
        inlineCollapsed={false}
        onClick={handleClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[current]}
      >
        <Menu.Item key="books">Books</Menu.Item>

        <a href="/cart" className="cart-navbar-link">
          <Badge count={1}>
            <ShoppingCartOutlined className="cart-icon" />
          </Badge>
        </a>
        {isLoggedIn ? (
          <Menu.Item key="logout" onClick={handleLogout}>
            Logout
          </Menu.Item>
        ) : (
          <>
            <Menu.Item key="signin">Sign In</Menu.Item>
            <Menu.Item key="signup">Sign Up</Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
