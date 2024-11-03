import React, { useEffect, useState } from "react";

function Products(props) {
  // check 가 변경이 될 때마다 새로 불러와야 함 => dependency 로 전달해줘야 함
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  //   useEffect 로 처리해줌
  // 렌더링 / 이벤트 처리
  useEffect(() => {
    // 매번 렌더링 될 때 실행됨
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("함수 호출 ");
        setProducts(data);
      });
    //   컴포넌트 호출 시 정리해야하는 로직 필요할 경우
    // (컴포넌트 unmount 될 때 사용)
    // return 함수로 선언
    return () => {
      console.log("unmount 로직 ");
    };
    // vue 의 watch 와 비슷한 듯 ??
  }, [checked]);
  /**
   *
   * // 디펜던시 인자로 전달
   *  텅빈 배열 전달하여 컴포넌트 보여질때만 호출
   *
   */

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale </label>
      <ul>
        {products.map((product) => (
          // 리스트 안의 자식들 고유한 key 값이 필요함!!
          // 없을 경우 list should have a unique "key" prop. vue 와 동일 
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
