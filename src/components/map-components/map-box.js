import { React, useState, useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import DisplayPosition from './display-position';
import LocationMarker from './location-marker';

const center = [39.479, -84.058];
const zoom = 13;

export default function MapBox(props) {
  const [map, setMap] = useState(null);
  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    ),
    []
  );

  return (
    <div>
      {displayMap}
      {map ? (
        <div>
          {' '}
          <DisplayPosition map={map} />
        </div>
      ) : null}
    </div>
  );
}
