import React from 'react'

function CarddComp(props) {
  return (
    
            <div
              key={props.index}
              className="p-5 text-sm border shadow-lg rounded-lg md:text-base mx-auto scale-100 transition-all duration-500"
            >
              <div>
              <div className="w-56 h-36 mb-4 rounded-md md:mb-6 md:w-[250px] md:h-[170px] border overflow-hidden">
                  <img src={props.image} className="rounded-md w-full h-full object-cover"></img>
                </div>

                <h1>
                  Course :{" "}
                  <span className="font-light">{props.courseName}</span>
                </h1>
                <h1>
                  Instructor :{" "}
                  <span className="font-light">{props.instructorName}</span>
                </h1>
                <h1>
                  Duration :{" "}
                  <span className="font-light">{props.duration}</span>
                </h1>
                <h1>
                  Rating : <span className="font-light">{props.rating}</span>
                </h1>
              </div>
            </div>
  )
}

export default CarddComp