import React from "react";

const TitleText = ({ text, theme }) => {
  return (
    <>
      <h1
        className={
          theme === "dark"
            ? "myTitleDesign text-2xl font-semibold sm:text-4xl text-white cursor-pointer"
            : "myTitleDesign text-2xl font-semibold sm:text-4xl text-p_b cursor-pointer"
        }
      >
        {text}
        <div
          className={
            theme === "dark"
              ? "myTitleDesignUnderline bg-white transition-all ease-in"
              : "myTitleDesignUnderline bg-p_b transition-all ease-in"
          }
        ></div>
      </h1>
    </>
  );
};

export default TitleText;
