import { useEffect, useState } from "react";

// custom hook
export default function useFetch(url: string) {
  const [data, setData] = useState([]);
  // 어떤 상태값이 바뀌고 다시 렌더링 됐을때 동작
  // 함수 호출된ㄴ 타이밍은 렌더링 결과가 dom에 반영된 직후
  // 첫번째 매개변수는 함수를 받는다.
  // 두번째 매개변수는 배열(의존성 배열)을 받는다. 해당 배열에 속해있는 값이 변경됐을때만 useEffect실행
  // 빈배열을 넣으면 최초헤 한번만 실행한다.
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}
