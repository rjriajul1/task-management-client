import React from "react";

const AddTask = () => {
  const handleTaskForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const task = {
        title,
        category,
        date: new Date().toISOString(),
        description,
        status: "pending"
        
    }
    console.table(task);
  };
  return (
    <div className="max-w-[1600px] -mt-20  mx-auto p-4 md:p-8">
      <form onSubmit={handleTaskForm}>
        <fieldset className="fieldset bg-base-100 w-full border-base-300 rounded-box border p-10 ">
          <div className="gap-6 grid md:grid-cols-2">
            {/* title */}
            <div>
              <label className="text-xl" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
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
                name="category"
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
            name="description"
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

export default AddTask;
