import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Task from "../../components/Task";
import EditModal from "../../components/Modal/EditModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import { useState } from "react";
import { toast } from "react-toastify";
import StatusModal from "../../components/Modal/StatusModal";

const AllTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [statusModalOpen, setStatusModal] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
    setEditModalOpen(false);
    setStatusModal(false);
  };

  const {
    isLoading,
    refetch,
    data: taskDada = [],
  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get(
        `https://task-minder-server.vercel.app/task/all`
      );
      return res.data;
    },
  });

  // handle to edit in task
  const handleEdit = (event) => {
    event.preventDefault();
    setLoading(true);

    const task_id = event.target.task_id.value;
    const task_title = event.target.task_title.value;
    const task_description = event.target.task_description.value;

    const editedTask = {
      task_title,
      task_description,
    };
    axios
      .put(
        `https://task-minder-server.vercel.app/task/update/${task_id}`,
        editedTask
      )
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          toast.success("Update the task Information");
          refetch();
          closeModal();
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  // handle to delete
  const handleDelete = (id) => {
    axios
      .delete(`https://task-minder-server.vercel.app/task/${id}`)
      .then((res) => {
        if (res?.data?.deletedCount > 0) {
          closeModal();
          toast.success("Task Deleted success");
          refetch();
        }
      })
      .catch((err) => {});
  };

  // handle to status update

  const handleStatusUpdate = (status, taskId) => {
    setLoading(true);
    axios
      .patch(`https://task-minder-server.vercel.app/task/status/${taskId}`, {
        status,
      })
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          toast.success("Status Update Success");
          refetch();
          closeModal();
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="default-container my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {taskDada.length > 0 &&
          taskDada.map((task) => (
            <Task
              key={task?._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              task={task}
              setTaskId={setTaskId}
              setIsOpen={setIsOpen}
              setTask={setTask}
              setEditModalOpen={setEditModalOpen}
              setStatusModal={setStatusModal}
            />
          ))}
      </div>
      <EditModal
        closeModal={closeModal}
        handleEdit={handleEdit}
        editModalOpen={editModalOpen}
        task={task}
        loading={loading}
      />
      <DeleteModal
        closeModal={closeModal}
        handleDelete={handleDelete}
        isOpen={isOpen}
        taskId={taskId}
      />
      <StatusModal
        handleStatusUpdate={handleStatusUpdate}
        statusModalOpen={statusModalOpen}
        closeModal={closeModal}
        taskId={taskId}
      />
    </div>
  );
};

export default AllTask;
