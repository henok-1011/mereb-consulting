import React, { useEffect } from 'react'
import { MdArchitecture } from 'react-icons/md';
import '../styles.css';



function Service() {
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
    return (
        <div>
            <div className="relative h-[32vh] bg-bg-img bg-no-repeat bg-center bg-fixed">
                <div className="absolute inset-0 bg-black opacity-50 "></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-5xl font-bold slide-in">Our Services</h1>
                </div>
            </div>
            <h2 className="text-2xl text-red-600 text-center mt-14 slide-in">Unleashing Architectural Potential: Comprehensive Consultancy for <br /> Inspired Designs and Flawless Execution</h2>

            <div className='max-w-[1300px] my-[65px] mx-auto flex flex-wrap gap-6 justify-center px-5'>
                {/* card start */}
                <div className='my-10 pb-3 w-full sm:w-[30%]  bg-blue-500 p-10 rounded-xl flex flex-col justify-start gap-5 text-white flex-1'>

                    <img className='w-[25%] font-medium relative -top-[64px] right-10' src="./assets/icons/architectural-design.png" />
                    <div className='-mt-20 '>
                        <h1 className='text-3xl font-medium'>Architectural Design</h1>
                        <p className='text-lg font-medium mt-5 pb-14'>Design your space with our expert architects. Unlock the potential of exceptional architectural design.</p>
                    </div>
                </div>
                {/* card end  */}
                {/* card start */}
                <div className='my-10 pb-3 w-full sm:w-[30%]  bg-blue-500 p-10 rounded-xl flex flex-col justify-start gap-5 text-white'>

                    <img className='w-[25%] font-medium relative -top-20 right-10' src="./assets/icons/feasibility-study.png" />
                    <div className='-mt-20 '>
                        <h1 className='text-3xl font-medium'>Feasibility Study</h1>
                        <p className='text-lg font-medium mt-5 pb-14'>Make informed decisions with our comprehensive feasibility studies, providing insightful analysis and expert recommendations.</p>
                    </div>
                </div>
                {/* card end  */}
                {/* card start */}
                <div className='my-10 pb-3 w-full sm:w-[30%]  bg-blue-500 p-10 rounded-xl flex flex-col justify-start gap-5 text-white'>

                    <img className='w-[25%] font-medium relative -top-20 right-10' src="./assets/icons/structural-modeling-design.png" />
                    <div className='-mt-20 '>
                        <h1 className='text-3xl font-medium'>Structural Modeling & Design</h1>
                        <p className='text-lg font-medium mt-5 pb-14'>Elevate your structures with our precise modeling and design expertise, ensuring strength, safety, and innovation.</p>
                    </div>
                </div>
                {/* card end  */}
                {/* card start */}
                <div className='my-10 pb-3 w-full sm:w-[30%]  bg-blue-500 p-10 rounded-xl flex flex-col justify-start gap-5 text-white'>

                    <img className='w-[25%] font-medium relative -top-20 right-10' src="./assets/icons/mep.png" />
                    <div className='-mt-20 '>
                        <h1 className='text-3xl font-medium'>MEP Design</h1>
                        <p className='text-lg font-medium mt-5 pb-14'>Optimize your building's systems with our mechanical, electrical and plumbing design expertise, delivering efficient and sustainable solutions</p>
                    </div>
                </div>
                {/* card end  */}
                {/* card start */}
                <div className='my-10 pb-3 w-full sm:w-[30%]  bg-blue-500 p-10 rounded-xl flex flex-col justify-start gap-5 text-white'>

                    <img className='w-[25%] font-medium relative -top-20 right-10' src="./assets/icons/sgb.png" />
                    <div className='-mt-20 '>
                        <h1 className='text-3xl font-medium'>Sustainability and Green Building Design</h1>
                        <p className='text-lg font-medium mt-5 pb-14'>Embrace sustainability with our green building design expertise, creating eco-friendly spaces that harmonize with the environment.</p>
                    </div>
                </div>
                {/* card end  */}
                {/* card start */}
                <div className='my-10 pb-3 w-full sm:w-[30%]  bg-blue-500 p-10 rounded-xl flex flex-col justify-start gap-5 text-white'>

                    <img className='w-[25%] font-medium relative -top-20 right-10' src="./assets/icons/ambt.png" />
                    <div className='-mt-20 '>
                        <h1 className='text-3xl font-medium'>Alternative Modern Building Technologies Consultancy</h1>
                        <p className='text-lg font-medium mt-5 pb-14'>Unlock innovative possibilities with our consultancy in alternative modern building technologies, revolutionizing construction practices.</p>
                    </div>
                </div>
                {/* card end  */}
            </div>
        </div>
    )
}

export default Service