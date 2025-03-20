import React from "react";
import { GoogleMap, useJsApiLoader ,Marker} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "90%",
};



const center = {
  lat: -6.1833650,
  lng: 106.8255050,
};



function GoogleMapsComp({selectedLocation}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAsLV_1qA4lSKrRLYFw27jEUBWrD2OXr18",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      // center={center}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    > 
      
      {/* <Marker position={selectedLocation}  ></Marker> */}
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapsComp);
