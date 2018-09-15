import React, { Component } from 'react';
import Map from './Map/Map.jsx'
import Search from './Search/Search.jsx'
import escapeRegExp from "escape-string-regexp";
import { Col } from 'reactstrap'

class App extends Component {
  state = {
    center: {
      lat: 51.508530,
      lng: -0.076132
    },

    places: [],

    placesFiltered: [],

    placeToShow:[],

    isOpen: false
  }

  componentDidMount(){
      fetch('https://api-argon.tfl.gov.uk/BikePoint')
          .then(response => response.json())
          .then((points) => {
              this.setState(state => ({
                  places: points,
                  placesFiltered: points,
              }))
          })
  }

  onInputChanged = (input) => {
    if(input) {
      const match = new RegExp(escapeRegExp(input), "i");

      this.setState(state => ({
        placesFiltered: state.places.filter(place => {
          return match.test(place.commonName)
        })
      }))
    } else {
      this.setState({placesFiltered: this.state.places})
    }
  }

  onToggleOpen = (placeToShow, isOpen) => {
    this.setState({ placeToShow, isOpen });
  }

  render() {
    const { placesFiltered, placeToShow, isOpen, center} = this.state;

    return (
      <div className="App">
          <Col md={ 3 }>
            <Search
              places = { placesFiltered }
              onInputChanged = { (input) => this.onInputChanged(input) }
              onToggleOpen={ (placeToShow, isOpen) => this.onToggleOpen(placeToShow, isOpen) }
            />
          </Col>
          <Col md={ 9 }>
            <Map
              places = { placesFiltered }
              placeToShow={ placeToShow }
              isOpen={ isOpen }
              center={ center }
              onToggleOpen={ (placeToShow, isOpen) => this.onToggleOpen(placeToShow, isOpen) }
              containerElement={ <div style={{ height: `67em` }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
              loadingElement={ <div style={ { height: `100%` } }></div> }
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCRQSQd7cwt1BdrCbwrB2gc01WwETqooZc&v=3&libraries=places,geometry,drawing'
            />
          </Col>
      </div>
    );
  }
}

export default App;
