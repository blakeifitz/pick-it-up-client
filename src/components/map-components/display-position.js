import { React, useState, useCallback, useEffect } from 'react';

export default function DisplayPosition({ map }, props) {
  const [position, setPosition] = useState(map.getCenter());

  const onMove = useCallback(
    (e) => {
      setPosition(e.latlng);
    },
    [map]
  );

  function getLocation(position) {
    props.handleLocation(position);
  }

  useEffect(() => {
    map.on('click', onMove);
  });

  return (
    <p>
      latitude: {position.lat.toFixed(3)}, longitude: {position.lng.toFixed(3)}{' '}
      <button onClick={(e) => getLocation(e)}>Save</button>
    </p>
  );
}
