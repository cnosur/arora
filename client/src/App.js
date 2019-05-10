import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import About from "./pages/About";
import Forecast from "./pages/Forecast";
import Historical from "./pages/Historical";
import aGallery from "./pages/aGallery";
import Color from "./pages/Color";
import API from "./utils/API";
import "../src/style.scss";


class App extends React.Component {

  state = {
    apparentTemperature: null,
    temperatureHigh: null,
    temperatureLow: null,
    windGust: null,
    windBearing: null,
    cloudCover: null,
    precipProbability: null,
    colorTheme: ["#4f1fb7","#5000ff", "#004cff", "#00ffb3", "#ff00a1"],
    CCVTheme: ["#ff00a1", "#00ffb3", "#004cff", "#5000ff", "#4f1fb7", "#5000ff", "#004cff", "#00ffb3", "#ff00a1" ] }

    // colorTheme: ["#32216E", "#1571A8", "#10A835", "#FDEA00", "#A80706"],
    // colorTheme: ["#4729af", "#B92f94", "#E36172", "#FDA860", "#f4c809"],
    // colorTheme: ["#2e231f", "#263c8b","#4e74a6", "#bdbf78", "#bfa524"],
    // colorTheme: ["#0f0b26", "#b3b372","#8c5a2e", "#bf8641", "#522421"],
    // colorTheme: ["#284253", "#4d7186","#f4a720", "#ef8c12", "#e0542e"],

  //Gets weather data from Darksky API 
  getWeather() {
    API.getWeather()
      .then(res =>
        this.setState({
          temperatureHigh: res.data.daily.data[0].temperatureHigh,
          temperatureLow: res.data.daily.data[0].temperatureLow,
          apparentTemperature: res.data.currently.apparentTemperature,
          cloudCover: res.data.currently.cloudCover,
          windGust: res.data.currently.windGust,
          windBearing: res.data.currently.windBearing,
          precipProbability: res.data.currently.precipProbability,
          precipIntensity: res.data.currently.precipIntensity,
        })
    )}


    setTheme = theme => {
      this.setState({ colorTheme: theme, CCVTheme: [theme[0],theme[1],theme[2],theme[3],theme[4],theme[3],theme[2],theme[1],theme[0]] })
    }

// Gets colorTheme from db
//   getColors() {
//     API.getColors()
//     .then(res => 
//       this.setState({
//         colorTheme: res.data[0].colorTheme
//       }))
//     this.getWeather();
//   }

  componentDidMount() {
     this.getWeather(); 
  }

////////// R E N D E R //////////

  render() {
    if (!this.state.apparentTemperature)
      return null;
    return (
      <Router>
        <div id="wrapper">
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => <Main {...props}
              CCVTheme={this.state.CCVTheme}
              colorTheme={this.state.colorTheme}
              apparentTemperature={this.state.apparentTemperature}
              temperatureHigh={this.state.temperatureHigh}
              temperatureLow={this.state.temperatureLow}
              windGust={this.state.windGust}
              windBearing={this.state.windBearing}
              cloudCover={this.state.cloudCover}
              precipProbability={this.state.precipProbability}
              precipIntensity={this.state.precipIntensity} />} />
            <Route exact path="/forecast" render={(props) => <Forecast {...props}
              colorTheme={this.state.colorTheme}
              apparentTemperature={this.state.apparentTemperature}
              temperatureHigh={this.state.temperatureHigh}
              temperatureLow={this.state.temperatureLow}
              windGust={this.state.windGust}
              windBearing={this.state.windBearing}
              cloudCover={this.state.cloudCover}
              precipProbability={this.state.precipProbability}
              precipIntensity={this.state.precipIntensity} />} />
            <Route exact path="/historical" render={(props) => <Historical {...props}
              colorTheme={this.state.colorTheme}
              apparentTemperature={this.state.apparentTemperature}
              temperatureHigh={this.state.temperatureHigh}
              temperatureLow={this.state.temperatureLow}
              windGust={this.state.windGust}
              windBearing={this.state.windBearing}
              cloudCover={this.state.cloudCover}
              precipProbability={this.state.precipProbability}
              precipIntensity={this.state.precipIntensity} />} />
            <Route exact path="/color" render={(props) => <Color {...props}
              setTheme= {this.setTheme}
              colorTheme={this.state.colorTheme}
              apparentTemperature={this.state.apparentTemperature}
              temperatureHigh={this.state.temperatureHigh}
              temperatureLow={this.state.temperatureLow}
              windGust={this.state.windGust}
              windBearing={this.state.windBearing}
              cloudCover={this.state.cloudCover}
              precipProbability={this.state.precipProbability}
              precipIntensity={this.state.precipIntensity} />} />
            <Route exact path="/gallery" component={aGallery} />
            <Route exact path="/about" component={About} />
          </Switch>

          <Footer  currentPage={this.state.currentPage}
            // handlePageChange={this.handlePageChange}
            colorTheme={this.state.colorTheme} />
        </div>
      </Router>
    );
  }
}


export default App;