import React from "react";
import * as d3 from "d3";
// import { findDOMNode } from "react-dom";
// import styled from "styled-components";

// const MS = styled.main`
// color: orange;
// background-color: white; 
// height: 80%;
// `

let wind=[];

class Main extends React.Component {

  state = {
    apparentTemperature: null,
    temperatureHigh:null,
    temperatureLow: null,
    windBearing: null, 
    windGust: null,
    cloudCover: null, 
    precipProbability: null,
    colorTheme: ["#FDA860", "#FC8669", "#E36172", "#C64277", "#B92f94", "#C64277", "#E36172", "#FC8669", "#FDA860"]
  }
  
  convertWB() {
    switch (true) {
      case (45 < this.state.windBearing && this.state.windBearing < 135): wind =["0;0","0;0","0;1","1;2"]; 
      break;
      case (136 < this.state.windBearing && this.state.windBearing < 225): wind=["1;0","2;1","0;0","0;0"]; 
      break;
      case (226 < this.state.windBearing && this.state.windBearing < 315): wind=["0;0","0;0","1;2","0;1"]; 
      break;
      default: wind=["0;1","1;2","0;0","0;0"]; 
    }
  }

  CCV() {

    let width = window.innerWidth;
    let height = window.innerHeight;
    let gust = 50 - this.state.windGust;
    let colorTheme = this.state.colorTheme; 


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
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%")
      .attr("spreadMethod", "reflect");

    linearGradient.selectAll(".stop")
      .data(colorTheme)
      .enter().append("stop")
      .attr("offset", function (d, i) { return i / (colorTheme.length - 1); })
      .attr("stop-color", function (d) { return d; });

    linearGradient.append("animate")
      .attr("attributeName", "x1")
      .attr("values", wind[0])
      .attr("dur", gust)
      .attr("repeatCount", "indefinite");

    linearGradient.append("animate")
      .attr("attributeName", "x2")
      .attr("values", wind[1])
      .attr("dur", gust)
      .attr("repeatCount", "indefinite");

      linearGradient.append("animate")
      .attr("attributeName", "y1")
      .attr("values", wind[2])
      .attr("dur", gust)
      .attr("repeatCount", "indefinite");

      linearGradient.append("animate")
      .attr("attributeName", "y2")
      .attr("values", wind[3])
      .attr("dur", gust)
      .attr("repeatCount", "indefinite");

    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .style("fill", "url(#animate-gradient)");
  }


  componentDidMount() {
    this.setState({
      temperatureHigh:this.props.temperatureHigh,
      temperatureLow: this.props.temperatureLow,
      apparentTemperature: this.props.apparentTemperature,
      cloudCover: this.props.cloudCover,
      windBearing: this.props.windBearing,
      windGust: this.props.windGust,
      precipProbability: this.props.precipProbability,
      precipIntensity: this.props.precipIntensity,});
  }

  componentDidUpdate() {
    this.convertWB();
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