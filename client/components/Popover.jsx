import { useRef, useState } from "react";
import "../../styles/popover.css";
import { message } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Popover(props) {
  const nameRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const sendData = async (temp)=>{
    try{
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/events`,temp);
      console.log(response);
      if(response.status===201)
      {
        message.success("added successfully");
      }
      else
      {
        message.error("Something went wrong!");
      }
    }catch(err){
      console.log(err);
    }
  }


  const onGoToRoom = async(e) => {
    e.preventDefault();
    const teamId=localStorage.getItem('teamId')
    const name = nameRef?.current?.value
    if(!teamId || !name){
      console.log("No team Id found")
      return
    }
    props.setShowPopover(false);
    let temp = {
      date: props.clickedDate,
      teamId: teamId,
      title: name,
    }
    await sendData(temp)
    nameRef.current.value=""
  };

  const hidePopover=()=>{
    props.setShowPopover(false);
  }
  return (
    <form
      className={`${"popover"} ${props.showPopover ? "showP" : "hideP"}`}
      onSubmit={onGoToRoom}
    >
      <input
        type="text"
        placeholder="Enter the event details"
        className={"input"}
        ref={nameRef}
        autoComplete="off"
      />
      <button type="submit" className={"button"}>
        {loading ? "Loading..." : "Add Event"}
      </button>
      <button onClick={hidePopover}> Go back</button>
    </form>
  );
}
