/*
  기본 함수형 컴포넌트 작성

  함수형 컴포넌트는 React에서 UI를 구성하는 가장 기본적인 방법이다.
  JavaScript 함수를 사용하여 React 엘리먼트를 반환하는 간단한 형태를 가진다.

  함수형 컴포넌트의 특징:
  1. JavaScript 함수로 정의
  2. props를 인자로 받음
  3. JSX를 반환
  4. 상태(state)와 생명주기 기능은 Hooks를 통해 사용

  기본 문법:
  function ComponentName(props) {
    return <div>컴포넌트 내용</div>;
  }

  또는 화살표 함수 문법:
  const ComponentName = (props) => {
    return <div>컴포넌트 내용</div>;
  };

  props는 컴포넌트에 전달되는 데이터로, 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달하는 방법이다.
*/

export default function FunctionComponent() {
  return (
    <div>
      <h1>기본 함수형 컴포넌트 작성</h1>
      <section>
        <h2>함수형 컴포넌트 정의</h2>
        <p>
          <strong>함수형 컴포넌트</strong>는 props를 입력으로 받아 React 앨리먼트를 반환하는 JavaScript함수이다.
          함수형 컴포넌트는 간결하고 직관적이며, 최신 React개발의 중심이 되는 방식이다.
        </p>

        <div>
          <h3>함수형 컴포넌트의 기본구조</h3>
          <pre>
            {`
                // 기본 함수 선언 방식
                function Greeting(props) {
                    return <h1>Hello, {props.name}</h1>;
                }
                
                // 화살표 함수 방식
                const Greeting = (props) => {
                    return <h1>Hello, {props.name}</h1>;
                };
                
                // 구조 분해 할당 사용
                function Greeting({ name, age }) {
                    return (
                    <div>
                        <h1>Hello, {name}</h1>
                        <p>Age: {age}</p>
                    </div>
                    );
                }`}
          </pre>
        </div>
      </section>
    </div>
  );
}
