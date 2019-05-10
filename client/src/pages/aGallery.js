import React from "react";
import ReactDOM from 'react-dom';

class aGallery extends React.Component {
  
  
    PG() {
    const app = document.getElementById('PG');
    const data = [{
      id: 1,
      name: "Denver FEB2019",
      image: "https://i.imgur.com/PwYdMMX.png"
    }, {
      id: 2,
      name: "Denver MAR2019",
      image: "https://i.imgur.com/yMvc1q8.png"
        }, {
      id: 3,
      name: "Denver MAY2019",
      image: "https://i.imgur.com/jquE1AO.png"
        }, {
      id: 4,
      name: "Napa MAY2019",
      image: "https://i.imgur.com/4ikMT6E.png"
        }, {
      id: 5,
      name: "Denver MAY2019",
      image: "https://i.imgur.com/jquE1AO.png"
        }, {
      id: 6,
      name: "Sacramento MAY2019",
      image: "https://i.imgur.com/a8mL2tX.png"
        } ];

    class App extends React.Component {
      render() {
        return (
          <Tiles data={this.props.data} />
        );
      }
    }

    class Tiles extends React.Component {
      render() {
        // Create tile for each item in data array
        // Pass data to each tile and assign a key
        return (
          <div className="tiles">
            {data.map((data) => {
              return <Tile data={data} key={data.id} />
            })}
          </div>
        );
      }
    }

    class Tile extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          open: false,
          mouseOver: false
        };
        // Bind properties to class instance
        this._clickHandler = this._clickHandler.bind(this);
        this._mouseEnter = this._mouseEnter.bind(this);
        this._mouseLeave = this._mouseLeave.bind(this);
      }
      // Event handlers to modify state values
      _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
          console.log(this.props.data.name);
          this.setState({
            mouseOver: true
          })
        }
      }
      _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
          this.setState({
            mouseOver: false
          })
        }
      }
      _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
          this.setState({
            open: true
          });
        } else {
          this.setState({
            open: false
          });
        }
      }

      render() {
        // Modify styles based on state values
        let tileStyle = {};
        let headerStyle = {};
        let zoom = {};
        // When tile clicked
        if (this.state.open) {
          tileStyle = {
            width: '62vw',
            height: '62vw',
            position: 'absolute',
            top: '50%',
            left: '50%',
            margin: '0',
            marginTop: '-31vw',
            marginLeft: '-31vw',
            boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
            transform: 'none'
          };
        } else {
          tileStyle = {
            width: '18vw',
            height: '18vw'
          };
        }

        return (
          <div className="tile">
            <img
              onMouseEnter={this._mouseEnter}
              onMouseLeave={this._mouseLeave}
              onClick={this._clickHandler}
              src={this.props.data.image}
              alt={this.props.data.name}
              style={tileStyle}
            />
          </div>
        );
      }
    }
    ReactDOM.render(
      <App />,
      document.getElementById('PG')
    );
  }

  componentDidMount() {
    this.PG();
  }

  render() {
    return (
      <div className= "middle"> 
        <section id="PG"></section>

      </div>)
  }
};

export default aGallery;
