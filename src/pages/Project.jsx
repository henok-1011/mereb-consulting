import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { QUERY_PROJECTS, graphcms } from '../Graphql/Queries';
import ReactLoading from 'react-loading';


function Project() {
    const { id } = useParams();
    const [project, setproject] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        graphcms.request(QUERY_PROJECTS)
            .then(data => {
                setproject(data)
                console.log(data)
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
    <div>Project</div>
  )
}

export default Project