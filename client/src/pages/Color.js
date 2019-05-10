import React from "react";
import API from '../utils/API'

class Color extends React.Component {

  state = {
    dbColors:[],
    colorTheme: {}
  }

handleClick = e => {
  const id = e.target.getAttribute("id");
  const theme= this.state.dbColors.filter(theme => theme._id == id) [0];

  console.log(theme)
  this.setState({colorTheme: theme})
  this.props.setTheme(theme.colorTheme); 
  this.props.history.push('/');
  // API.getColors(id)
  //   .then(res => this.setState({ colorTheme: res.data }))

}

componentDidMount() {
  API.getColors()
  .then(res => this.setState({ dbColors: res.data }));
}

////////// R E N D E R //////////

render() {
  return(
  <div className="middle">
    <h1>Color Palette Selector</h1>
    <p>
    Select a color palette from the paintings below to re-render visualizations:
    </p>
    <div id= "dbGallery">
    {this.state.dbColors.map(theme => (
    <img className="dbImg" id={theme._id} onClick={this.handleClick} src={theme.imageURL} /> ))}</div>
    <div>
    </div>
  </div>
  )}
};

export default Color;