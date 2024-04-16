// import TaskCard from "../Tasks/TaskCard";
// import tasksData from "./data.json";
// import tasksData from "../Components/data/data";

import TaskCard from "../ui/TaskCard";
import Navbar from "../ui/Navbar";
import { useRecoilState } from "recoil";
import { coin } from "./state";
import { tasksData } from "../Components/data/data";

function TaskPage() {
  const tasks = tasksData;
  console.log(tasks);
  const [totalCoins, setTotalCoins] = useRecoilState(coin);

  return (
    <div className="w-full space-y-5 bg-white">
      <Navbar />
      <div className="bg-green-800 py-20">
        <div className=" flex flex-col items-center h-[10rem] max-w-6xl space-y-5 container mx-auto">
          <h1 className="text-left text-6xl font-bold text-green-500">
            Let's do some Tasks!
          </h1>
          <div className="w-full flex items-end">
            <h2 className="text-3xl font-semibold text-white">User Tasks</h2>
          </div>
        </div>
      </div>
      <div className="max-w-6xl container mx-auto p-5">
        <div className="grid grid-cols-4 place-content-between">
          {tasks.slice(0, 4).map((task, index) => (
            <TaskCard
              key={index}
              title={task.task}
              description={task.description}
              Enable={task.Enable}
              id={task.id}
              // You may need to modify this based on your logic

              onComplete={() => {
                setTotalCoins(totalCoins + 20);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
