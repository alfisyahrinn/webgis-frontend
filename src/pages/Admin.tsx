import { useEffect, useState } from "react";
import { URL_API } from "../types/connect";

export default function Admin() {
    const [datas, setDatas] = useState<any>(null);
    useEffect(() => {
        fetch(`${URL_API}/cagar`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDatas(data.features);
            })
            .catch((error) => console.error("Error fetching GeoJSON data:", error));
    }, []);
    const handleStatus = async (props: { status: number, id: number }) => {
        console.log(props)
        try {
            const response = await fetch(`${URL_API}/cagar/status/${props.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status: props.status
                }),
            });

            if (response.ok) {
                alert("status berhasil diupdate:",);
            } else {
                alert("Gagal mengupdate status");
            }
        } catch (error) {
            console.error("Error saat mengupdate data:", error);
        }
    }
    return (
        <div className="w-full flex flex-wrap items-center justify-between px-20 py-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="pl-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="w-1/2">
                                Deskripsi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kategori
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kabupaten
                            </th>
                            <th scope="col" className="px-6 py-3">
                                status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas ? (datas.map((item: Feature, index: any) => (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="pl-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.properties.gid}
                                </th>
                                <td className="px-6 py-4">
                                    {item.properties.name}
                                </td>
                                <td className="py-4 max-w-xs break-words">
                                    {item.properties.deskripsi}
                                </td>
                                <td className="px-6 py-4">
                                    {item.properties.kategori}
                                </td>
                                <td className="px-6 py-4">
                                    {item.properties.district}
                                </td>
                                <td className="px-6 py-4">
                                    {item.properties.status == 1 ? <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Terverifikasi</span> : <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Review</span>}
                                </td>
                                <td className="px-6 py-4">
                                    {item.properties.status == 0 ?
                                        (<button onClick={() => handleStatus({ status: 1, id: item.properties.gid })} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Accept</button>) :
                                        (<button onClick={() => handleStatus({ status: 0, id: item.properties.gid })} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Disable</button>)}

                                </td>
                            </tr>
                        ))) : (<h1>Data tidak Ada</h1>)}
                    </tbody>


                </table>
            </div>
        </div>
    );
}
