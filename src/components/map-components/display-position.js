import { React, useState, useCallback, useEffect } from 'react';

export default function DisplayPosition(props) {
  const [position, setPosition] = useState(props.map.getCenter());
  const onMove = useCallback(
    (e) => {
      setPosition(e.latlng);
    },
    [props.map]
  );

  function getLocation() {
    props.handleLocation(props.map.getCenter());
  }

  useEffect(() => {
    props.map.on('click', onMove);
  });
  return (
    <p>
      latitude: {position.lat.toFixed(3)}, longitude: {position.lng.toFixed(3)}{' '}
      <button onClick={(e) => getLocation(e)}>Save</button>
    </p>
  );
}
