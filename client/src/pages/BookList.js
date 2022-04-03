import React, { useState, useEffect } from "react";
import { MediaCard } from "../components/MediaCard";
import { Tag } from "antd";
import { fetchData } from "../helper/FetchData";

const { CheckableTag } = Tag;

const tagsData = ["Any", "Animals", "Arch", "Nature", "People", "Tech"];

const BookList = () => {
  const [selectedTag, setSelectedTag] = useState("Any");
  const [bookList, setBookList] = useState([]);
  const [filteredBookList, setFilteredBookList] = useState([]);

  //get booklist from db and assign to bookList state
  useEffect(() => {
    fetchData("/api/books").then((data) => {
      setBookList(data?.bookList);
    });
  }, []);
  //filter data according to change then assign it to  filteredBookList state
  useEffect(() => {
    const newList =
      selectedTag === "Any"
        ? bookList
        : bookList.filter((item) => {
            return item?.category === selectedTag.toLowerCase();
          });
    setFilteredBookList(newList);
  }, [bookList, selectedTag]);

  const handleChange = (tag, checked) => {
    const nextSelectedTag = checked ? tag : "Any";
    setSelectedTag(nextSelectedTag);
  };

  return (
    <div className="book-list-wrapper">
      <div className="book-filter">
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTag.indexOf(tag) > -1}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
      <div className="book-list-wrapper">
        {filteredBookList?.length > 0
          ? filteredBookList.map((book, index) => {
              return (
                <MediaCard
                  key={index}
                  title={book?.title}
                  author={book?.author}
                  imgSrc={book?.image}
                  description={book?.description}
                  id={book?._id}
                />
              );
            })
          : null}
        {/*  //add here spinner */}
      </div>
    </div>
  );
};

export default BookList;
