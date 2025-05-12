/* 
  JSX에서의 이벤트 핸들링 기본 개념

  React와 일반 HTML의 이벤트 처리 방식 차이점:
  1. 이벤트 이름은 camelCase로 작성 (HTML: onclick, React: onClick)
  2. 이벤트 핸들러는 함수 참조로 전달 (문자열 X)
  3. 기본 동작 방지를 위해 preventDefault()를 명시적으로 호출

  기본 문법: <요소 이벤트명={핸들러함수}>
*/

"use client"; // 해당 파일이 클라이언트 사이드에서 실행되어야 한다라는걸 선언
// use client를 명시적으로 선언하지 않으면, 서버 컴포넌트로 동작하고,
// 선언하면 클라이언트 컴포넌트로 동작

import React from "react";

export default function BasicEventHandling() {
  // 이벤트 핸들러 함수 정의
  const handleClick = () => {
    console.log("버튼이 클릭되었습니다.");
    alert("버튼 클릭!");
  };

  return (
    <div>
      <h2>기본 이벤트 핸들링</h2>
      {/* 기본 클릭 이벤트 */}
      <button onClick={handleClick}>클릭 ㄱㄱ</button>

      <hr />

      {/* HTML과 React 이벤트 비교 */}
      <div style={{ marginTop: "20px" }}>
        <h3>HTML vs React 이벤트 처리 비교</h3>
        <pre>
          {`
              html 방식 : <button onclick="handleClick()">...
              react 방식 : <button onClick={handleClick}>...
            `}
        </pre>
      </div>

      {/* 잘못된 이벤트 핸들링 예시 */}
      {/* <button onClick={handleClick()}>클릭 ㄱㄱ2</button> */}
      {/* 올바른 방식 (함수 참조를 전달) */}
      <button onClick={handleClick}>클릭 ㄱㄱ2</button>
      <p>잘못된 방식에서는 렌더링 시점에 함수가 즉시 실행되며, 이벤트 핸들로 undefined가 할당된다.</p>
    </div>
  );
}
