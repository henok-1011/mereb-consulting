import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCards({img, location, name}) {
  return (
      < div className= 'max-w-[400px] bg-transparent rounded-xl pb-5 px-2 pt-2 shadow-md shadow-gray-400  cursor-pointer' >

                <img className='mb-5 rounded-md'  src={img} alt="" />
                <div className='text-left'>
          <h2 className='font-semibold text-lg text-red-500 text-center'>Name: {name}</h2>
          <h2 className='font-semibold text-lg text-red-500 text-center'>Location: {location}</h2>
                     
                </div>

            </div >
  )
}

export default ProjectCards