import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>라우팅 실습 메인</h1>
      <ul>
        <li>
          <Link href='/router'>/RouterComponent</Link>
        </li>

      </ul>

    </div>
  );
}
