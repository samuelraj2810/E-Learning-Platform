import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { GET } from "../ApiFunction/ApiFunction";
import { useCustomMessage } from "../Common/CustomMessage";
import { SmileTwoTone } from "@ant-design/icons";
import Dashboard from "../Dashboard/Dashboard";

function MainLayout() {
  const [data, setData] = useState([]);
  const showMessage = useCustomMessage();

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (token) {
        const result = await GET("http://localhost:3000/getData", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(result);
        showMessage("success", "Welcome", <SmileTwoTone />);
      }
    } catch (error) {
      showMessage("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <Nav /> */}
      {/* {!data ? <LoadingPage /> : <Outlet />} */}
      <Dashboard/>
    </>
  );
}

export default MainLayout;
