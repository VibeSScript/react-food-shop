import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '80%',
  height: '400px',  
};

const center = {
  lat: 44.2036264,
  lng: 0.6149378
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCaE8zB0Z4bysoqQZfgbG1p9pWyQ4omyMg", 
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       <Marker position={{lat: 44.2036264, lng:0.6149378}} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)