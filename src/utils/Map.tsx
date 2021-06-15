import { MapContainer, TileLayer, useMapEvent, Marker } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { locationDTO } from './location.model';
import {useState} from 'react';

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Maps(props: mapProps) {
  const [locations, setLocations] = useState<locationDTO[]>(props.locations);
    return (
    <MapContainer
      center={[13.7010634, -89.225877]}
      zoom={14}
      style={{ height: props.height }}
    >
      <TileLayer
        attribution='React - Movies'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      ></TileLayer>
      <ClickMap
        setPoint={(locations) => {
          setLocations([locations]);
          props.handleMapClick(locations);
        }}
      />
      {locations.map((location, index) => (
        <MapMarker key={index} {...location} />
      ))}
    </MapContainer>
  );
}

function ClickMap(props: clickMapProps) {
  useMapEvent('click', (e) => {
    props.setPoint({ lat: e.latlng.lat, lng: e.latlng.lng });
  });
  return null;
}

function MapMarker(props: locationDTO) {
  return <Marker position={[props.lat, props.lng]} />;
}

interface clickMapProps {
  setPoint(location: locationDTO): void;
}

interface mapProps {
  height: string;
  locations: locationDTO[];
  handleMapClick(location: locationDTO): void;
}

Maps.defaultProps = {
  height: '500px',
};
