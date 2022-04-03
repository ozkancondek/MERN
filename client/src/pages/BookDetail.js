import React, { useState } from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "../helper/FetchData";
import { ShoppingCartOutlined, LikeOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const { Meta } = Card;
export default function BookDetail() {
  const params = useParams();
  const [book, setBook] = useState([]);
  const { setSelectedBookList, selectedBookList } = useContext(AuthContext);

  const isAdded = selectedBookList.filter(
    (b) => b.bookName === book?.title
  ).length;

  const addToBasket = () => {
    setSelectedBookList([
      ...selectedBookList,
      {
        bookName: book?.title,
        count: 1,
        price: 23,
        image: book?.image,
      },
    ]);
  };

  useEffect(() => {
    fetchData("/api/books").then((data) => {
      setBook(data?.bookList.filter((b) => b._id === params.book_id)[0]);
    });
  }, []);

  return (
    <div>
      <Card
        style={{ width: 500 }}
        cover={<img alt="example" src={book?.image} />}
        actions={[
          <ShoppingCartOutlined
            onClick={() => addToBasket()}
            style={{ color: isAdded > 0 ? "blue" : null }}
          />,
          <LikeOutlined />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta title={book?.title} description={book?.description} />
        <Meta
          title="Information"
          description={`${book?.author}, ${book?.pages} page, ${book?.category}`}
        />
      </Card>
      ,
    </div>
  );
}
