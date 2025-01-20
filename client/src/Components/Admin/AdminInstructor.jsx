import React, { useEffect, useState } from "react";
import { DELETE, GET } from "../ApiFunction/ApiFunction";

function AdminInstructor() {
  const [insdata, setInsData] = useState([]);
  const getallInstructors = async () => {
    let insdata = await GET("http://localhost:3000/getallinsdata");
    console.log(insdata.data);
  };

  const deleteInstructor = async(userId) => {
    const response = await DELETE("http://localhost:3000/deleteinsdata",{userId})
    console.log(response.message)
  }
  useEffect(() => {
    getallInstructors();
  }, []);

  return <div>AdminInstructor</div>;
}

export default AdminInstructor;
