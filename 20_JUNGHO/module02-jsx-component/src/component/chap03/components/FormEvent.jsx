"use client";

import React from "react";

export default function FormEvent() {
  // 입력 변경 이벤트 핸들러
  const handleInputChange = (e) => {
    console.log("입력 값 : ", e.target.value);
  };

  const handleSubmit = () => {
    e.preventDefault(); // 페이지 새로고침 방지
    alert("폼 제출 완료");
  };

  return (
    <>
      {/* 폼 이벤트 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>폼 이벤트(onChange, onSubmit)</h3>
        <form>
          <input type="text" onChange={handleInputChange} placeholder="텍스트를 입력하세요" />
          <button type="submit" onSubmit={handleSubmit}>
            제출
          </button>
        </form>
      </div>
    </>
  );
}
