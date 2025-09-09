import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { IDay } from "./DayList";

export default function CreateWrod() {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoding, setIsLoding] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    //console.log(engRef.current.value);
    if (!isLoding && dayRef.current && engRef.current && korRef.current) {
      setIsLoding(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          navigate(`/day/${day}`);
          setIsLoding(false);
        }
      });
    }
  }

  // useRef dom에 접근할 수 있게 해준다.
  // 예로 스크ㅇ위치를 설정하든가ㅇ포커스를 줄떄 사용
  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoding ? 0.3 : 1,
        }}>
        {isLoding ? "Saving..." : "저장"}
      </button>
    </form>
  );
}
