import React, { useState } from 'react'
import { GET } from '../ApiFunction/ApiFunction'

function AdminInstructor() {
  const [insdata,setInsData] = useState([])
  const getallInstructors = async () => {
    let insdata = await GET("http://localhost:3000/");
    console.log()
  }

  
  return (
    <div>AdminInstructor</div>
  )
}

export default AdminInstructor