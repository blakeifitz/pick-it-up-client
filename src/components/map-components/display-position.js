import { React, useState, useCallback, useEffect } from 'react';

export default function DisplayPosition(props) {
  const [position, setPosition] = useState(props.map.getCenter());
  const onMove = useCallback(
    (e) => {
      setPosition(e.latlng);
      props.setLocation(props.map.getCenter());
    },
    [props.map]
  );

  useEffect(() => {
    props.map.on('click', onMove);
  });
  return (
    <p>
      latitude: {position.lat.toFixed(3)}, longitude: {position.lng.toFixed(3)}{' '}
    </p>
  );
}
