import Link from "next/link";
import React from "react";
// import "./mainPage.css";

export default function page() {
  return (
    <>
      <div className="container">
        <h1>JSX_component</h1>
        <ul className="ul">
          <li>
            <Link href={"/chap01/section01"}>JSX-Intro</Link>
          </li>
          <li>
            <Link href={"/chap01/section02"}>JSX-basic-syntax</Link>
          </li>
          <li>
            <Link href={"/chap01/section03"}>JSX-Rules</Link>
          </li>
        </ul>

        <hr />

        <h1>chap02</h1>
        <ul>
          <li>
            <Link href={"/chap02/section01"}>Component-Intro</Link>
          </li>
          <li>
            <Link href={"/chap02/section02"}>Function-Component</Link>
          </li>
        </ul>

        <hr />

        <h1>chap03</h1>
        <ul>
          <li>
            <Link href={"/chap03/section01"}>Basic-Event-Handling</Link>
          </li>
          <li>
            <Link href={"/chap03/section02"}>Event-Type</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
