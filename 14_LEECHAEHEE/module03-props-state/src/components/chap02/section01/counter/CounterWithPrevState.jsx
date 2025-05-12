"use client";
import { useState } from "react";

export default function CounterPrevState() {
  const [number, setNumber] = useState(0);
  const [logs, setLogs] = useState([]);

  // 문제상황 - 직접 상태값을 참조해서 연속으로 업데이트

  const handleWrongInscrease = () => {
    setLogs([]); // 로그 초기화
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);

    // 예상은 0 + 1 + 1 + 1 + 1 = 4
    // 하지만 실제 결과는 1(마지막 setNumber만 반영됨)

    // setState는 비동기로 동작
  };

  // 상태 변경 함수 (prevState)
  const handleCorrectIncrease = () => {
    setLogs([]); // 로그 초기화화
    setNumber((prev) => {
      const updated = prev + 1;
      setLogs((logs) => [...logs, `1단계: ${prev} + 1 = ${updated}`]);
      return updated;
    });

    setNumber((prev) => {
      const updated = prev + 1;
      setLogs((logs) => [...logs, `2단계: ${prev} + 1 = ${updated}`]);
      return updated;
    });

    setNumber((prev) => {
      const updated = prev + 1;
      setLogs((logs) => [...logs, `3단계: ${prev} + 1 = ${updated}`]);
      return updated;
    });

    setNumber((prev) => {
      const updated = prev + 1;
      setLogs((logs) => [...logs, `4단계: ${prev} + 1 = ${updated}`]);
      return updated;
    });
  };

  return (
    <>
      <h1 style={{ color: number < 0 ? "red" : "blue" }}>Counter: {number}</h1>

      <button onClick={() => setNumber((prev) => prev - 1)}>-1</button>
      <button onClick={handleWrongInscrease}>+1 X 4</button>

      <button onClick={handleCorrectIncrease}>+1 X 4</button>

      <hr />
      <h3>상태변화 로그</h3>
      <ul>
        {/* map함수 사용시 key값 필수 */}
        {logs.map((log, i) => (
          <li key={i} style={{ fontFamily: "monospace" }}>
            {log}
          </li>
        ))}
      </ul>
     
    </>
  );
}
