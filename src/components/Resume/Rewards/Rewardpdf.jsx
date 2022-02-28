import React from "react";
import { useParams } from "react-router-dom";

const Rewardpdf = () => {
  let params = useParams();
  return (
    <div>
      <iframe
        src={atob(params.id)}
        title={"PDF"}
        style={{
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
        }}
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default Rewardpdf;
