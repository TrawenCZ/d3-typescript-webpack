//import * as d3 from "d3";
import * as d3 from "d3";

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

const circle = svg
  .append("circle")
  .attr("cx", 250)
  .attr("cy", 250)
  .attr("r", 50)
  .attr("fill", "blue");
