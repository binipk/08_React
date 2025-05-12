import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Props and State</h1>

      <hr />

      <h1>props</h1>
      <ul>
        <li>
          <Link href="/chap01/section01">Props</Link>
        </li>
        <li>
          <Link href="/chap01/section02">Using-Props</Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}
