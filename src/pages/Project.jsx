import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { QUERY_PROJECTS, graphcms } from '../Graphql/Queries';
import ReactLoading from 'react-loading';
import ProjectCards from '../components/ProjectCards';


function Project() {
    const { id } = useParams();
    const [project, setproject] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        graphcms.request(QUERY_PROJECTS)
            .then(data => {
                setproject(data)
                console.log(data.projects[0].projectCatagory.categoryName)
                setLoading(false);
            }).catch(err => console.log(err));
    }, [])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen text-secondary-100'>
                <ReactLoading type="spin" color='red' height={'50px'} width={'50px'} />
            </div>)
    }

  return (
    <>
          <h2 className='font-semibold text-2xl mt-16 text-red-500 text-center'>Projects under {id}</h2>

      <div className='max-w-[1300px] my-20 mx-auto flex flex-wrap gap-8'>
              {project.projects?.filter(p => p.projectCatagory.categoryName == id).map(i => (
              <ProjectCards key={i.id} img={i.projectPicture.url} name={i.name}  location={i.location}/>
          ))}
    </div>
    </>
  )
}

export default Project