import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Props and State</h1>
      <h2>Props</h2>
      <ul>
        <li>
          <Link href="/chap01/section01">Props</Link>
        </li>
        <li>
          <Link href="/chap01/section02">UsingProps</Link>
        </li>
      </ul>
    </div>
  );
}
