import React, { use } from "react";
import { FaCalendarAlt, FaTrashAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const SingleTask = ({ task }) => {
  const { title, des, data, status } = task;
  const {user} = use(AuthContext)

  // Status color mapping
  const statusColor = {
    pending: "text-pink-600",
    ongoing: "text-yellow-600",
    completed: "text-green-600",
    done: "text-green-800",
  };
  return (
    <Link to="/dashboard/taskDetails">
      <div className=" bg-white rounded-xl border border-gray-200 shadow-md p-4 w-full max-w-sm">
        {/* Icon + Title */}
        <div className="flex justify-evenly items-start gap-4">
          <div className=" rounded-full">
            <MdOutlineCategory
              className="bg-green-100 p-1 rounded-full"
              color="green"
              size={44}
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            {/* Description */}
            <p className="text-[#667085] text-sm leading-12 ">{des}</p>
          </div>
          <button className="  text-red-500 hover:text-red-700">
            <FaTrashAlt size={26} />
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-center text-sm text-gray-500 py-4">
          {/* Date with Icon */}
          <div className="flex items-center gap-3">
          <img className="w-8 h-8 rounded-full" src={user?.photo} alt="" />
            <span className="text-[#1F1F1F]">{data}</span>
          </div>
          {/* Status with dot */}
          <div
            className={`flex items-center gap-1 font-medium ${statusColor[status]}`}
          >
            <span className={`text-xs`}>&#9679;</span>
            <span className="capitalize">{status}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleTask;
