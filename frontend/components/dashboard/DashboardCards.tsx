import React from 'react'
import { BiCaretUp } from 'react-icons/bi'
import { FaPersonPregnant } from 'react-icons/fa6'
import DashboardCaret from './DashboardCaret'
import { FaBook, FaUser } from 'react-icons/fa'
import PregnancyChart from './PregnancyChart'
import DashboardPie from './DashboardPie'

const DashboardCards = () => {
  return (
    <>
      <section
          className="grid grid-cols-6 z-10 relative gap-3 -top-10">
          <div className="custom-bg-blue border border-gray-200 rounded border-b-0 py-14 px-6">
              <div className="icon-wrap p-2">
                  <FaPersonPregnant size={40}/>
              </div>
              <p className="mt-5 text-xs text-gray-400">
                  Total No of Patient:
                  <span className="text-3xl block text-white font-bold">34,892</span>
              </p>
          </div>
          <div className="bg-white rounded grid grid-rows-3">
            <div className="row-span-2 px-4 pt-4">
              <div className="flex items-center">
                <span className="border-4 bg-[rgba(3,176,41,255)] p-1 rounded-full border-[#befacb] inline-block"></span>
                <span className="inline-block text-black text-xs ml-2"> Successful Deliveries</span>
              </div>
              <DashboardCaret
                direction="up"
                text="34.5%"
                />
            </div>
            <div className="custom-bg-blue py-2 px-4 items-center">
              <p className="text-xs text-gray-400">
                  Total No:
                  <span className="text-3xl block text-white font-bold">34,892</span>
              </p>
            </div>
          </div>
          <div className="bg-white p5 rounded grid grid-rows-3">
            <div className="row-span-2 px-4 pt-4">
              <div className="flex items-center">
                <span className="border-4 bg-[#d29e17] p-1 rounded-full border-[#ffecba] inline-block"></span>
                <span className="inline-block text-black text-xs ml-2"> Miscarriage</span>
              </div>
              <DashboardCaret
                direction="down"
                text="-34.5%"
                />
            </div>
            <div className="custom-bg-blue py-2 px-4 items-center">
              <p className="text-xs text-gray-400">
                  Total No:
                  <span className="text-3xl block text-white font-bold">34,892</span>
              </p>
            </div>
          </div>
          <div className="bg-white p5 rounded grid grid-rows-3">
            <div className="row-span-2 px-4 pt-4">
              <div className="flex items-center">
                <span className="border-4 bg-[#c12b61] p-1 rounded-full border-[#fab8d0] inline-block"></span>
                <span className="inline-block text-black text-xs ml-2"> Maternal Mortality</span>
              </div>
              <DashboardCaret
                direction="up"
                text="34.5%"
                />
            </div>
            <div className="custom-bg-blue py-2 px-4 items-center">
              <p className="text-xs text-gray-400">
                  Total No:
                  <span className="text-3xl block text-white font-bold">34,892</span>
              </p>
            </div>
          </div>
          <div className="bg-white col-span-2 min-h-48 p5 rounded shadow-2xl">
            <div className="grid grid-cols-2">
              <div className="px-4 pt-4">
                <h3 className="text-black text-xs mb-2">Piechart</h3>
                <div className="py-8 px-6">
                  <DashboardPie />
                </div>
              </div>
              <div className="py-8 text-black flex items-center justify-center">
                <div className="grid grid-rows-3">
                  <div className="flex gap-2 mb-3">
                    <span>70%</span> 
                    <div className="flex items-center">
                      <span className="border-4 bg-[rgba(3,176,41,255)] p-1 rounded-full border-[#befacb] inline-block"></span>
                      <span className="inline-block text-black text-xs ml-2"> Successful Deliveries</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span>20%</span> 
                    <div className="flex items-center">
                      <span className="border-4 bg-[#d29e17] p-1 rounded-full border-[#ffecba] inline-block"></span>
                      <span className="inline-block text-black text-xs ml-2"> Miscarriage</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span>10%</span> 
                    <div className="flex items-center">
                      <span className="border-4 bg-[#c12b61] p-1 rounded-full border-[#fab8d0] inline-block"></span>
                      <span className="inline-block text-black text-xs ml-2"> Maternal Mortality</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
      </section>
      <section className="mt-3 grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="custom-bg-blue p-6 rounded">
            <div className="flex items-center">
              <div className="icon-wrap p-2">
                <FaUser size={40} />
              </div>
              <p className="text-xs text-gray-400 ml-5">
                  Total No Admin:
                  <span className="text-3xl block text-white font-bold">34,892</span>
              </p>
            </div>
          </div>

          <div className="custom-bg-blue p-6 rounded mt-3">
            <div className="flex items-center">
              <div className="icon-wrap p-2">
                <FaBook size={40} />
              </div>
              <p className="text-xs text-gray-400 ml-5">
                  Total No Referrals:
                  <span className="text-3xl block text-white font-bold">34,892</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <div className="border min-h-96 bg-white border-gray-400 mb-5 p-20">
            <PregnancyChart />
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardCards