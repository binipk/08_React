"use client";
import { useEffect, useState } from "react";

export default function AfterStateUpdateExample() {
  const [isOn, setIson] = useState(false);

  const style = {
    width: 200,
    height: 200,
    backgroundColor: isOn ? "green" : "red",
    transiton: "2s",
    marginBottom: "1rem",
  };

  const handleWrongClick = () => {
    setIson(!isOn);
    console.log(isOn? "불이 켜졌습니다." : "불이 꺼졌습니다.");

    /*
    setIsOn(!isOn); 처음에 불이 꺼져있는 상태에서 불좀 켜줘!
    console.log()는 부탁만 듣고 결과를 기다리지 않고 바로 말해버림림
    */
  };
  
  // useEffect 훅 사용
  useEffect(() => {
    console.log(isOn ? "불이 켜졌습니다." : "불이 꺼졌습니다.");
  }, [isOn]);

  return (
    <>
      <div style={style}></div>
      <button onClick={handleWrongClick}>🚫잘못된 처리</button>
    </>
  );
}