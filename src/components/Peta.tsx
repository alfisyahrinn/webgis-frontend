import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./providers.ts"
import "leaflet/dist/leaflet.css";
import "../index.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Peta() {
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
  return (
    <MapContainer className="map" center={position} zoom={8}>
      <TileLayer attribution={osm.maptiler.attribution} url={osm.maptiler.url} />
      {datas && (
        datas.features.map((data: Feature, index: any) => {
          const lat: [number, number] = [data.geometry.coordinates[0][1], data.geometry.coordinates[0][0]]
          return (
            <Marker position={lat}>
              <Popup>
                <p>Id : {data.properties.gid}</p>
                <p>Nama : {data.properties.name}</p>
                <p>Pendidikan : {data.properties.provinsi}</p>
                <Link to={"/" + data.properties.gid}>babi</Link>
              </Popup>
            </Marker>
          )
        })
      )}


    </MapContainer>

  )
}
