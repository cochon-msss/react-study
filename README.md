Markdown

## 강의: React 기초 강의

- **강의 링크**: [React 기초 강의](https://www.youtube.com/playlist?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-)

### **프로젝트 생성**

```bash
npx create-react-app [project name]
JSON Server 설치 및 실행
설치 (Mac):

Bash

npm install -g json-server
실행:

Bash

json-server --watch ./src/db/data.json --port 3001
(연습용 데이터베이스를 사용하고자 할 때)

REST API
URI 주소와 HTTP Method를 통해 CRUD(생성, 읽기, 업데이트, 삭제) 작업을 요청하는 방식입니다.

Create: POST

Read: GET

Update: PUT

Delete: DELETE

TypeScript 설치
설치 (Mac):

Bash

npm install typescript @types/node @types/react @types/react-dom @types/jest
참고: create-react-app으로 생성된 프로젝트의 경우, react-router-dom을 사용할 때 추가로 @types/react-router-dom을 설치해야 합니다.

파일 확장자 변경:

.js 파일은 .ts로

.jsx 파일은 .tsx로 변경해야 합니다.
```
