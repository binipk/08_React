"use client";

export default function FormEvent() {
  // 입력 변경 이벤트 핸들러
  const handleInputChange = (e) => {
    console.log("입력값 : ", e.target.value);
  };

  // 폼 제출 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작(페이지 새로고침) 방지
    alert("폼 제출됨");
  };

  return (
    <>
      {/* 폼 이벤트 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>폼 이벤트(onChange, onSubmit)</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="텍스트를 입력하세요"
          />
          <button type="submit">제출</button>
        </form>
      </div>
    </>
  );
}
