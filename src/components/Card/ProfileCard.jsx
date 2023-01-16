import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";

const ProfileCard = (data) => {

  function populateImage() {
    return <img className="p-8 max-h-80 max-w-80 min-h-80 min-w-80" src={data.image} alt="product image" />;
  }
  function populateName() {
    return data.name.charAt(0).toUpperCase() + data.name.slice(1);
  }
  function populateType() {
    return data.type.map((e) => {
      return (
        <div className="bg-white shadow-md max-w-sm dark:bg-blue-700 dark:border-yellow-700 mx-2 rounded-2xl px-3">
          {e.charAt(0).toUpperCase() + e.slice(1)}
        </div>
      );
    });
  }
  function FilledStar() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-amber-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );
  }
  function EmptyStar() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-amber-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
      </svg>
    );
  }
  function HalfFilledStar() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-amber-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
      </svg>
    );
  }

  function populateRating() {
    return (
      <div className="flex flex-row space-x-3">
        <div>{data.rating}</div>
      </div>
    );
  }
  function populateStars() {
    var rating = data.rating;
    var filledStar = Math.floor(rating);
    var halfFilledStar = rating - filledStar >= 0.5 ? 1 : 0;
    var emptyStar = 5 - filledStar - halfFilledStar;
    var stars = [];
    for (var i = 0; i < filledStar; i++) {
      stars.push(<FilledStar />);
    }
    if (halfFilledStar === 1) {
      stars.push(<HalfFilledStar />);
    }
    for (var i = 0; i < emptyStar; i++) {
      stars.push(<EmptyStar />);
    }
    return stars;
  }
  function populateLocation() {
    return data.location.charAt(0).toUpperCase() + data.location.slice(1);
  }

  return (
    <li>
      <div className="container m-auto justify-center">
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-neutral-200 dark:border-gray-700">
        <a href="#">{populateImage()}</a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3
                name="name"
                className="text-gray-900 font-bold text-xl tracking-tight  dark:text-black py-3"
              >
                {populateName()}
              </h3>
              <h5
                name="type"
                className="text-gray-900  text-s tracking-tight dark:text-white"
              >
                <div className="flex flex-row space-x-3">{populateType()}</div>
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              {populateStars()}
              <span
                name="rating"
                className="bg-blue-100 text-amber-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-amber-800 ml-3"
              >
                {populateRating()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-white bg-amber-900 hover:bg-amber-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-900 dark:hover:bg-amber-800 dark:focus:ring-amber-800"
              >
                View Profile
              </a>
              <div>
                <a href="#">
                  <span className="flex text-xl font-bold text-gray-900 dark:text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="28"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="2 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <div name="location">{populateLocation()}</div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProfileCard;
