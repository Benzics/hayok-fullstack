import React from 'react'
import { FaSearch } from 'react-icons/fa'
import NavBar from '../ui/NavBar'
import { BiCaretDown } from 'react-icons/bi'

const Header = ({minHeight} : {minHeight?: string}) => {
  return (
    <header
        className="bg-[url('../public/images/bg-1.jpg')]  bg-no-repeat bg-cover">
        <div className="custom-bg-navy px-8 py-2">
          <div className="relative flex items-center justify-between py-4">
            <div className="left-0">
              <a href="#" className="inline-block bg-transparent py-1 px-6 rounded border border-white text-white">LOGO</a>
            </div>

            <div className="right-0">
              <div className="flex">
                <div className="custom-bg-gray py-2 pl-2 rounded relative text-gray-400 flex text-sm">
                  <FaSearch 
                    className="inline-block top-1 relative"
                  />
                  <input
                    className="block pl-2 pr-6 bg-transparent outline-none w-64"
                    placeholder="Search"
                    type="search"
                    />
                </div>
                <ul className="pl-8 flex items-center justify-between text-xs">
                  <li className="flex items-center">
                    <span className="block p-2 text-xs">ENG</span>
                    <span className="block custom-bg-gray ml-1 p-2">
                      <BiCaretDown />
                    </span>
                  </li>

                  <li className="flex ml-2 items-center">
                    <span className="block p-2">Profile</span>
                    <span className="block custom-bg-gray ml-1 p-2">
                      <BiCaretDown />
                    </span>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>

          <section className="py-6 text-2xl text-white">
            Good Evening, Users
          </section>

          <NavBar />
          <div className={minHeight}></div>
        </div>
    </header>
  )
}

export default Header