import { Dialog, Transition } from "@headlessui/react";

import { Fragment } from "react";

const EditModal = ({
  handleEdit,
  loading,
  closeModal,
  editModalOpen,
  task,
}) => {
  return (
    <Transition appear show={editModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Edit the task
                </Dialog.Title>
                <form className="mt-5" onSubmit={handleEdit}>
                  <div className="hidden">
                    <input
                      type="text"
                      name="task_id"
                      defaultValue={task?._id}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Task Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="task_title"
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={task?.task_title}
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Task Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      name="task_description"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg   focus:ring-blue-500  focus:border-blue-500  dark:placeholder-gray-400 "
                      placeholder="Write your thoughts here..."
                      defaultValue={task?.task_description}
                    ></textarea>
                  </div>

                  <hr className="mt-8 " />
                  <div className="flex mt-2 w-full justify-around">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Update
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <button
                    disabled={loading}
                    className=" mt-4 w-full mx-auto justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditModal;
