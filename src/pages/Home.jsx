import React, { useEffect, useState } from 'react'
import '../styles.css';

function Home() {
  const logos = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png"]

  const texts = [
    "Inspiring Designs That Leave a Lasting Impression",
    "Architectural Excellence Redefined",
    "Designing Spaces That Reflect Your Unique Identity",
    "Transforming Ideas into Architectural Masterpieces"
  ];

  const vids = ["01 AICEC.mp4", "02 UON-BOULEVAED.mp4", "04 JIJIGA LUBA.mp4","05 ELILTA CMC.mp4"]

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Function to change the text index every 5 seconds
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5600);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
      <div className="relative h-screen w-fill">
        <video className="absolute inset-0 object-cover h-screen w-full" autoPlay muted loop>
          <source src={`/assets/01 AICEC (1) (1).mp4`} type="video/mp4" />          {/* Add additional <source> tags for different video formats (e.g., WebM, Ogg) */}
        </video>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white outlines w-full flex justify-center">
          <h1 className="text-3xl md:text-6xl text-center justify-center font-black slide-in flex flex-wrap gap-6 uppercase "><span>Excellence</span> • <span>Integrity</span> • <span>Innovation</span></h1>
        </div>
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
          <h2 className="text-3xl md:text-5xl w-full font-black slide-in"> {texts[currentTextIndex]}</h2>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <div className="arrow-container">
            <div className="arrow-circle"></div>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <div className='my-28 max-w-[1300px] text-red-600 mx-auto px-5 flex flex-col justify-center items-center'>
        <h2 className="text-left text-4xl font-bold slide-in border-b-2 border-blue-700 inline pb-2">About Our Company</h2>
        <p className="mt-8 text-center text-[18px] font-normal text-blue-900 "><span className='font-semibold'>MEREB®</span> Consulting Engineers and Architects is a highly regarded Category One(Level 1) consulting firm operating at both the Federal level and Addis Ababa city administration level. With a team of experienced professionals, we specialize in Planning, Design, Construction Supervision, and Administration of Civil Engineering projects for public institutions and private individuals. Our head office is situated in Addis Ababa, Ethiopia. As an independent company, we maintain our objectivity and professional judgment, free from any influence or support from commercial, manufacturing, contracting, or public sources. Our reputation is built on our rich expertise and unwavering commitment to delivering exceptional services to our valued clients.</p>
        <a href="/about"> <button className='bg-blue-600 text-white px-8 py-2 mt-5 rounded-xl text-lg font-medium hover:bg-blue-500'>Learn More</button> </a>
          </div>

      <div className='my-[160px] max-w-[1300px] text-red-600 mx-auto px-5 flex flex-col justify-center items-center'>
        <h2 className="text-center text-4xl font-bold slide-in border-b-2 border-blue-700 inline pb-2">Why Others Choose Us</h2>


        <div className='my-14 flex flex-wrap justify-between items-center mx-auto gap-y-8'>
          
          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/icons8-integrated-50.png" alt=""/>
            <h4 className="font-bold text-[26px] text-blue-600">Integrated</h4>
            <p className="mt-2 text-gray-600">
              Our Building Design consultancy takes an integrated approach, seamlessly combining various design elements and disciplines to create cohesive and harmonious spaces that meet both functional and aesthetic requirements.
            </p>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/icons8-client-oriented-50.png" alt="" />
            <h4 className="font-bold text-[26px] text-blue-600">Client-Oriented</h4>
            <p className="mt-2 text-gray-600">
              With a client-oriented focus, our Building Design consultancy prioritizes understanding and fulfilling our clients' unique needs, preferences, and goals, ensuring their vision is at the forefront of every design decision.
            </p>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/icons8-high-quality-80.png" alt="" />
            <h4 className="font-bold text-[26px] text-blue-600">High-quality</h4>
            <p className="mt-2 text-gray-600">
              Our Building Design consultancy is committed to delivering high-quality designs that exceed industry standards. We meticulously consider every detail, from materials and construction techniques to functionality and sustainability, ensuring exceptional outcomes for our clients.
            </p>
          </div>

          <div className='mt-28 mb-20 max-w-[1300px] text-red-600 mx-auto px-5'>
            <h2 className="text-left text-4xl font-bold slide-in border-b-2 border-blue-700 inline pb-2 leading-[55px]">Some of the Clients we've worked with</h2> 
           
          </div>
          <marquee behavior="scroll" direction="left" scrollamount="25" className="w-full flex">
              <div className='flex gap-2'>
              {logos.map(i => (
                <img src={`./assets/clients/${i}`} alt="Company Logo" className="h-24 mx-4" />
              ))}
            </div>
            </marquee>
            <div className='flex justify-center w-full mt-10'>
            <a href="/projects"> <button className='bg-red-600 text-white px-8 py-2 mt-5 rounded-xl text-lg font-bold hover:bg-red-500'>See what We have done for them</button></a>
            </div>
        </div>
      </div>

      <div className='bg-blue-800 py-[70px] flex flex-col items-center justify-center'>
        <h2 className="text-center text-4xl font-bold text-white pb-2 slide-in">Turn Ideas into Extraordinary Architecture</h2>
        <h2 className="text-left text-lg font-medium text-white pb-2 slide-in">Contact us to discover your dream design</h2>
        
        <a href="tel:+2519116601688">  <button className='bg-transparent border-2 border-white text-white px-8 py-2 mt-5 rounded-lg text-lg font-medium slide-in'>Call US Now</button> </a>
    
      </div>

    </div>
  )
}

export default Home