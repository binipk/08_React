"use client"; // Next.js 13+에서는 useState 훅을 사용하기 위해 클라이언트 컴포넌트로 설정해주어야 한다.
import { useState } from "react";

/*
state란?
state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미하며,
props는 외부에서 전달되어 읽기만 가능하지만,
state는 컴포넌트 내부에서 설정하고 수정할 수 있다.

React에서는 클래스형 컴포넌트에서 this.state로 state를 관리하지만, 함수형 컴포넌트에서는
useState를 통해서 steae를 관리한다.
*/

export default function Counter() {
  const [number, setNumber] = useState(5);
  console.log("렌더링");
  const handler = () => {
    count = count - 1;
    console.log("check");
  } 
  let count = 0;

  return (
    <>
      <h1>{number}</h1>
      <h2>{count}</h2>
      <button onClick={() => setNumber(number - 1)}>-1</button>
      <button onClick={() => setNumber(number + 1)}>+1</button>

      <button onClick={handler}>-1</button>
      <button onClick={() => (count = count + 1)}>+1</button>
    </>
  );
}
