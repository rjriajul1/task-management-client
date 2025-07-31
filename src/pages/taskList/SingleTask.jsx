import React, { use } from "react";
import { FaCalendarAlt, FaTrashAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const SingleTask = ({ task }) => {
  const { title, description, date, status, _id, } = task;
  const { user } = use(AuthContext);

 
  // Status color mapping
  const statusColor = {
    pending: "text-pink-600",
    ongoing: "text-yellow-600",
    completed: "text-green-600",
    done: "text-green-800",
  };
  return (
    <Link to={`/dashboard/taskDetails/${_id}`}>
      <div className=" bg-white rounded-xl min-h-56 overflow-hidden border border-gray-200 shadow-md p-4 w-full max-w-sm">
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
            {description && (
              <p className="text-[#667085] text-sm leading-7">
                {description.split(" ").slice(0, 25).join(" ") + "..."}
              </p>
            )}
          </div>
          <button className="  text-red-500 hover:text-red-700">
            <div>
              <FaTrashAlt size={26} />
            </div>
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-center text-sm text-gray-500 py-4">
          {/* Date with Icon */}
          <div className="flex items-center gap-3">
            <img className="w-8 h-8 rounded-full" src={user?.photo} alt="" />
            <p className="text-gray-600 text-sm">
              {date &&
                new Date(date)
                  .toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                  .replace(",", " -")}
            </p>
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
