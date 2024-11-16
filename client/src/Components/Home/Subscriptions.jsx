import React from "react";

function Subscriptions() {
  let subscriptions = [
    {
      plan: "1 Month",
      cost: " Rs 299",
      Desc: "iufsif efiwejfui idf iuefiuef yia",
    },
    {
      plan: "3 Month",
      cost: " Rs 899",
      Desc: "iufsif efiwejfui idf iuefiuef yia",
    },
    {
      plan: "HalfYearly",
      cost: " Rs 1499",
      Desc: "iufsif efiwejfui idf iuefiuef yia",
    },
    {
      plan: "Yearly",
      cost: " Rs 2999",
      Desc: "iufsif efiwejfui idf iuefiuef yia",
    },
  ];

  return (
    <div className="w-[90%] m-auto flex flex-col gap-5 mb-10 md:gap-14 md:mt-20 md:mb-20 ">
      <h1 className="text-2xl font-semibold md:text-[28px] md:text-3xl relative z-10"><span className="text-white">Plan</span> Details</h1>
      <div className="h-10 w-16 rounded-tr-lg absolute rotate-12 -z-1 bg-Primary"/>
      <div className="flex flex-row flex-wrap p-14 mx-auto items-center justify-evenly w-full">
        {subscriptions.length >= 1 ? (
          subscriptions.map((value, index) => (
            <div
              key={index}
              className="md:w-[350px] rounded-lg shadow-md md:shadow-lg p-6 hover:scale-105 transition-all duration-400 "
            >
              <p className="md:text-3xl font-bold md:my-4">
                {value.cost}
                <span className="md:text-xl font-normal"> / {value.plan}</span>
              </p>
              <p className="text-base mb-3 md:mb-6">
                jafefaofoa afofoeifa afoajofiasjd
              </p>
              <div className="hidden md:block md:border-t md: border-gray-700 md:pt-4">
                <h3 className="text-lg font-semibold">What's included:</h3>
                <ul className="md:mt-4 text-gray-300">
                  <li>afeafas fafafaef eafa </li>
                  <li>ifafufafa fadadad</li>
                  <li>afaefaf afadad aed </li>
                </ul>
              </div>
              <div className="text-center">
                <button className="w-20 font-semibold text-md h-10 shadow-lg md:mt-6 md:w-full bg-gray-700 hover:bg-gray-600 text-white py-1 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <h1>data not found</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Subscriptions;
