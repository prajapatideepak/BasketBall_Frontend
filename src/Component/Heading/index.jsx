import React from "react";
import "./Heading.css";

function Heading({ text, className, margin }) {
  const class_name =
    className == "" || className == undefined
      ? "text-lg xs:text-xl sm:text-2xl lg:text-3xl"
      : className;
  return (
    <div
      className={`team-profile-heading-container   w-full flex justify-center items-center ${
        margin ? "mb-1" : "mb-16"
      }`}
    >
      <h2
        className={`main-heading text-white font-semibold mx-5 ${class_name}`}
      >
        {text == "" || text == undefined ? "Heading" : text}
      </h2>
    </div>
  );
}

export default Heading;
