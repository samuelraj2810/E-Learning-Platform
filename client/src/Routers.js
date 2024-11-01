import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

const Routers = () => {
  const routeList = [{ path: "/", element: <Home /> , menuId:1 }];
  return (
    <main className="font-Poppins">
      <Nav />
      <Routes>
        {routeList.map((each) => (
          <Route path={each.path} element={each.element} />
        ))}
      </Routes>
    </main>
  );
};

export default Routers;
