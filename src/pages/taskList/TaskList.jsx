import React, {  useEffect, useState } from "react";
import SingleTask from "./singleTask";
import notFoundImg from "../../assets/not_found.png";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
const TaskList = () => {
  const axiosSecure = useAxiosSecure()
const [tasks,setTasks] = useState([])
useEffect(()=>{
  const fetchTask = async () => {
    try{
      const res = await axiosSecure.get('/api/tasks')
      setTasks(res.data);
    }catch(error){
      toast.error(error.message);
    }
  }
  fetchTask()
},[axiosSecure])

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // 🔍 Filtered tasks
  const filteredTasks = tasks
    .filter((task) =>
      selectedCategory ? task.category === selectedCategory : true
    )
    .filter((task) => (selectedStatus ? task.status === selectedStatus : true));


  return (
    <div className="max-w-[1600px] -mt-24  mx-auto p-4 md:p-8">
      <div className="bg-base-100  shadow-md p-6 rounded-2xl">

        {/* sorted part */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold mb-10">All Task List</h1>
          {/* 🔹 Top Row: Filters and Button */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-10">
            {/* Category Dropdown */}
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full lg:w-auto"
            >
              <option value="">Select Task Category</option>
              <option value="Art and Craft">Art and Craft</option>
              <option value="Nature">Nature</option>
              <option value="family">Family</option>
              <option value="Sport">Sport</option>
              <option value="Friends">Friends</option>
              <option value="Meditation">Meditation</option>
            </select>

            {/* Status Dropdown */}
            <select
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full lg:w-auto"
            >
              <option value="">All Task</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Pending">Pending</option>
              <option value="Collaborative Task">Collaborative Task</option>
              <option value="Done">Done</option>
            </select>

            {/* Add Button */}
           <Link to="/dashboard/addTask">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md w-full lg:w-auto"
            >
              ➕ Add New Task
            </button>
           </Link>
          </div>
        </div>

        {/* 🔹 Task Grid */}
        {filteredTasks.length === 0 ? (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img src={notFoundImg} alt="Not found" />
            </div>
            <h3 className="text-2xl font-semibold">
              No Task is Available yet, Please Add your New Task
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredTasks.map((task) => (
              <SingleTask key={task._id} task={task}></SingleTask>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
