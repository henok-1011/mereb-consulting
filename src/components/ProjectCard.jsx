import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({img, year, area, location, name}) {
  return (
      < div className= 'max-w-[400px] bg-transparent rounded-xl pb-5 px-2 pt-2 shadow-md shadow-gray-400 hover:max-w-[402px] cursor-pointer' >
      <Link to={`/projects/${name}`}>
                <img className='mb-5 rounded-md'  src={img} alt="" />
                <div className='text-left'>
                      <h2 className='font-semibold text-lg text-red-500 text-center'>{name}</h2>
                     
                </div>
              </Link>
            </div >
  )
}

export default ProjectCard