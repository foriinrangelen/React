import { useSelector } from "react-redux";
import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsItem = () => {
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371e3; // Earth's radius in meters
    const degToRad = Math.PI / 180;

    // Convert latitude and longitude from degrees to radians
    const lat1Rad = lat1 * degToRad;
    const lon1Rad = lon1 * degToRad;
    const lat2Rad = lat2 * degToRad;
    const lon2Rad = lon2 * degToRad;

    // Haversine formula
    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Calculate the distance in meters
    const distance = earthRadius * c;

    return distance;
  }

  // 인사교 위치
  const lat1 = 35.1465728; // 첫 번째 지점의 위도
  const lon1 = 126.922262; // 첫 번째 지점의 경도
  // 식당 좌표
  const lat2 = 35.1470859; // 두 번째 지점의 위도
  const lon2 = 126.9231119; // 두 번째 지점의 경도

  const distance = Math.floor(
    calculateDistance(lat1, lon1, lat2, lon2).toFixed(2)
  );
  search.map((item) => {
    item.mapx.splice(2, ".");
  });
  console.log(distance);
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
