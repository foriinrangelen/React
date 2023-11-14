import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const GoodsDetail = () => {
  //상품정보를 저장하는 state를 정의하시오.
  //state명: good
  const [good, setGood] = useState();
  //GoodsItem에서 넘겨받은 상품id를 저장하는 변수를 정의하시오.
  // useParams() 활용
  // useSearchParams? = 여러정보를 보낼 때(쿼리스트링 파싱할 때 사용)
  const { id } = useParams();
  console.log("상품정보", id);

  //상품리스트에서 특정 상품정보만 JSON서버로부터 가져온 후, good state에 저장하는
  //getGoods함수를 구현하시오.
  //요청URL : http://localhost:3004/goods_list/상품id

  //useEffect()를 이용하여 getGoods 함수를 한 번만 호출하시오.
  // const getGoods = async () => {
  //   try {
  //     let res = await axios.get(`http://localhost:3004/goods_list/${pro_no.id}`);
  //     setGood(res.data);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getGoods = () => {
    axios
      .get(`http://localhost:3004/goods_list/${id}`)
      .then((res) => {
        setGood(res.data);
        console.log(res.data);
        return "123";
      })
      .then((a) => {
        console.log("1231242", a);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getGoods();
  }, []);
  return (
    <div className="goods-detail-box">
      {good ? (
        <>
          {" "}
          <div className="goods-detail-box-thumb">
            <img src={good?.detail?.sub_thumb} alt="이미지" />
          </div>
          <div className="goods-detail-box-info">
            <div className="goods-detail-title">
              <div className="goods-icon">
                {/* 해당 상품이 new인지 best인지 조건부 렌더링을 통해 출력하시오. */}
                {good?.new ? (
                  <em className="goods-new">new</em>
                ) : good?.best ? (
                  <em className="goods-best">best</em>
                ) : (
                  ""
                )}
              </div>
              <p className="goods-detail-name">{good?.name}</p>
              <p className="goods-detail-txt">{good?.detail?.txt}</p>
              <div className="goods-detail-price-box">
                <strong>{good?.price}</strong>
                <span>원</span>
              </div>
            </div>
            <div className="goods-detail-summary">{good?.detail?.summary}</div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default GoodsDetail;
