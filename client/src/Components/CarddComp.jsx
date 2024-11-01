import React from "react";

function CarddComp({courseName, instructorName,image,index, duration, rating}) {

    let data = [{
        head:"Course",
        value:courseName
    },
    {
        head:"Instructor",
        value:instructorName
    },
    {
        head:"Duration",
        value:duration
    },
    {
        head:"Rating",
        value:rating
    },
]
  return (
    <div
      key={index}
      className={`p-2 text-sm border shadow-lg rounded-lg md:text-base mx-auto scale-100 transition-all duration-500`}
    >
      <div>
        <div className="w-56 h-36 mb-4 rounded-md md:mb-3 md:w-[280px] md:h-[190px] border overflow-hidden">
          <img
            src={image}
            className="rounded-md w-full h-full object-fill"
          ></img>
        </div>
        <div className="p-5 font-semibold">
          <table>
            {data.length>0?data.map((a,id) => (
            <tr>
              <td>{a.head}</td>
              <td>:</td>
              <td>
                <span className="font-normal">{a.value}</span>
              </td>
            </tr>)):
            <h1>data not found</h1>}
          </table>
        </div>
      </div>
    </div>
  );
}

export default CarddComp;
