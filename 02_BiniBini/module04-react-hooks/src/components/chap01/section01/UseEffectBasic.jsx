/*
📌 useEffect란?
- React 함수형 컴포넌트에서 사용하는 Hook 중 하나로,
  '외부 작업(데이터 가져오기, 타이머 설정 등)'을 처리할 때 사용함.

💡 실행 시점:
- 컴포넌트가 "처음 화면에 나타난 직후" 실행됨 (렌더링 후 실행됨)

📦 기본 문법
useEffect(() => {
  // 실행할 코드
}, [의존성]); // 의존성 배열이 비어있으면 '딱 한 번만 실행'
*/

"use client"; // 👉 Next.js에서 이 파일이 클라이언트 컴포넌트임을 선언 (App Router에서 필요함)

import { useEffect, useState } from "react"; // 📦 React에서 useEffect와 useState 훅 가져오기

export default function UseEffectTodoList() {
  // 🧠 todos 상태(state) 선언
  // useState([]): 기본값은 빈 배열
  // → 나중에 받아온 할 일 목록을 이 배열에 저장할 것
  const [todos, setTodos] = useState([]);

  // ✅ useEffect: 컴포넌트가 처음 나타날 때 실행됨
  useEffect(() => {
    // 🔁 fetch(): 서버 또는 public 폴더에서 파일을 가져오는 함수
    fetch("/data/todos.json") // public 폴더 기준 경로 → 실제 주소는 http://localhost:3000/data/todos.json
      .then((res) => res.json()) // 📥 응답(response)을 JSON 형식으로 변환
      .then((data) => {
        setTodos(data); // 💾 받아온 JSON 데이터를 todos 상태에 저장
        console.log("✅ 할 일 목록 불러옴:", data); // 📋 콘솔에 데이터 출력해서 확인
      });
  }, []); // 🔒 빈 배열 → 컴포넌트가 처음 "마운트"될 때 단 한 번만 실행됨

  // ✅ 화면에 할 일 목록 렌더링하기
  return (
    <div>
      <h2>🧪 할 일 목록 예제 (useEffect + JSON)</h2>

      {/* 📝 todos 배열의 각 항목(todo)을 반복해서 보여주기 */}
      <ul>
        {todos.map((todo) => (
          // 🔑 key는 각 항목의 고유 식별자 (React가 효율적으로 렌더링하기 위해 필요)
          <li key={todo.id}>
            {/* 📋 할 일 제목 + 완료 여부 표시 */}
            📋 {todo.title} - {todo.completed ? "✅ 완료" : "❌ 미완료"}
          </li>
        ))}
      </ul>
    </div>
  );
}
