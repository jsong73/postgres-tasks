import React, {useState} from "react";
import { AiOutlinePlus } from "react-icons/ai";
import BoardModal from "./BoardModal";

function CreateBoardBtn() {
  
  const [ showModal, setModal ] = useState(false)

  const handleClick = () => {
    setModal(true)
    console.log("opened?", showModal)

  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="flex items-center justify-center"
      >
        <AiOutlinePlus className="mr-2" />
        <span className="font-semibold ">Create new board</span>
      </button>
     <BoardModal showModal={showModal} setModal={setModal} />
    </div>
  )
}

export default CreateBoardBtn;
