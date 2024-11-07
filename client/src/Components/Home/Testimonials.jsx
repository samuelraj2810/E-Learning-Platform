import React from 'react';
function Testimonial(){
    
const testimonials = [
    {
      name: 'Jane Doe',
      position: 'MERN developer @ Zoho',
      text: 'Thiese Courses has transformed my Career. The experience has been phenomenal!',
      image: '', 
    },
    {
      name: 'John Smith',
      position: 'Software Tester @ TCS',
      text: 'Absolutely love the ease of use and the features provided. Highly recommended!',
      image: '',
    },
    {
      name: 'Alice Johnson',
      position: 'Graphic Designer (Freelancer)',
      text: 'A great tool for anyone looking to improve their workflow. Very intuitive!',
      image: '',
    },
  ];
  return (
    <div className="bg-gray-100 py-12 ">
      <div className="w-[90%] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-20">What Our Students Say</h2>
        <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg max-w-[480px] p-6 flex flex-col items-center text-center scale-100 transition-all duration-500"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
              <p className="text-gray-700">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;