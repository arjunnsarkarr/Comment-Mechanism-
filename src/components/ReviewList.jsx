import React from "react";
import reviews from "../data/reviewsData.json";
import CommentCards from "./CommentCards";

const ReviewList = () => {
  return (
    <>
      

      {
      reviews.map((review, index) => {
        return <CommentCards key={index} review={review} />
      })
      }

    </>
  );
};

export default ReviewList;
