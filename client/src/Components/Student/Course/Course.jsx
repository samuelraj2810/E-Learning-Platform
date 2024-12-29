import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import CourseCards from "./CourseCards";

const Course = () => {

  return (
    <main className="h-[90vh] flex md:flex-row flex-col gap-2 items-start w-full relative bg-gray-50 md:overflow-hidden">
      <Filter />
      <CourseCards/>
    </main>
  );
};

export default Course;
