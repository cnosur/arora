import React from "react";
import * as d3 from "d3";

// import styled from "styled-components";

// const MS = styled.main`
// color: orange;
// background-color: white; 
// height: 80%;
// `


// GLOBAL VARS //
let wind=[];

// COMPONENTS //
class Main extends React.Component {

  //Converts wearingBearing to coordinates for d3 
  convertWB() {
    switch (true) {
      case (45 < this.props.windBearing && this.props.windBearing < 135): wind =["0;0","0;0","0;1","1;2"]; 
      break;
      case (136 < this.props.windBearing && this.props.windBearing < 225): wind=["1;0","2;1","0;0","0;0"]; 
      break;
      case (226 < this.props.windBearing && this.props.windBearing < 315): wind=["0;0","0;0","1;2","0;1"]; 
      break;
      default: wind=["0;1","1;2","0;0","0;0"]; 
    }
  }

  //Current Conditions Visualization
  CCV() {
    let Width = window.innerWidth;
    let Height = window.innerHeight;
    let Gust = 50 - this.props.windGust;
    let colorTheme = this.props.CCVTheme; 


    //SVG container
    var svg = d3.select("#chart")
      .append("svg")
      .attr("class", "d3")
      .attr("width", Width)
      .attr("height", Height)
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
      .attr("dur", Gust)
      .attr("repeatCount", "indefinite");

    linearGradient.append("animate")
      .attr("attributeName", "x2")
      .attr("values", wind[1])
      .attr("dur", Gust)
      .attr("repeatCount", "indefinite");

    linearGradient.append("animate")
      .attr("attributeName", "y1")
      .attr("values", wind[2])
      .attr("dur", Gust)
      .attr("repeatCount", "indefinite");

    linearGradient.append("animate")
      .attr("attributeName", "y2")
      .attr("values", wind[3])
      .attr("dur", Gust)
      .attr("repeatCount", "indefinite");

    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", Width)
      .attr("height", Height)
      .style("fill", "url(#animate-gradient)");
  }

  componentDidMount() { 
    this.convertWB();
    this.CCV();
  }

  ////////// R E N D E R //////////

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
    </>);
  }
}
export default Main;