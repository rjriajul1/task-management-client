import { axiosSecure } from "../hooks/useAxiosSecure";

export const deleteTask = async (id) => {
  try {
    await axiosSecure.delete(`/api/tasks/${id}`);
  } catch (err) {
    console.error("Delete failed", err);
  }
};
