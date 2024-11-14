import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WhatYoullLearn from "./WhatYou'llLearn";
import CourseInstructor from "./CourseInstructor";
import RequirementsDescription from "./RequirementDescription";
import CourseLectures from "./CourseLectures";
import CourseHeader from "./CourseHeader";
import CourseHeaderData from "../Data/CourseHeaderData";
import CourseLecturesData from "../Data/CourseLecturesData";
import WhatYoullLearnData from "../Data/WhatYou'llLearnData";
import CourseInstructorData from "../Data/CourseInstructorData";
import RequirementsDescriptionData from "../Data/RequirementDescriptionData";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [courseHeaderData, setCourseHeaderData] = useState(null);
  const [courseLectureData, setCourseLectureData] = useState(null);
  const [whatYoullLearnData, setWhatYoullLearnData] = useState([]);
  const [instructorData, setInstructorData] = useState(null);
  const [requirementsData, setRequirementsData] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const selectedCourseHeader = CourseHeaderData.find(
      (course) => course.id === parseInt(courseId)
    );

    const selectedCourseLectures = CourseLecturesData.find(
      (course) => course.id === parseInt(courseId)
    );

    const selectedWhatYoullLearn = WhatYoullLearnData.find(
      (course) => course.id === parseInt(courseId)
    );

    const selectedInstructor = CourseInstructorData.find(
      (course) => course.id === parseInt(courseId)
    );

    const selectedRequirements = RequirementsDescriptionData.find(
      (course) => course.id === parseInt(courseId)
    );

    if (selectedCourseHeader) {
      setCourseHeaderData(selectedCourseHeader);
    } else {
      setCourseHeaderData(null);
      navigate("/courses");
    }

    if (selectedCourseLectures) {
      setCourseLectureData(selectedCourseLectures.sections);
    } else {
      setCourseLectureData([]);
    }

    if (selectedWhatYoullLearn) {
      setWhatYoullLearnData(selectedWhatYoullLearn.points);
    } else {
      setWhatYoullLearnData([]);
    }

    setInstructorData(selectedInstructor);
    setRequirementsData(selectedRequirements);
  }, [courseId, navigate]);

  if (!courseHeaderData) {
    return <div>Loading or course not found...</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <CourseHeader
            title={courseHeaderData.title}
            description={courseHeaderData.description}
            instructor={courseHeaderData.instructor}
            duration={courseHeaderData.duration}
            price={courseHeaderData.price}
            originalPrice={courseHeaderData.originalPrice}
            mediaSrc={courseHeaderData.mediaSrc}
          />
          <CourseLectures sections={courseLectureData} />
          <WhatYoullLearn points={whatYoullLearnData} />
        </div>
        <div className="col-span-1 space-y-6">
          <CourseInstructor instructor={instructorData} />
          <RequirementsDescription requirementsData={requirementsData} />{" "}
          
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
