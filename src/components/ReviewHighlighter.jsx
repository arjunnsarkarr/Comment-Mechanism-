import React from "react";
import Tooltip from "./Tooltip"

const ReviewHighlighter = ({ props }) => {
  const { content, analytics } = props;
  let x = [];
  let start, end;

  for (let analytic of analytics) {
    x = analytic.highlight_indices?.reduce((a, b) => {
      return [...a, [...b, analytic.topic]];
    }, x);
    // console.log(x, " x after every lopo  ");
  }

  start = x[0]?.[0];
  const length = x.length;
  end = x[length - 1]?.[1];

  // console.log("x " , x , " start ", start ," end ",end );

  x.sort((a, b) => {
    return a[0] - b[0];
  });

  return (
    <>
      <span>{content.slice(0, start)}</span>
      {x?.map((item, i) => {
        return (
          <span key={i}>
            {
              <Tooltip
              props={{
                content: content.slice(item[0], item[1]),
                topic: item[3],
                sentiment: item[2],
              }}
            />
            }{" "}
            {x[i + 1] && content.slice(item[1], x[i + 1]?.[0])}
          </span>
        );
      })}
      <span>{content.slice(end, -1)}</span>
    </>
  );
};

export default ReviewHighlighter;
