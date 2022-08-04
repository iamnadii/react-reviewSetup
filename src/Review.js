import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevData = () => {
    setIndex((index) => {
      const newData = index - 1;
      return checkNumber(newData);
    });
  };
  const nextData = () => {
    setIndex((index) => {
      const newData = index + 1;
      return checkNumber(newData);
    });
  };
  const randomNumber = () => {
    let rand = Math.floor(Math.random() * people.length);
    if (rand === index) {
      rand = index - 1;
    }
    console.log(rand);
    setIndex(checkNumber(rand));
  };
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevData} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextData} />
        </button>
      </div>
      <button className="random-btn" onClick={randomNumber}>
        surprise me
      </button>
    </div>
  );
};

export default Review;
