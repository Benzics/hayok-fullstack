import React from 'react'
import { FaCalendar } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav
        className="border-b border-gray-500 flex relative mt-5 items-center"
    >
        <ul className="left-0 flex text-gray-400">
          <a href="#">
            <li className="py-1 active-nav border-b-4">Dashboard</li>
          </a>
          <a href="#">
            <li className="py-1 ml-5">Patients</li>
          </a>
          <a href="#">
            <li className="py-1 ml-5">Appointment</li>
          </a>
          <a href="#">
            <li className="py-1 ml-5">Admin</li>
          </a>
          <a href="#">
            <li className="py-1 ml-5">Referrals</li>
          </a>
          <a href="#">
            <li className="py-1 ml-5">Settings</li>
          </a>
        </ul>


        <div className="ml-auto text-xs">
          <span className="block mb-1">Time Frame:</span>
          <div className="flex">
            <span className="inline-blok custom-bg-gray border border-gray-400 px-4 py-1 rounded mb-1">
              07/07/24 <FaCalendar className="inline-block ml-3" />
            </span>

            <span className="inline-block p-2 pt-1 font-bold">
            &mdash;
            </span>

            <span className="inline-blok custom-bg-gray border border-gray-400 px-4 py-1 rounded mb-1">
              30/07/24 <FaCalendar className="inline-block ml-3" />
            </span>
          </div>
        </div>
    </nav>
  )
}

export default NavBar