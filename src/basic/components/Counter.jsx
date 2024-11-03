import React, { useState } from "react";

function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);

  function handleClickEvent() {
    setCount((prev) => prev + 1);
    onClick();
  }

  return (
    <div className="counter">
      <span className="number">
        {count}  <span className="total"> /{total}</span>
      </span>
      <button className="button" onClick={handleClickEvent}>
        Add +
      </button>

      <button
        // className="button"
        onClick={() => {
          /** setState 여러번 호출 시
           * closure 와 연관됨
           *
           * 현재 상태를 호출 시 내부 상태를 스냅샷을 뜸
           * 현재 카운트를 저장 = 렉시컬 스코프
           * 해당 카운트를 모두 공유하게 됨()
           */
          //   setCount(count + 1);// 여기의 모든 카운트 0으로 공유됨
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          // setCount 가 이전 상태값을 사용하지 않도록 수정
          //   기존의 state 를 받는게 아니라 setCount에서 넘겨주는 이전 상태 값을 받아서 처리하는게 더 안전함
          // setCount((prev) => prev + 1);
          // setCount((prev) => prev + 1);
          // setCount((prev) => prev + 1);
          // setCount((prev) => prev + 1);
          // console.log(" cnt >>>>" + cnt);
          // console.log(" cnt >>>>" + cnt);
          // console.log(" count >>>>" + count);
        }}
      >
        Add +
      </button>
    </div>
  );
}

export default Counter;
