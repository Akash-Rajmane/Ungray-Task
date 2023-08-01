import React, { useEffect, useState } from "react";

const Feedback = () => {
  const [feedbackData, setFeedBackData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_5/",
      {
        method: "POST",
        headers: { Authorization: "Basic " + btoa("trial:assignment123") },
      }
    )
      .then((response) => response.json())
      .then((json) => setFeedBackData(JSON.parse(json)));
    // console.log(feedbackData);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    !isLoading && (
      <div>
        <p className="feedback-title">Community feedback</p>
        <h3>{feedbackData.remark}</h3>
        <div className="bars">
          <div class="progress-bar-red"></div>
          <div class="progress-bar-orenge"></div>
          <div class="progress-bar-green"></div>
        </div>
        <table>
          <thead>
            <tr className="grey-text">
              <th>Negative</th>
              <th>Neutral</th>
              <th>Positive</th>
            </tr>
          </thead>
          <tbody>
            <tr className="black-text">
              <td>{feedbackData.negative}</td>
              <td>{feedbackData.neutral}</td>
              <td>{feedbackData.positive}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
};

export default Feedback;
