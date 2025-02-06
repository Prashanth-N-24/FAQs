import React, { useState } from 'react'

const Accordian = ({title,answer}) => {

    const [accordianOpen, setAccordianOpen] = useState(false);

    return (
        <div className='p-2'>
            <button onClick={()=> setAccordianOpen(!accordianOpen)} className='flex justify-between w-full py-1'>
                <span className='text-sm'> {title}</span>
                {accordianOpen ? <span className='font-bold  fill-indigo-500'>-</span> : <span className='  font-bold fill-indigo-500'>+</span> }
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${ accordianOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0" }`}>
                <div className='overflow-hidden  text-xs   '>{answer}</div>
            </div>
        </div>
    )
}

export default Accordian
