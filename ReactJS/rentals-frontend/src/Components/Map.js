import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import MapCard from "./MapCard";
import mapstyles from "./mapStyle";
function Map({ app }) {
  const [selectedApp, setSelectedApp] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 28.613939, lng: 77.209023 }}
      defaultOptions={{ styles: mapstyles }}
    >
      {app.map((app) => {
        return (
          <Marker
            key={app.id}
            position={{
              lat: parseFloat(app.geoCord.split(",")[0]),
              lng: parseFloat(app.geoCord.split(",")[1]),
            }}
            onClick={() => {
              setSelectedApp(app);
            }}
            icon={{
              url: "/home.png",
              scaledSize: new window.google.maps.Size(45, 30),
            }}
          />
        );
      })}
      {selectedApp && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedApp.geoCord.split(",")[0]),
            lng: parseFloat(selectedApp.geoCord.split(",")[1]),
          }}
          onCloseClick={() => {
            setSelectedApp(null);
          }}
        >
          <MapCard app={selectedApp} />
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
