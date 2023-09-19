import React, { useEffect, useState } from 'react'
import '../styles.css';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';
import { QUERY_CATAGORY, graphcms } from '../Graphql/Queries';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';



function Projects() {
    const [loading, setLoading] = useState(true);
    const [cata, setCata] = useState();

    useEffect(() => {
        graphcms.request(QUERY_CATAGORY)
            .then(data => {
                console.log(data)
                setCata(data)
                
                setLoading(false);
            }).catch(err => console.log(err));
    }, [])

    useEffect(() => {
        const slideInElements = document.querySelectorAll('.slide-in');
        const fadeInElements = document.querySelectorAll('.fade-in');


        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-active');
                    observer.unobserve(entry.target);
                }
            });
        });

        slideInElements.forEach((element) => {
            observer.observe(element);
        });
    }, []);


    const [postPerPage, setPostPerPage] = useState(8);
    const [currPage, setCurrPage] = useState(1); 
    const [selectedOption, setSelectedOption] = useState('All');
    // const [projectss, setProjetss] = useState(projects);
    const lastPostIndex = currPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    // const filteredProjects = selectedOption === "All" ? projects : projects.filter(item => item.cat === selectedOption);

    // use filteredProjects here
    // const currentPost = filteredProjects.slice(firstPostIndex, lastPostIndex);

    
    // const handleOptionChange = (e) => {
    //     setSelectedOption(e.target.value);
    //     setProjetss(projects)
    //     e.target.value == "All" ? setProjetss(projects) : setProjetss(projects.filter(item=>item.cat==selectedOption))
    // };


   

    // if (loading) {
    //     return (
    //         <div className='flex items-center justify-center h-screen text-secondary-100'>
    //             <ReactLoading type="spin" color='red' height={'50px'} width={'50px'} />
    //         </div>)
    // }

  return (
    <div>
          <div className="relative h-[32vh] bg-bg-img bg-no-repeat bg-center bg-fixed">
              <div className="absolute inset-0 bg-black opacity-50 "></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                  <h1 className="text-5xl font-bold slide-in">Projects</h1>
                  <h2 className="text-xl  text-white text-center mt-8 slide-in">Discover Our Portfolio: Showcasing Our Architectural Masterpieces</h2>

              </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-600 text-center my-10">Catagories of some of our finest projects</h2>
         
        <div className='max-w-[1300px] my-0 mx-auto flex flex-wrap gap-8 slide-in'>
              {cata?.projectCatagories?.map(i=>(
                <ProjectCard key={i.id} img={i.categoryPicture.url} name={i.categoryName}  /> 
              ))}
        </div>
          {/* {currentPost&&<Pagination totalPosts={projects.length} postPerPage={postPerPage} setCurrentPage={setCurrPage} currentPage={currPage} />} */}

    </div>
  )
}

export default Projects