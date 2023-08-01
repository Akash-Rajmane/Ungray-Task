import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./Barchart.css";

const Barchart = () => {
  const svgRef = useRef(null);
  const data = [
    { month: "Jan", lastYear: 5000, thisYear: 6000 },
    { month: "Feb", lastYear: 10000, thisYear: 2000 },
    { month: "Mar", lastYear: 20000, thisYear: 40000 },
    { month: "Apr", lastYear: 32000, thisYear: 21000 },
    { month: "May", lastYear: 12000, thisYear: 9200 },
    { month: "Jun", lastYear: 13000, thisYear: 8700 },
  ];

  const findMax = (data) => {
    let maxLastYear = Math.max(...data.map((el) => el.lastYear));
    let maxThisYear = Math.max(...data.map((el) => el.thisYear));
    if (maxLastYear > maxThisYear) {
      return maxLastYear;
    } else {
      return maxThisYear;
    }
  };

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", "800")
      .attr("height", "200")
      .style("margin-bottom", "10")
      .style("margin-left", "40")
      .style("overflow", "visible");

    const xScale0 = d3.scaleBand().range([0, 700]).padding(0.6);
    const xScale1 = d3.scaleBand();
    const yScale = d3.scaleLinear().range([160, 0]);

    const xAxis = d3.axisBottom(xScale0).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(10).tickSizeOuter(0);

    xScale0.domain(data.map((d) => d.month));
    xScale1.domain(["last year", "this year"]).range([0, xScale0.bandwidth()]);
    yScale.domain([0, findMax(data)]);

    const month = svg
      .selectAll(".month")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "month")
      .attr("transform", (d) => `translate(${xScale0(d.month)},0)`);

    month
      .selectAll(".bar.lastYear")
      .data((d) => [d])
      .enter()
      .append("rect")
      .attr("class", "bar lastYear")
      .style("fill", "#ADD8E6")
      .attr("x", (d) => xScale1("last year"))
      .attr("y", (d) => yScale(d.lastYear))
      .attr("width", xScale1.bandwidth())
      .attr("height", (d) => {
        return 160 - yScale(d.lastYear);
      });

    month
      .selectAll(".bar.thisYear")
      .data((d) => [d])
      .enter()
      .append("rect")
      .attr("class", "bar thisYear")
      .style("fill", "#0000FF")
      .attr("x", (d) => xScale1("this year"))
      .attr("y", (d) => yScale(d.thisYear))
      .attr("width", xScale1.bandwidth())
      .attr("height", (d) => {
        return 160 - yScale(d.thisYear);
      });

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${160})`)
      .call(xAxis);

    svg.append("g").attr("class", "y axis").call(yAxis);
  }, []);
  return (
    <div>
      <h1>Comparison</h1>
      <svg ref={svgRef}></svg>
      <div className="d-flex">
        <div className="blue-box"></div>
        <div className="legend-text">This year</div>
        <div className="l-blue-box"></div>
        <div>Last year</div>
      </div>
    </div>
  );
};

export default Barchart;
