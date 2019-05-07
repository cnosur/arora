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
    temperatureHigh:null,
    temperatureLow:null,
    windGust: null,
    windBearing: null,
    cloudCover: null, 
    precipProbability: null,
  }


  componentDidMount () {
    API.getWeather()
    .then(res=> 
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

  render() {
       if(!this.state.apparentTemperature)
            return null;
    return (
      <Router>
        <div id="wrapper">
          <Header/>
          <Switch> 
            <Route exact path = "/" render={(props) => <Main {...props} 
              apparentTemperature={this.state.apparentTemperature} 
              temperatureHigh={this.state.temperatureHigh}
              temperatureLow={this.state.temperatureLow}
              windGust={this.state.windGust} 
              windBearing={this.state.windBearing} 
              cloudCover= {this.state.cloudCover} 
              precipProbability= {this.state.precipProbability}
              precipIntensity={this.state.precipIntensity}/>} />
            <Route exact path = "/forecast" render={(props) => <Forecast {...props}  
              apparentTemperature={this.state.apparentTemperature} 
              temperatureHigh={this.state.temperatureHigh}
              temperatureLow={this.state.temperatureLow}
              windGust={this.state.windGust} 
              windBearing={this.state.windBearing} 
              cloudCover= {this.state.cloudCover} 
              precipProbability= {this.state.precipProbability}
              precipIntensity={this.state.precipIntensity}/>} />
            <Route exact path = "/historical" render={(props) =>  <Historical {...props}
              apparentTemperature={this.state.apparentTemperature} 
              temperatureHigh={this.state.temperatureHigh}
              temperatureLow={this.state.temperatureLow}
              windGust={this.state.windGust} 
              windBearing={this.state.windBearing} 
              cloudCover= {this.state.cloudCover} 
              precipProbability= {this.state.precipProbability}
              precipIntensity={this.state.precipIntensity}/>} />
            <Route exact path = "/color" render={(props) => <Color {...props} 
              apparentTemperature={this.state.apparentTemperature} 
              temperatureHigh={this.state.temperatureHigh}
              temperatureLow={this.state.temperatureLow}
              windGust={this.state.windGust} 
              windBearing={this.state.windBearing} 
              cloudCover= {this.state.cloudCover} 
              precipProbability= {this.state.precipProbability}
              precipIntensity={this.state.precipIntensity} />} />
            <Route exact path = "/gallery" component= {aGallery}/>
            <Route exact path = "/about" component= {About}/> 
          </Switch>
    
          <Footer currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange} />
        </div>
      </Router>
    );
  }
}


export default App;