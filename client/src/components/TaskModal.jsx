import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import Select from 'react-select';
import { MdOutlinePriorityHigh } from "react-icons/md";
import { GrUploadOption } from "react-icons/gr";
import { addTask } from "../../utils/api";
import Auth from "../../utils/auth"

function TaskModal({ showModal, setModal }) {

    const [ title, setTitle ] = useState("")
    const [ description, setDescription] = useState("")
    const [ category, setCategory ] = useState("")
    const [ priority, setPriority ] = useState(null)

    const handleClose = () => {
        setModal(false)
    }


    const handleClick = async () => {
        // console.log("open?", setModal)
        try{
            const token = Auth.getToken();

            const newTask = await addTask({ title: title, description: description, category: category, priority: priority }, token); 

            console.log("new task", newTask)
    
          window.location.reload();

        } catch(error) {
            console.log(error)
        }
      }

    const today =  new Date().toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' });

  return (
    <>
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="relative bg-white rounded-lg w-full max-w-md shadow-xl">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <input
                            className="text-3xl font-bold border-none w-full h-20 focus:outline-none"
                            placeholder="Untitled"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                            <span className="sr-only">Close</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>


                    <div className="mt-4 flex flex-col-2 ml-1">
                        <div className="flex items-center">
                            <FaRegClock className="mr-2 text-gray-400" />
                            <p className="text-gray-400">Date Created</p>
                        </div>
                        <div className="ml-7">{today}</div>
                    </div>


                    <div className="mt-4 flex flex-col-2">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-400 ml-2">Category</p>
                        </div>
                        <Select
                            placeholder="Select"
                            value={{ value: category, label: category }}
                            onChange={(option) => setCategory(option.value)}
                            options={[
                                    { value: 'Personal', label: 'Personal' },
                                    { value: 'Home', label: 'Home' },
                                    { value: 'Study', label: 'Study' },
                                    { value: 'Work', label: 'Work' },
                                    { value: 'Other', label: 'Other' }
                                    ]}
                            className="ml-12 w-1/4"
                    
                    />
                    </div>


                    <div className="mt-4 flex flex-col-2">
                        <div className="flex items-center">
                            <MdOutlinePriorityHigh  className="mr-2 text-gray-400" />
                            <p className="text-gray-400">Priority</p>
                        </div>
                    <Select
                        placeholder="Select"
                        value={{ value: priority, label: priority }}
                        onChange={(option) => setPriority(option.value)}
                        options={[
                        { value: '1', label: '1'},
                        { value: '2', label: '2'},
                        { value: '3', label: '3'}
                        ]}
                        className="ml-16 w-1/4"
                    />
                    </div>



                    <div className="mt-4">
                        <h2 className="font-semibold text-xl text-gray-500">Details</h2>
                        <textarea
                            className="mt-2 w-full h-32 border border-gray-300 rounded-md p-2 focus:outline-none"
                            placeholder="Write something here ☺"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    

                {title && (
                    <div className="mt-4 flex justify-end text-blue-500">
                        <button onClick={handleClick} className="text-2xl">
                        <GrUploadOption />
                        </button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )}
</>
  )
}

export default TaskModal;