import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import osm from '../provider.ts'
import { marker1, marker2 } from '../../marker/Marker.ts'

type MapDetail = {
    coordinate_y: number
    coordinate_x: number
    status : 1 | 0
}

export default function MapDetail({ props }: { props: MapDetail }) {
    console.log({
        y: props.coordinate_y,
        x: props.coordinate_x
    })
    const lat: [number, number] = [props.coordinate_x, props.coordinate_y]
    return (
        <MapContainer scrollWheelZoom={false} dragging={false} zoomControl={false} doubleClickZoom={false} className="w-full h-full rounded-sm relative z-10" center={lat} zoom={8}>
            <TileLayer attribution={osm.maptiler.attribution} url={osm.maptiler.url} />
            <Marker position={[props.coordinate_x, props.coordinate_y]} icon={(props.status == 0) ? marker1 : marker2}> 
            </Marker>
        </MapContainer>
    )
}
