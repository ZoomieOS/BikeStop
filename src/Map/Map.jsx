/*eslint-disable no-undef*/

import React from 'react'
import { compose } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import MarkerElement from './MarkerElement'

const Map = compose(withScriptjs, withGoogleMap)((props) =>
  <GoogleMap
    defaultZoom={16}
    center={props.center}
  >
    {props.places.map(row => {
      return (
        <MarkerElement
          row={ row }
          placeToShow={ props.placeToShow }
          isOpen={ props.isOpen }
          onToggleOpen={ (placeToShow, isOpen) => props.onToggleOpen(placeToShow, isOpen) }
          places={ props.places }
          key={ row.id }
        />
      )
    })}
  </GoogleMap>
);

export default Map;