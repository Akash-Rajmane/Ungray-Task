import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Ring from "./Ring/Ring";
import Feedback from "./Feedback/Feedback";
import Table from "./Table/Table";
import Barchart from "./Barchart/Barchart";

const Dashboard = () => {
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_1/",
      {
        method: "POST",
        headers: { Authorization: "Basic " + btoa("trial:assignment123") },
      }
    )
      .then((response) => response.json())
      .then((json) => setData(JSON.parse(json)));

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    !isLoading && (
      <div className="dashboard-container">
        <section className="item1">
          <h2>Dashboard</h2>
          <div className="box">
            <article>
              <p>Purchases</p>
              <div className="d-flex">
                <h3>{data.purchase}</h3>
                <div className="green-box">
                  +32% <span>&#10548;</span>
                </div>
              </div>
            </article>
            <article>
              <p>Revenue</p>
              <div className="d-flex">
                <h3> &#36;{data.revenue}</h3>
                <div className="green-box">
                  +49% <span>&#10548;</span>
                </div>
              </div>
            </article>
            <article>
              <p>Refunds</p>
              <div className="d-flex">
                <h3> &#36;{data.refunds}</h3>
                <div className="red-box">
                  -7% <span>&#10549;</span>
                </div>
              </div>
            </article>
          </div>
          <Barchart />
          <Table />
        </section>
        <section className="item2">
          <Ring />
        </section>
        <section className="item3">3</section>
        <section className="item4">
          <Feedback />
        </section>
      </div>
    )
  );
};

export default Dashboard;
