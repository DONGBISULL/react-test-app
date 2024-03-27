import logo from "./logo.svg";
import "./App.css";
/**
 * 컴포넌트 만들 때 필수 요건
 * 1. 대문자로 시작
 * 2. jsx 반환
 *
 * props state
 *
 * */
function AppJSX() {
  const name = "jjun";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello : ${name}`}</h1>
      <h1>Hello</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
