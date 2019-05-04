import React from "react";
import * as d3 from "d3";
// import { findDOMNode } from "react-dom";
// import styled from "styled-components";

// const MS = styled.main`
// color: orange;
// background-color: white; 
// height: 80%;
// `

class Main extends React.Component {


  CCV() {

    var width = window.innerWidth;
    var height = window.innerHeight;


    //SVG container
    var svg = d3.select("#chart")
      .append("svg")
      .attr("class", "d3")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate()");

    //Container for the gradients
    var defs = svg.append("defs");
    var linearGradient = defs.append("linearGradient")
      .attr("id", "animate-gradient")
      .attr("x1", "100%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0")
      .attr("spreadMethod", "reflect");

    var colours = ["#FDA860", "#FC8669", "#E36172", "#C64277", "#E36172", "#FC8669", "#FDA860"];
    linearGradient.selectAll(".stop")
      .data(colours)
      .enter().append("stop")
      .attr("offset", function (d, i) { return i / (colours.length - 1); })
      .attr("stop-color", function (d) { return d; });

    linearGradient.append("animate")
      .attr("attributeName", "x1")
      .attr("values", "00%;100%")
      .attr("dur", "18s")
      .attr("repeatCount", "indefinite");

    linearGradient.append("animate")
      .attr("attributeName", "x2")
      .attr("values", "100%; 200%")
      .attr("dur", "18s")
      .attr("repeatCount", "indefinite");

    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .style("fill", "url(#animate-gradient)");
  }


  componentDidMount() {
    this.CCV();
  }



  render() {
    return (<>
      <div className="container">

        <div id="chart"></div>

        <div id="stats">
          <p>temperatureHigh: {this.props.temperatureHigh}</p>
          <p>temperatureLow: {this.props.temperatureLow}</p>
          <p>apparentTemperature: {this.props.apparentTemperature}</p>
          <p>cloudCover: {this.props.cloudCover}</p>
          <p>windBearing: {this.props.windBearing}</p>
          <p>windGust: {this.props.windGust}</p>
          <p>precipProbability: {this.props.precipProbability}</p>
          <p>precipIntensity: {this.props.precipIntensity}</p>
        </div>

      </div>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    </>);
  }
}
export default Main;