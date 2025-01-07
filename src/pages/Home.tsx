import { Link } from "react-router-dom";
import Map from "../components/map/Map";
// 
export default function Home() {
  return (
    <div className="py-32 bg-gradient-to-t from-green-200 relative to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-400"> Pelestarian Cagar Budaya Aceh </span>
          </h1>
          <p className="mt-5 text-base text-black sm:text-xl">
            Jelajahi kekayaan sejarah dan budaya Aceh melalui situs-situs bersejarah, bangunan adat, dan karya seni yang mencerminkan warisan leluhur. Mari bersama menjaga cagar budaya untuk generasi mendatang.
          </p>
          <Link to="/21" title="" className="inline-flex items-center px-6 py-4 pt-4 font-semibold text-black transition-all duration-200 bg-green-400 rounded-lg sm:mt-10 hover:bg-green-700 focus:bg-green-800" role="button">
            Cari Situs Budaya
            <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
          <div>
            <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              <div className="flex items-center">
                <svg className="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                    stroke="#28CC9D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                    stroke="#28CC9D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-black">Lebih dari 20+ situs cagar budaya tercatat</p>
              </div>

              <div className="flex items-center">
                <svg className="flex-shrink-0" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7 12.6667L9.25 15L16 8" stroke="#28CC9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="ml-3 text-sm text-black">Pelestarian warisan budaya secara berkelanjutan</p>
              </div>

              <div className="flex items-center">
                <svg className="flex-shrink-0" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z" stroke="#28CC9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7"
                    stroke="#28CC9D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-black">sistem informasi cagar budaya</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10 ">
          <div className="border-2 h-[28rem] w-10/12 rounded-md p-3 shadow-xl">
            <Map edit={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
