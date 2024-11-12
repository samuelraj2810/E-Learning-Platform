// import React, { useEffect, useState } from 'react'
// import Nav from './Nav'
// import { Outlet } from 'react-router-dom'
// import axios from 'axios';
// import LoadingPage from './LoadingPage';
// import { GET } from '../ApiFunction/ApiFunction';

// function MainLayout() {
//   const [token, setToken] = useState(null);
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const tokenFromStorage = sessionStorage.getItem("token");
//       if (tokenFromStorage) {
//         setToken(tokenFromStorage);
//         const result = await GET("http://localhost:3000/getData", {
//           headers: { Authorization: `Bearer ${tokenFromStorage}` },
//         });

//         const userEmail = sessionStorage.getItem("email");
//         const filteredData = result.data.filter((each) => each.email === userEmail);
//         setData(filteredData);
//       } else {
//         console.log("Token not found in sessionStorage.");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setIsLoading(false); 
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Nav />
//       {isLoading ? <LoadingPage/> : <Outlet />}
//     </div>
//   );
// }

// export default MainLayout;
import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { GET } from "../ApiFunction/ApiFunction";
import { useCustomMessage } from "../Common/CustomMessage";
import { SmileTwoTone } from "@ant-design/icons";
import Dashboard from "../Instructor/Dashboard";

function MainLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      <FloatButton.BackTop icon={<UpOutlined />} />
    </div>
  );
}

export default MainLayout;