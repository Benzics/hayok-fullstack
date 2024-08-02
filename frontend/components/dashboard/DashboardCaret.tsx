import React from 'react'
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'

const DashboardCaret = ({ direction, text }: { direction: string; text: string; }) => {
  return (
    
    <div className={`mt-5 w-28 mx-auto  py-1 ${direction == 'up' ? 'bg-[#befacb] text-[rgba(3,176,41,255)]' : 'bg-[#ffdada] text-[#b0030d]'}`}>
        {direction == 'up' ? (
            <BiCaretUp
                size={50}
                className="mx-auto"
            />
        ) : (
            <BiCaretDown
                size={50}
                className="mx-auto"
            />
        ) }
        <span className="block text-center">{ text }</span>
    </div>
  )
}

export default DashboardCaret