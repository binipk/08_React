"use client";

import { useSelector, useDispatch } from "react-redux";

function Section01() {
  const state = useSelector((state) => state.counter);
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      <h1>CreateSlice</h1>
      <div>
        <p>Count : {state.value}</p>
      </div>
      <div>
        <p>Status : {userState.state}</p>
      </div>
    </>
  );
}
export default Section01;
