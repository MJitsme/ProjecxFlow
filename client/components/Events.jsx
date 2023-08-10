import { message } from "antd"
import axios from "axios"
import React from "react"

export default function Events(props) {
const handleDelete = async(e)=>{
  if(!props.id){ 
    message.error("Id not found")
    return
}
console.log("DELETE STARTED")
console.log(props.id)
  try{
    const response= await axios.delete(`${import.meta.env.VITE_API_URL}/user/events/${props.id}`)
    console.log(response);
    if(response.status===204) message.success("Deleted successfully");
    else message.error("something went wrong!");
  }
  catch(error){
    console.log(error);
  }
}
  return (
    <div className="event_calendar">
    {props.date} - <span className="event_name">{props.title}</span>
    <button style={{fontSize:'1.75rem',margin:'0',backgroundColor:'red',width:'auto',position:'absolute',right:'200px'}} onClick={handleDelete}>Delete</button>
  </div>
  )
}
