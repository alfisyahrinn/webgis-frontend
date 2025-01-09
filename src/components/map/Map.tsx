import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import osm from "./provider.ts";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { marker1, marker2 } from "../marker/Marker.ts";
import { URL_API } from "../../types/connect.ts";

export default function Map({ edit }: { edit: boolean }) {
  const position: [number, number] = [4.6232034, 96.8534587];
  const [datas, setDatas] = useState<any>(null);

  useEffect(() => {
    fetch(`${URL_API}/cagar`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setDatas(data);
      })
      .catch((error) => console.error("Error fetching GeoJSON data:", error));
  }, []);


  const handleSubmit = (e: any, latlng: { lat: number; lng: number }) => {
    e.preventDefault();
    const form = e.target;
    const namaSitus = form.elements.namedItem("nama_situs").value;
    const kabupaten = form.elements.namedItem("kabupaten").value;
    const kategori = form.elements.namedItem("kategori").value;
    const deskripsi = form.elements.namedItem("deskripsi").value;
    const provinsi = form.elements.namedItem("provinsi").value;

    // Buat payload untuk dikirim
    const payload = {
      "nm_objekcb": `${namaSitus}`,
      "nm_kategor": `${kategori}`,
      "slug_kateg": `${kategori}`,
      "deskripsi": `${deskripsi}`,
      "district": `${kabupaten}`,
      "province": `${provinsi}`,
      "objectid": 1,
      "provinsi": "Aceh",
      "longitude": latlng.lng,
      "latitude": latlng.lat,
    };
    fetch(`${URL_API}/cagar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data berhasil disimpan:", data);
        alert("Data berhasil disimpan!");
      })
      .catch((error) => {
        console.error("Error saat menyimpan data:", error);
        alert("Gagal menyimpan data.");
      });
  };



  const handleCreated = (e: any) => {
    const { layer } = e;
    const latlng = layer.getLatLng();
    console.log("Created layer:", layer);
    console.log("Latitude:", latlng.lat, "Longitude:", latlng.lng);

    const popupContent = (
      <div className="w-80 h-full">
        <form onSubmit={(e) => handleSubmit(e, { lat: latlng.lat, lng: latlng.lng })}>
          <div className="grid gap-2 mb-2 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Nama Situs
              </label>
              <input
                type="text"
                name="nama_situs"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nama Situs"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Kabupaten
              </label>
              <input
                type="text"
                name="kabupaten"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kabupaten"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Kategori
              </label>
              <input
                type="text"
                name="kategori"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kategori"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Provinsi
              </label>
              <input
                disabled
                type="text"
                name="provinsi"
                value={'Aceh'}
                className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-green-500"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Deskripsi
            </label>
            <textarea
              name="deskripsi"
              rows={1}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="deskripsinya..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    );

    // Membuat elemen DOM baru untuk popup
    const popupContainer = document.createElement("div");

    // Menggunakan ReactDOM.createPortal untuk merender JSX ke dalam popup
    ReactDOM.render(popupContent, popupContainer);

    // Mengikat popup dengan konten yang telah dirender dan membuka popup
    layer.bindPopup(popupContainer).openPopup();
  };

  return (
    <MapContainer
      scrollWheelZoom={false}
      className="w-full h-full rounded-sm"
      center={position}
      zoom={8}
    >
      {edit && (
        <FeatureGroup>
          <EditControl
            position="topright"
            draw={{
              rectangle: false,
              circle: false,
              marker: true,
              polyline: false,
              polygon: false,
              circlemarker: false,
            }}
            onCreated={handleCreated}
          />
        </FeatureGroup>
      )}
      <TileLayer attribution={osm.maptiler.attribution} url={osm.maptiler.url} />
      {datas &&
        datas.features.map((data: Feature, index: any) => {
          const lat: [number, number] = [
            data.properties.shape_area,
            data.properties.shape_leng,
          ];
          return (
            <Marker position={lat} key={index} icon={(data.properties.status == 0) ? marker1 : marker2}>
              <Popup>
                <p>Id : {data.properties.gid}</p>
                <p>Nama : {data.properties.name}</p>
                <p>Pendidikan : {data.properties.provinsi}</p>
                <Link to={`/cagar/${data.properties.gid}`}>Detail</Link>
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
}
