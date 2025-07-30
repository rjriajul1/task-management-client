import React from "react";
import SingleTask from "./singleTask";
import notFoundImg from "../../assets/not_found.png";
const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: "ksfahfjhafhha",
      data: "7-5-2025",
      des: "sjfhajfjahfhha",
      status: "pending",
      category: "family",
    },
    {
      id: 2,
      title: "ksfahfjhafhha",
      data: "7-5-2025",
      des: "sjfhajfjahfhha",
      status: "pending",
      category: "sport",
    },
    {
      id: 3,
      title: "ksfahfjhafhha",
      data: "7-5-2025",
      des: "sjfhajfjahfhha",
      status: "pending",
      category: "nature",
    },
    {
      id: 4,
      title: "ksfahfjhafhha",
      data: "7-5-2025",
      des: "sjfhajfjahfhha",
      status: "pending",
      category: "meditation",
    },
  ];

  return (
    <div className=" max-w-[1320px]  mx-auto p-4">
      <div className="bg-gray-100 mt-40  shadow-2xl p-6 rounded-2xl">
        <h1 className="text-2xl font-semibold mb-10">All Task List</h1>
        {tasks.length === 0 ? (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img src={notFoundImg} alt="" />
            </div>
            <h3 className="text-2xl font-semibold">No Task is Available yet, Please Add your New Task</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {tasks.map((task) => (
              <SingleTask key={task.id} task={task}></SingleTask>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
