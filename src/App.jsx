import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroPage from "./pages/HeroPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import AllQues from "./Components/Personal/AllQues";
import Rewards from "./pages/Rewards";
import AllQues from "./Components/Personal/AllQues";
import Upload from "./Components/Image Recognizer/Upload";
import CheckFoot from "./Components/Image Recognizer/CheckFoot";
import TaskPage from "./pages/TaskPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
   <RecoilRoot RecoilRoot>
    <Routes>
      <Route index element={<HeroPage />} />

      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="rewards" element={<Rewards />} />
      <Route path="all" element={<AllQues />} />
      <Route path="image" element={<Upload />} />
      <Route path="recognize" element={<CheckFoot />} />
      <Route path="tasks" element={<TaskPage />} />
    </Routes>

    </RecoilRoot>
  );
}

export default App;
