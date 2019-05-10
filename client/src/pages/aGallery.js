import React from "react";
import ReactDOM from 'react-dom';

class aGallery extends React.Component {
  
  
    PG() {
    const app = document.getElementById('PG');
    const data = [{
      id: 1,
      name: "Island",
      image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b"
    }, {
      id: 2,
      name: "Forest",
      image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254"
    }, {
      id: 3,
      name: "Whale",
      image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff"
    }, {
      id: 4,
      name: "Mountain",
      image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0"
    }, {
      id: 5,
      name: "Boat",
      image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0"
    }, {
      id: 6,
      name: "Flowers",
      image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc"
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
