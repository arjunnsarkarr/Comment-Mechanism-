import React from "react";
import BookmarkLineIcon from "remixicon-react/BookmarkLineIcon";
import UserAddLineIcon from "remixicon-react/UserAddLineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import StartRating from "./StartRating";
import ReviewHighlighter from "./ReviewHighlighter";




const CommentCards = (review) => {
  const { rating_review_score } = review.review;
 

  return (
    <>
      <div className="p-10 max-w-5xl flex gap-2 m-auto ">
        <div className=" w-8 h-8 ">
          <img src={review.review.source.icon} alt="" />
        </div>
        <div className=" w-full flex flex-col gap-3">
          <div className="flex justify-between ">
            <div>
              {" "}
              <span className="font-bold">
                {review.review.reviewer_name}
              </span>{" "}
              wrote a review at{" "}
              <span className="font-bold">{review.review.source.name}</span>
            </div>
            <div style={{ display: "flex" }}>
              <UserAddLineIcon color="&#xF25E;" />
              <BookmarkLineIcon color="&#xEAE5;" />
              <MoreLineIcon color="&#xEF79;" />
            </div>
          </div>
          <div className="flex gap-2">
            {" "}
            <StartRating rating={rating_review_score} />
            {review.review.date}
          </div>
          <div><ReviewHighlighter props={review.review} /></div>
        </div>
      </div>
    </>
  );
};

export default CommentCards;
