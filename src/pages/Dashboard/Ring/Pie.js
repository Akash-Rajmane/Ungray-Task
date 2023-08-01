import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Pie = () => {
  const svgRef = useRef(null);
  const colorArr = ["blue", "grey"];

  useEffect(() => {
    var width = 150,
      height = 150;

    var svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible");

    // var data = [
    //   { startAngle: 0, endAngle: 2.45 },
    //   { startAngle: 2.45, endAngle: 3.14 },
    // ];
    var items = [39, 11];
    var data = d3.pie().sort(null)(items);
    console.log(data);

    var segments = d3
      .arc()
      .innerRadius(70)
      .outerRadius(80)
      .startAngle(-90 * (Math.PI / 180))
      .endAngle(90 * (Math.PI / 180));

    var sections = svg
      .append("g")
      .attr("transform", "translate(150,150)")
      .selectAll("path")
      .data(data);

    sections
      .enter()
      .append("path")
      .attr("d", segments)
      .attr("fill", (d, i) => colorArr[i]);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Pie;
