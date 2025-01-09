import { Link, useParams } from "react-router";
import MapDetail from "../components/map/detail/MapDetail";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from "flowbite-react";
import { URL_API } from "../types/connect";

export default function DetailCagar() {
    let { id } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const [data, setData] = useState<any>()
    useEffect(() => {
        fetch(`${URL_API}/cagar/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log("data: ", data)
                setData(data)
            })
            .catch((error) => console.error("Error fetching GeoJSON data:", error));
    }, [])

    const navigate = useNavigate();


    const handleSubmit = async (e: any) => {
        const form = e.target;
        const namaSitus = form.elements.namedItem("nama_situs").value;
        const kabupaten = form.elements.namedItem("kabupaten").value;
        const kategori = form.elements.namedItem("kategori").value;
        const deskripsi = form.elements.namedItem("deskripsi").value;
        const provinsi = form.elements.namedItem("provinsi").value;

        // Buat payload untuk dikirim
        const payload = {
            nm_objekcb: namaSitus,
            nm_kategor: kategori,
            slug_kateg: kategori,
            deskripsi: deskripsi,
            district: kabupaten,
            province: provinsi,
        };

        console.log("payload", payload);

        try {
            // Kirim payload ke backend
            const response = await fetch(`${URL_API}/cagar/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Data berhasil diupdate:", data);

                navigate(`/cagar/${id}`);
            } else {
                console.error("Gagal mengupdate data:", response.statusText);
            }
        } catch (error) {
            console.error("Error saat mengupdate data:", error);
        }
    };


    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            try {
                const response = await fetch(`${URL_API}/cagar/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    console.log(`Item with id: ${id} deleted successfully`);

                    navigate('/cagar');
                } else {
                    console.error('Failed to delete item');
                }
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    if (data) {
        return (
            <div className="bg-gradient-to-t from-green-200 relative to-white h-[100vh]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="max-w-2xl mx-auto text-center py-6">
                        <h1 className="text-2xl font-bold sm:text-5xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400">{data.properties.name}</span>
                        </h1>
                    </div>
                    <div className="w-full h-96 border-2 rounded-md p-3 shadow-xl border-solid border-gray-300">
                        <MapDetail props={{
                            coordinate_y: data.properties.shape_leng,
                            coordinate_x: data.properties.shape_area,
                            status: data.properties.status
                        }} />
                    </div>
                    <div className="w-full text-center mb-2">
                        <p className="mt-5 text-base text-zinc-600 sm:text-xl">
                            {data.properties.deskripsi}
                        </p>
                    </div>
                    <div className="w-full mb-2">
                        <p className="mt-3 text-base text-zinc-600 sm:text-xl">
                            Kategori :
                            <span className="font-bold"> {data.properties.kategori}</span>
                        </p>
                        <p className="mt-3 text-base text-zinc-600 sm:text-xl">
                            Kabupaten :
                            <span className="font-bold"> {data.properties.district}</span>
                        </p>
                        <p className="mt-3 text-base text-zinc-600 sm:text-xl">
                            Provinsi :
                            <span className="font-bold"> {data.properties.provinsi}</span>
                        </p>
                    </div>
                    <div className="mt-2">
                        <Modal
                            show={openModal}
                            position={"center"}
                            onClose={() => setOpenModal(false)}
                        >
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <Modal.Header>Edit Form</Modal.Header>
                                <Modal.Body>
                                    <div className="space-y-6 p-6">

                                        <div className="grid gap-2 mb-2 md:grid-cols-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                                                    Nama Situs
                                                </label>
                                                <input
                                                    type="text"
                                                    name="nama_situs"
                                                    defaultValue={data.properties.name}
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
                                                    defaultValue={data.properties.district}
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
                                                    defaultValue={data.properties.kategori}
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
                                                rows={3}
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="deskripsinya..."
                                            >{data.properties.deskripsi}</textarea>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
                                    <Button type="submit">Save</Button>
                                    <Button color="gray" onClick={() => setOpenModal(false)}>
                                        Cancel
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal>
                        {isLoggedIn && (<>
                            <button
                                type="button"
                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                                onClick={() => setOpenModal(true)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                                onClick={() => handleDelete(Number(id))}
                            >
                                Delete
                            </button>
                        </>)}

                    </div>
                </div>
            </div>
        )
    } else {
        <div className="bg-gradient-to-t from-green-200 relative to-white h-[100vh]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="max-w-2xl mx-auto text-center py-6">
                    <h1 className="text-2xl font-bold sm:text-5xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400">Data Tidak Di Temukan</span>
                    </h1>
                    <Link to="/" title="" className="inline-flex items-center px-6 py-4 pt-4 font-semibold text-black transition-all duration-200 bg-green-400 rounded-lg sm:mt-10 hover:bg-green-700 focus:bg-green-800" role="button">
                        Kembali
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    }
}
