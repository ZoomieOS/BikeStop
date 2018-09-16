import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap'

class MarkerElement extends Component {
  state = {
    placeAdditionalDetails: [],
  }

  getBikePointOccupancy() {
      fetch('https://api-argon.tfl.gov.uk/Occupancy/BikePoints/' + this.props.row.id)
          .then(response => response.json())
          .then((oc) => {
            this.setState({ placeAdditionalDetails: oc[0] })
          })
  }


  onMarkerClick() {
        this.getBikePointOccupancy();
        this.props.onToggleOpen(this.props.row.id, true);
    }

  render() {
    const { row, onToggleOpen, placeToShow, isOpen } = this.props;
    return (
      <Marker position={ {lat: row.lat, lng: row.lon} } id={ row.id } onClick={() => this.onMarkerClick()}>
          {
            row.id === placeToShow  && isOpen &&
            <Row>
              <InfoWindow>
                    <CardBody>
                        <Col md={6}>
                          <CardTitle>
                            {
                              row  !== undefined &&
                              row.commonName
                            }
                          </CardTitle>
                        </Col>
                        <Col md={6}>
                            <p>Bikes count: {this.state.placeAdditionalDetails.bikesCount}</p>
                            <p>Empty docks: {this.state.placeAdditionalDetails.emptyDocks}</p>
                          <p>Total docks: {this.state.placeAdditionalDetails.totalDocks}</p>
                        </Col>
                    </CardBody>
              </InfoWindow>
            </Row>
          }
      </Marker>
    );
  }
}

export default MarkerElement;
