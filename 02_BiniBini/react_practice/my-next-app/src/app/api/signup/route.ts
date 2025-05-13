// ✅ 클라이언트 응답을 위한 Next.js 전용 객체
import { NextResponse } from "next/server";

// ✅ 파일을 비동기로 다루기 위한 Node.js 내장 모듈
import fs from "fs/promises";

// ✅ 경로를 절대경로로 안전하게 조작해주는 유틸
import path from 'path';

// ✅ POST 요청이 들어왔을 때 실행될 함수
export async function POST (req: Request) {
  // 👉 클라이언트에서 보낸 JSON 데이터를 파싱
  const { name, email, password } = await req.json();

  // 👉 사용자 데이터가 저장된 JSON 파일 경로 지정
  const filePath = path.join(process.cwd(), 'data', 'users.json');

  // 👉 JSON 파일을 읽고 문자열 → JS 배열로 변환
  const fileData = await fs.readFile(filePath, 'utf-8');
  const users = JSON.parse(fileData);

  // 👉 중복 이메일이 있는지 검사
  const exists = users.some((user: any) => user.email === email);
  if (exists) {
    // ❌ 이미 존재하는 이메일인 경우 → 409 Conflict 응답
    return NextResponse.json(
      { message: '사용중인 이메일입니다.' },
      { status: 409 }
    );
  }

  // 👉 새 유저 정보 객체 생성 (id는 timestamp로 대체)
  const newUser = { id: Date.now(), name, email, password };

  // 👉 기존 사용자 목록에 새 유저 추가
  users.push(newUser);

  // 👉 다시 파일로 저장 (들여쓰기 2칸)
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));

  // ✅ 성공 응답 반환
  return NextResponse.json({ message: '회원가입 완료!' }, { status: 201 });
}
