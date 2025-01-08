import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Cagar() {

  const [datas, setDatas] = useState<any>(null)
  useEffect(() => {
    fetch("http://localhost:3000/api/cagar")
      .then(res => res.json())
      .then((data) => {
        console.log(data.features)
        setDatas(data.features)
      })
      .catch((error) => console.error("Error fetching GeoJSON data:", error));
  }, [])
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="max-w-2xl mx-auto text-center py-6">
        <h1 className="text-4xl font-bold sm:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400">Daftar Warisan Budaya Indonesia di Aceh</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
        {datas && (
          datas.map((data: Feature, index: any) => (
            <Card key={index} props={{
              status: data.properties.status,
              gid: data.properties.gid,
              name: data.properties.name,
              kecamatan: data.properties.district,
              deskripsi: data.properties.deskripsi,
              coordinate_y: data.geometry.coordinates[0][0],
              coordinate_x: data.geometry.coordinates[0][1],
            }} />
          ))
        )}
      </div>
    </div>
  )
}
