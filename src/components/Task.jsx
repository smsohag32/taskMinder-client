const Task = ({
  task,
  setIsOpen,
  setTaskId,
  setTask,
  setStatusModal,
  setEditModalOpen,
}) => {
  return (
    <div className="flex border-2 shadow-md backdrop-blur-xl bg-slate-50 r flex-col p-8">
      <h1 className="text-xl md:text-2xl font-bold opacity-70 mb-3">
        {task?.task_title}
      </h1>
      <p className="text-sm mb-2">{task?.task_description}</p>

      <div className="mt-auto">
        <p
          className={`mt-4 ${
            task?.status === "approved" ? "text-green-600" : "text-orange-500"
          }`}
        >
          {task?.status || `Pending`}
        </p>
        <div className="flex mt-4  mb-6 w-full items-center gap-4">
          <button
            className="font-bold text-sm hover:bg-green-300 bg-green-500 px-2 py-1 text-white leading-relaxed"
            onClick={() => {
              setEditModalOpen(true), setTask(task);
            }}
          >
            Edit
          </button>
          <button
            className="font-bold text-sm hover:bg-red-300  bg-red-500 px-2 py-1 text-white leading-relaxed "
            onClick={() => {
              setIsOpen(true), setTaskId(task?._id);
            }}
          >
            Delete
          </button>
        </div>
        <button
          className="font-bold w-full text-sm mt-auto hover:bg-blue-300  bg-blue-500 px-2 py-1 text-white leading-relaxed"
          onClick={() => {
            setStatusModal(true), setTaskId(task?._id);
          }}
        >
          Update Status
        </button>
      </div>
    </div>
  );
};

export default Task;
