import { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { ShoppingCartOutlined, ReadOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/AuthContext";

const { Header } = Layout;

const Navbar = () => {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    navigate("/");
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
      <div className="logo" onClick={handleLogoClick}>
        <ReadOutlined style={{ fontSize: "35px" }} />
        bookStore
      </div>

      <Menu
        style={{
          width: "400px",
        }}
        onClick={handleClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[current]}
      >
        <Menu.Item key="books">Books</Menu.Item>
        <Menu.Item key="cart">
          {" "}
          <a href="/cart" className="cart-navbar-link">
            <Badge count={0}>
              <ShoppingCartOutlined
                className="cart-icon"
                style={{ fontSize: "23px" }}
              />
            </Badge>
          </a>
        </Menu.Item>

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
