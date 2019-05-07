import React from "react";
import * as d3 from "d3";
import API from '../utils/API';


class Forecast extends React.Component {

  state = {
    colorTheme: ["#4729af", "#B92f94", "#E36172", "#FDA860", "#f4c809"],
    data: [
      {
        "group": "SUN",
        "variable": 0,
        "value": 30
      },
      {
        "group": "SUN",
        "variable": 4,
        "value": 35
      },
      {
        "group": "SUN",
        "variable": 8,
        "value": 40
      },
      {
        "group": "SUN",
        "variable": 12,
        "value": 60
      },
      {
        "group": "SUN",
        "variable": 16,
        "value": 75
      },
      {
        "group": "SUN",
        "variable": 20,
        "value": 50
      },
      {
        "group": "SUN",
        "variable": 24,
        "value": 35
      }
    ]
  }

  componentDidMount() {
    API.getForecast().then(res => console.log(res.data))
    this.forecastViz();
  }


  forecastViz() {

    let colorTheme = this.state.colorTheme;
   

    // set the dimensions and margins of the graph
    var margin = { top: 80, right: 25, bottom: 30, left: 40 },
      width = 450 - margin.left - margin.right,
      height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#forecastDV")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
    var myGroups = d3.map(this.state.data, function (d) { return d.group; }).keys()
    var myVars = d3.map(this.state.data, function (d) { return d.variable; }).keys()

    // Build X scales and axis:
    var x = d3.scaleBand()
      .range([0, width])
      .domain(myGroups)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 15)
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain").remove()

    // Build Y scales and axis:
    var y = d3.scaleBand()
      .range([height, 0])
      .domain(myVars)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 15)
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain").remove()

    // Build color scale
    var myColor = d3.scaleLinear()
      .range(colorTheme)
      .domain([1, 25, 50, 75, 100])

    // create a tooltip
    var tooltip = d3.select("#forecastDV")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
      tooltip
        .style("opacity", 1)
      d3.select(this)
        .style("stroke", "lightgrey")
        .style("opacity", 1)
    }
    var mousemove = function (d) {
      tooltip
        .html("The exact value of<br>this cell is: " + d.value)
        .style("left", (d3.mouse(this)[0] + 70) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
    }
    var mouseleave = function (d) {
      tooltip
        .style("opacity", 0)
      d3.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8)
    }

    // add the squares
    svg.selectAll()
      .data(this.state.data, function (d) { return d.group + ':' + d.variable; })
      .enter()
      .append("rect")
      .attr("x", function (d) { return x(d.group) })
      .attr("y", function (d) { return y(d.variable) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", function (d) { return myColor(d.value) })
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)


    // Add title to graph
    svg.append("text")
      .attr("x", 0)
      .attr("y", -50)
      .attr("text-anchor", "left")
      .style("font-size", "22px")


    // Add subtitle to graph
    svg.append("text")
      .attr("x", 0)
      .attr("y", -20)
      .attr("text-anchor", "left")
      .style("font-size", "14px")
      .style("fill", "grey")
      .style("max-width", 400)
      .text("Forecast for upcoming week.");

  }

  render() {
    return (
      <div className="middle">
        <h1>Forecast Page</h1>
        <div id="forecastDV"></div>
        <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>

      </div>
    )
  }
}

export default Forecast;