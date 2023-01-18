import React from "react";
// import Rating from './Rating'
import Star from "./Star";

function QuickView(data) {
  // console.log("executed")
  function populateType() {
    return data.type.map((e) => {
      return (
        <div className="bg-white shadow-md max-w-sm dark:bg-blue-700 dark:border-yellow-700 mx-2 rounded-2xl px-3">
          {e.charAt(0).toUpperCase() + e.slice(1)}
        </div>
      );
    });
  }

  return (
    <div className="p-16 w-4/5 justify-center text-center m-auto">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">No. of jobs</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Review</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Comments</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>
            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Message
            </button>
            <button className="text-white py-2 px-6 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" onClick={e => data.displayProfileModal(e)}>
              X
            </button>
          </div>
        </div>

        <div className="mt-20 text-center border-b pb-12">
          <div className="flex justify-center">
            <Star stars={data.rating} />
          </div>
          <h1 className="text-4xl font-medium text-gray-700">
            {data.name}, <span className="font-light text-gray-500">27</span>
          </h1>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="48"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 20 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <p className="font-light text-3xs-gray-600 mt-3">{data.location}</p>
          </div>
          <div className="flex justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="48"
              fill="currentColor"
              className="bi bi-translate"
              viewBox="0 0 16 16"
            >
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
            </svg>
            <p className="font-light text-3xs-gray-600 mt-3">Hindi</p>
            <p className="font-light text-3xs-gray-600 mt-3">Bengali</p>
            <p className="font-light text-3xs-gray-600 mt-3">Urdu</p>
          </div>

          <p className="mt-2 text-3xl text-white font-light flex flex-row text-center justify-center">
            {populateType()}
          </p>
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur harum voluptatum incidunt ipsa expedita ipsam eaque,
            quisquam architecto sint nemo.
          </p>
          <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuickView;
