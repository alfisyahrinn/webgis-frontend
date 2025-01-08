import Map from "../components/map/Map";

export default function Request() {
  
  return (
    <div className="bg-gradient-to-t from-green-200 relative to-white h-[100vh]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="max-w-2xl mx-auto text-center py-6">
          <h1 className="text-2xl font-bold sm:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400">Tambah, Edit Cagar Budaya Di Sekitar Anda</span>
          </h1>
        </div>
        <div className="w-full h-96 border-2 rounded-md p-3 shadow-xl border-solid border-gray-300">
          <Map edit={true} />
        </div>
      </div>
    </div>
      )
}
