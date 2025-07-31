import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import successImg from "../../assets/success_img.png";
import { toast } from "react-toastify";

const TaskEdit = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [task, setTask] = useState({});
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);


  const { id } = useParams();
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axiosSecure.get(`/api/tasks/${id}`);
        setTask(res.data);
        setCategory(res.data.category)
        setDescription(res.data.description)
        setTitle(res.data.title)
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchTask();
  }, [axiosSecure, id]);
  const handleUpdate  = async (e) => {
    e.preventDefault();

    const updatedTask = {
      title,
      category,
      date: new Date().toISOString(),
      description,
      status: "pending",
      email: user?.email,
    };
    console.table(updatedTask);

    try {
    const res = await axiosSecure.put(`/api/tasks/${id}`, updatedTask);
    if (res.data?.data) {
      toast.success("Task updated successfully");
      navigate('/dashboard/taskList')
    }
  } catch (err) {
    toast.error("Update failed");
    console.error(err);
  }

   
  };
  return (
    <div className="max-w-[1600px] -mt-20  mx-auto p-4 md:p-8">
      <form onSubmit={handleUpdate }>
        <fieldset className="fieldset bg-base-100 w-full border-base-300 rounded-box border p-10 ">
          <div className="gap-6 grid md:grid-cols-2">
            {/* title */}
            <div>
              <label className="text-xl" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                defaultValue={task?.title}
                onChange={(e)=>setTitle(e.target.value)}
                className="input w-full my-2 font-semibold text-[18px]"
                placeholder="Task Title"
              />
            </div>
            {/* category */}
            <div>
              <label className="text-xl" htmlFor="category">
                Category
              </label>
              <select
               defaultValue={task?.category}
                onChange={(e)=>setCategory(e.target.value)}
                className="px-4 py-[10px] my-2 border font-semibold text-[18px] border-gray-300 rounded-md w-full"
              >
                <option value="">Select Task Category</option>
                <option value="Art and Craft">Art and Craft</option>
                <option value="Nature">Nature</option>
                <option value="family">Family</option>
                <option value="Sport">Sport</option>
                <option value="Friends">Friends</option>
                <option value="Meditation">Meditation</option>
              </select>
            </div>
          </div>
          <label className="text-xl" htmlFor="category">
            Description
          </label>
          <textarea
            rows={8}
            defaultValue={task.description}
            onChange={(e)=>setDescription(e.target.value)}
            className="border border-gray-300 rounded-md resize-none p-2 font-semibold text-[18px]"
          ></textarea>
          {/* submit button */}
          <input
            type="submit"
            className="btn my-8 font-semibold text-[18px] bg-[#60E5AE]"
            value="Submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default TaskEdit;
