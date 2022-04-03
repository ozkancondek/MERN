import { useState } from "react";
import { Skeleton, Switch, Card, Avatar, Button } from "antd";
import "../App.css";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export const MediaCard = ({ title, author, imgSrc, id }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="media-card-container">
      <Skeleton loading={loading}>
        <Card
          hoverable
          loading={loading}
          className="media-card"
          cover={<img alt="cover" src={imgSrc} height="350px" />}
        >
          <Meta title={title} description={author} />
        </Card>
        <Button type="primary" onClick={() => navigate("/books/" + id)}>
          Details
        </Button>
      </Skeleton>
    </div>
  );
};
