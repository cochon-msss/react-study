import CreateDay from "./component/CreateDay";
import CreateWrod from "./component/CreateWord";
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWrod />}></Route>
          <Route path="/create_day" element={<CreateDay />}></Route>
          {/* 설정된 경로로 요청이 들어오지 않는다면 이쪽 컴포넌트 보여줌 */}
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
