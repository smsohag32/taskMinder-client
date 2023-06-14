import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AddTask = () => {
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    setTitleError("");
    setDescriptionError("");
    setServerError("");

    const task_title = e.target.task_title.value;
    const task_description = e.target.task_description.value;

    if (!task_title) {
      return setTitleError("Task Title is required *");
    }
    if (!task_description) {
      return setDescriptionError("Task Description is required *");
    } else if (task_description?.length < 10) {
      return setDescriptionError("Task Description is too short");
    }
    setLoading(true);
    const newTask = {
      task_title,
      task_description,
      date: new Date(),
    };
    // post to db
    axios
      .post("http://localhost:5000/task/add", newTask)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success(`New task ${task_title} added`);
          e.target.reset();
          setLoading(false);
        }
      })
      .catch((err) => {
        setServerError("api not responding");
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="default-container my-12 flex items-center justify-center h-full">
        <form
          onSubmit={handleAddTask}
          className="max-w-xl bg-slate-100 rounded-2xl backdrop-blur-xl bg-opacity-70 p-8 mx-auto w-full flex flex-col"
        >
          <div className="mt-6">
            <label
              htmlFor="title"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="task_title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {titleError && (
              <span className="text-red-500 text-sm">{titleError}</span>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Task Description
            </label>
            <textarea
              id="description"
              rows="4"
              name="task_description"
              className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write task description"
            ></textarea>
            {descriptionError && (
              <span className="text-red-500 text-sm">{descriptionError}</span>
            )}
          </div>
          {serverError && (
            <span className="text-red-500 text-center w-full">
              {serverError}
            </span>
          )}
          <div className=" mt-4 w-full">
            <button
              type="submit"
              disabled={loading}
              className="text-white w-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {loading ? "Loading" : "Add new task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
