import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { deleteTask } from "../../utils/deleteTask";
import Swal from "sweetalert2";
import successImg from "../../assets/success_img.png";


const TaskDetails = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [task, setTask] = useState([]);
  const [status,setStatus] = useState(null)
  const { id } = useParams();
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axiosSecure.get(`/api/tasks/${id}`);
        setTask(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchTask();
  }, [axiosSecure, id]);
  console.log(task);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTask(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
        navigate("/dashboard/taskList");
      }
    });
  };

  const handleStatusChange = async (newStatus) => {
    try {
      const res = await axiosSecure.patch(`/api/tasks/${task._id}`, {
        status: newStatus,
      });
      if (res.data.modifiedCount > 0) {
        toast.success("Status updated successfully");
         navigate('/dashboard/taskList')
      }
    } catch (err) {
      toast.error("Failed to update status");
      console.error(err);
    }
  };

  const submitTask = async (id) => {
    try {
      const res = await axiosSecure.patch(`/api/tasks/done/${id}`);
      if (res.data.message) {
        Swal.fire({
          position: "top-center",
          title: "Successfully task submit.",
          imageUrl: successImg,
          imageWidth: 300,
          imageHeight: 300,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/dashboard/taskList");
    } catch (error) {
      console.error("Failed to mark as done", error);
    }
  };
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-[1600px] -mt-24 mx-auto md:p-8 p-4 bg-base-100 shadow-md rounded-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <h3 className="text-2xl font-semibold">Task Details</h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {task?.points > 0 && (
              <p className="text-pink-500 font-semibold text-xl">
                {task?.points} Points
              </p>
            )}

            <Link to={`/dashboard/taskEdit/${task._id}`}>
            <button className="btn text-orange-500 w-full md:w-auto">
              Edit Task
            </button>
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="btn bg-[#60E5AE] w-full md:w-auto"
            >
              Back
            </button>
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
            <p className="text-sm md:text-xs py-2">{task.description}</p>

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
            <select
              value={status} 
              onChange={(e) => handleStatusChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-auto"
            >
              <option value="">All Task</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Pending">Pending</option>
              <option value="Collaborative Task">Collaborative Task</option>
              <option value="Done">Done</option>
            </select>

            {/* Button Group */}
            <div className="flex flex-col md:flex-row justify-end gap-3 mt-6">
              <button
                onClick={() => handleDelete(task._id)}
                className="btn bg-red-100 text-red-500 px-6 md:px-12"
              >
                Delete
              </button>
              <button
                disabled={task.status === "done"}
                onClick={() => submitTask(task._id)}
                className="btn bg-[#60E5AE] px-6 md:px-12"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
