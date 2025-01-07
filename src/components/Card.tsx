import { Link } from "react-router-dom"
import MapDetail from "./map/detail/MapDetail"

type Card = {
    gid: number
    name: string,
    kecamatan: string,
    deskripsi: string,
    coordinate_y: number,
    coordinate_x: number
}

export default function Card({ props }: { props: Card }) {


    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/cagar/${props.gid}`}>
                <div className="w-full h-40 bg-zinc-600">
                    <MapDetail props={{
                        coordinate_y: props.coordinate_y,
                        coordinate_x: props.coordinate_x
                    }} />
                </div>
            </Link>
            <div className="p-5">
                <Link to={`/cagar/${props.gid}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                </Link>
                <p className="bg-green-100 mb-2 inline-block  text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{props.kecamatan}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props.deskripsi.length > 10
                        ? props.deskripsi.substring(0, 50) + "..."
                        : props.deskripsi}
                </p>
                <Link to={`/cagar/${props.gid}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>

    )
}
