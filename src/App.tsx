import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import osm from "./provider.ts"
import { useEffect, useState } from 'react';
import { EditControl } from 'react-leaflet-draw';

function App() {
  const position: [number, number] = [4.6232034, 96.8534587]
  const [datas, setDatas] = useState<any>(null)

  useEffect(() => {
    fetch("http://localhost:3000/api/cagar")
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        setDatas(data)
      })
      .catch((error) => console.error("Error fetching GeoJSON data:", error));
  }, [])
  const handleCreated = (e: any) => {
    const { layer } = e;
    console.log('Created layer:', layer);
  };

  return (
    <div>
      <MapContainer className="w-[100%] h-[100vh]" center={position} zoom={8}>
      <FeatureGroup>
        <EditControl position="topright" draw={{
          rectangle: true,
          circle: true,
          marker: true,
          polyline: true,
          polygon: true,
        }} onCreated={handleCreated} />
      </FeatureGroup>
      <TileLayer attribution={osm.maptiler.attribution} url={osm.maptiler.url} />
      {datas && (
        datas.features.map((data: any, index: any) => {
          const lat: [number, number] = [data.geometry.coordinates[0][1], data.geometry.coordinates[0][0]]
          return (
            <Marker position={lat} key={index}>
              <Popup>
                <p>Id : {data.properties.gid}</p>
                <p>Nama : {data.properties.name}</p>
                <p>Pendidikan : {data.properties.provinsi}</p>
              </Popup>
            </Marker>
          )
        })
      )}
    </MapContainer>
    </div>
  )
}

export default App
