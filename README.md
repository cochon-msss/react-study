# 프로젝트 명

이 프로젝트는 React 기초 강의를 기반으로 만든 애플리케이션입니다.

- **강의 링크**: [React 기초 강의(코딩앙마)](https://www.youtube.com/playlist?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-)

---

### 1. 프로젝트 생성

아래 명령어를 사용하여 React 프로젝트를 생성합니다.

```bash
npx create-react-app [project name]
```

```bash
npm start
```

JSON Server 설치 및 실행
연습용 데이터베이스로 JSON Server를 사용합니다.

```bash
npm install -g json-server
```

```bash
json-server --watch ./src/db/data.json --port 3001
```

TypeScript 설치
프로젝트에 TypeScript를 적용하기 위해 필요한 패키지들을 설치합니다.

```bash
npm install typescript @types/node @types/react @types/react-dom @types/jest
```

참고: react-router-dom을 사용한다면 @types/react-router-dom을 추가로 설치해야 합니다.

파일 확장자 변경:

.js 파일을 .ts로 변경

.jsx 파일을 .tsx로 변경

REST API
이 프로젝트는 REST API를 통해 데이터를 관리합니다. URI 주소와 HTTP Method를 이용해 CRUD(생성, 읽기, 업데이트, 삭제) 요청을 보냅니다.

Create: POST

Read: GET

Update: PUT

Delete: DELETE
