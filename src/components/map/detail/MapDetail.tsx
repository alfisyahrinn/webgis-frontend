import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import osm from '../provider.ts'

type MapDetail = {
    coordinate_y: number
    coordinate_x: number
}

export default function MapDetail({ props }: { props: MapDetail }) {

    console.log({
        y: props.coordinate_y,
        x: props.coordinate_x
    })
    const lat: [number, number] = [props.coordinate_x, props.coordinate_y]
    return (
        <MapContainer scrollWheelZoom={false} dragging={false} zoomControl={false} doubleClickZoom={false} className="w-full h-full rounded-sm" center={lat} zoom={8}>
            <TileLayer attribution={osm.maptiler.attribution} url={osm.maptiler.url} />
            <Marker position={[props.coordinate_x, props.coordinate_y]}>
            </Marker>
        </MapContainer>
    )
}
