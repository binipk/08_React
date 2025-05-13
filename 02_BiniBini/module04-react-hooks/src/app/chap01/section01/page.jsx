// 📁 경로: app/section01/page.tsx
// ✅ 컴포넌트를 가져온다 (import)
// @는 프로젝트 루트(src) 기준 → components/chap01/section01/UseEffectBasic.tsx 를 가져온 것
import UseEffectBasic from "@/components/chap01/section01/UseEffectBasic";

// ✅ 페이지 컴포넌트 정의
function Section01() {
  return (
    <div>
      {/* 👉 우리가 만든 UseEffectBasic 컴포넌트를 여기서 보여줌 */}
      <UseEffectBasic />
    </div>
  );
}

// ✅ 페이지 컴포넌트 내보내기 (Next.js는 이걸 페이지로 인식함)
export default Section01;
