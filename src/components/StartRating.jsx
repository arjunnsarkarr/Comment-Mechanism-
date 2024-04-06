import React from "react";
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarLineIcon from "remixicon-react/StarLineIcon";

const StartRating = ({ rating }) => {
  let x = new Array(Math.floor(rating / 2)).fill("a");
  let y = new Array(5 - x.length).fill("a");

  return (
    <>
      <div className="flex items-center">
        {x.map((item, i) => {
          return <StarFillIcon key={i} color="rgb(234 179 8 )" />;
        })}
        {y.map((item, i) => {
          return <StarLineIcon key={i} color="&#xEAE5;" />;
        })}
      </div>
    </>
  );
};

export default StartRating;
