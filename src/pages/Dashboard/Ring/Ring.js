import React, { useEffect, useState } from "react";
import Pie from "./Pie";

const Ring = () => {
  const [ringData, setRingData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_3/",
      {
        method: "POST",
        headers: { Authorization: "Basic " + btoa("trial:assignment123") },
      }
    )
      .then((response) => response.json())
      .then((json) => setRingData(JSON.parse(json)));

    setIsLoading(false);
    console.log(ringData);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    !isLoading && (
      <div>
        <Pie />
        <div className="digit-text">
          <h2 className="digit">{ringData.score}</h2>
          <p className="text">of 100 points</p>
        </div>
        <hr></hr>
        <h3>{ringData.title}</h3>
        <p>{ringData.description}</p>
        <button className="ring-btn">Improve your score</button>
      </div>
    )
  );
};

export default Ring;
