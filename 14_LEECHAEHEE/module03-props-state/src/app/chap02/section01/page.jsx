import AfterStateUpdateExample from "@/components/chap02/section01/counter/AfterStateUpdateExample";
import Counter from "@/components/chap02/section01/counter/Counter";
import CounterWithPrevState from "@/components/chap02/section01/counter/CounterWithPrevState";
import StateComponent from "@/components/chap02/section01/StateComponent";
import UseStateStepByStep from "@/components/chap02/section01/counter/UseStateStepByStep";

function Section02() {
  return (
    <div>
      <StateComponent />
      <hr />

      <h2>리액트 상태관리 - useState</h2>
      <Counter /> 
      {/* 위 StateComponent에 영향을 주지 않는다. */}
      <hr />

      <h2>비동기 상태 업데이트 문제</h2>
      <CounterWithPrevState />

      <hr />
      <h2>상태가 변경된 후 특정 작업 수행</h2>
      <AfterStateUpdateExample />

      <hr />

      <h2>UseState 사용</h2>
      <UseStateStepByStep />
    </div>


  );
}

export default Section02;
