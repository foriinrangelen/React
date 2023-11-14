import { useSelector } from "react-redux";
import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsItem = () => {
  const search = useSelector((state) => state.search.search);
  console.log("아이템에서의 서치리스트", search);
  return (
    <div>
      {search.map((item) => (
        <Card>
          <Card.Header as="h5">{item.title}</Card.Header>
          <Card.Body>
            <Card.Title>{item.pubDate}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <a href={item.originallink} variant="primary" target="_blank">
              이동
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NewsItem;

// function NewsItem() {
//   <div>NewsItem</div>;
// }

// export default NewsItem;
