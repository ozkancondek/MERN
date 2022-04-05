import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="site-layout-content">
      <Button ghost className="main-button" onClick={() => navigate("/books")}>
        Get Started
      </Button>
    </div>
  );
}

export default Main;
