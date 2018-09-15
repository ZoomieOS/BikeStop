import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap'

class MarkerElement extends Component {
  state = {
    placeAdditionalDetails: []
  }

  render() {
    const { row, onToggleOpen, placeToShow, isOpen } = this.props;
    return (
      <Marker position={ {lat: row.lat, lng: row.lon} } id={ row.id } onClick={() => onToggleOpen(row.id, true)}>
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
