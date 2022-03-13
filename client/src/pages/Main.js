import { Layout, Button } from "antd";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const { Content } = Layout;

function Main() {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <div className="site-layout-content">
      <Button
        ghost
        className="main-button"
        onClick={() => {
          console.log(isLoggedIn);
        }}
      >
        Get Started
      </Button>
    </div>
  );
}

export default Main;
