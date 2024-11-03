import React, { useEffect, useState } from 'react'

const ProfileDetails = () => {
    const [token,setToken] = useState(null)
    console.log(token)
    useEffect(()=>{
        setToken(localStorage.getItem("token"))
    },[])
  return (
    <div>ProfileDetails</div>
  )
}

export default ProfileDetails