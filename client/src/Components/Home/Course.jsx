import javaScriptBaicsImage from "../../Assets/CourseCatalogMedia/image1.png";
import Reactfundamental from "../../Assets/CourseCatalogMedia/pngwing.png";
import nodejs from "../../Assets/CourseCatalogMedia/image3.png";
import css from "../../Assets/CourseCatalogMedia/image4.png";
import API from "../../Assets/CourseCatalogMedia/image5.png";
import CarddComp from "./CarddComp";
const CourseCardData = [
  {
    id: 1,
    image: javaScriptBaicsImage,
    title: "JavaScript Basics",
    instructor: "Srinivan",
    price: 799,
    category: "Programming",
    rating: 4.5,
    description:
      "Learn the fundamentals of JavaScript, from variables to loops.",
  },
  {
    id: 2,
    image: Reactfundamental,
    title: "React Fundamentals",
    instructor: "Jane Smith",
    price: 499,
    category: "Frontend Development",
    rating: 4.7,
    description: "Master the basics of React, including components and hooks.",
  },
  {
    id: 3,
    image: nodejs,
    title: "Node.js for Beginners",
    instructor: "Alex Brown",
    price: 649,
    category: "Backend Development",
    rating: 4.3,
    description: "Get started with Node.js for backend development.",
  },
  {
    id: 4,
    image: css,
    title: "CSS for Beginners",
    instructor: "Emily Davis",
    price: 399,
    category: "Frontend Development",
    rating: 4.8,
    description: "Learn how to style your website using CSS.",
  },
  {
    id: 5,
    image: API,
    title: "API Learning",
    instructor: "Michael Clark",
    price: 799,
    category: "Backend Development",
    rating: 4.6,
    description:
      "Understand how to work with APIs and integrate them into your apps.",
  },
];

const Course = () => {
  return (
    <div className="w-[90%] mx-auto mb-10 flex flex-col gap-5 md:gap-14 ">
      <h1 className="text-2xl font-semibold md:text-3xl relative z-10 "><span className="text-white">Popular</span> Courses</h1>
      <div className="h-10 w-[120px] rounded-tr-lg absolute rotate-12 -z-1 bg-Primary"/>
      <div className="flex flex-row flex-wrap justify-evenly w-full mx-auto ">
        {CourseCardData.length >= 1 ? (
          CourseCardData.map((value, index) => (
            <CarddComp
              index={index}
              image={value.image}
              courseName={value.title}
              instructorName={value.instructor}
              price={value.price}
              rating={value.rating}
            />
          ))
        ) : (
          <>
            <h1>data not found</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Course;
