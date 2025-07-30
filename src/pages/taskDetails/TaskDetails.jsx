import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { useNavigate } from "react-router";

const TaskDetails = () => {
 const navigate = useNavigate()
  const task = {
    id: 4,
    title: "ksfahfjhafhha",
    data: "7-5-2025",
    des: "sjfhajfjahfhha",
    status: "Pending",
    category: "meditation",
  };
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-[1600px] -mt-24 mx-auto md:p-8 p-4 bg-base-100 shadow-md rounded-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <h3 className="text-2xl font-semibold">Task Details</h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <button className="btn text-orange-500 w-full md:w-auto">
              Edit Task
            </button>
            <button onClick={()=>navigate(-1)} className="btn bg-[#60E5AE] w-full md:w-auto">Back</button>
          </div>
        </div>

        <hr className="border-gray-300 my-6" />

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icon */}
          <div className="flex justify-center md:justify-start">
            <MdOutlineCategory
              className="bg-green-100 p-1 rounded-full"
              color="green"
              size={50}
            />
          </div>

          {/* Content */}
          <div className="w-full">
            <h1 className="text-2xl md:text-3xl font-semibold">{task.title}</h1>
            <p className="text-sm md:text-xs py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni
              blanditiis eius voluptatum earum, recusandae hic nulla accusamus
              enim mollitia.
            </p>

            <h2 className="mt-6 mb-2 font-semibold text-base md:text-lg">
              End Date
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <FaCalendarAlt size={24} />
              <span className="text-[#1F1F1F]">{task.data}</span>
              <div className="divider divider-horizontal hidden md:flex"></div>
              <span className="text-xl text-[#DD9221]">&#9679;</span>
              <h1 className="text-[#DD9221] text-2xl md:text-3xl font-medium">
                InProgress
              </h1>
            </div>

            {/* Dropdown */}
            <label className="block mt-6 mb-2 font-semibold" htmlFor="status">
              Change Status
            </label>
            <select className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-auto">
              <option value="">All Task</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Pending">Pending</option>
              <option value="Collaborative Task">Collaborative Task</option>
              <option value="Done">Done</option>
            </select>

            {/* Button Group */}
            <div className="flex flex-col md:flex-row justify-end gap-3 mt-6">
              <button className="btn bg-red-100 text-red-500 px-6 md:px-12">
                Delete
              </button>
              <button className="btn bg-[#60E5AE] px-6 md:px-12">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
