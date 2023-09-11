import React, { useEffect } from 'react'
import '../styles.css';
import CountUp from 'react-countup';



function About() {
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
                  <h1 className="text-5xl font-bold slide-in">About Us</h1>
              </div>
          </div>

      <div className='bg-blue-800 py-[35px] mb-10 flex items-center'>
        <div className='max-w-[1300px] my-0 mx-auto px-5 flex justify-center flex-wrap gap-x-28 text-center'>
          <div>
            <h2 className='text-7xl font-bold text-white leading-7 slide-in text-center my-8 mx-auto'>
              <CountUp end={20} duration={2} separator="," /> +
            </h2>
            <span className='text-lg font-medium text-white'>Hardworking Employees</span>
          </div>
          <div>
            <h2 className='text-7xl font-bold text-white leading-7 slide-in text-center my-8 mx-auto'>
              <CountUp end={200} duration={2} separator="," />  +
            </h2>
            <span className='text-lg font-medium text-white'>Projects</span>
          </div>
          <div>
            <h2 className='text-7xl font-bold text-white leading-7 slide-in text-center my-8 mx-auto'>
              <CountUp end={180} duration={2} separator="," /> +
            </h2>
            <span className='text-lg font-medium text-white'>Happy Customers</span>
          </div>
        </div>
      </div>
      <h2 className="text-3xl  text-center mb-10 px-5">Commited to bring your dreams to reality</h2>
      <div className='max-w-[1300px] px-5 my-0 mx-auto flex flex-wrap gap-8 res'>
        <p className="text-lg  text-left w-1/2">At <span className='font-bold'>MEREB®</span> Consulting Engineers and Architects, our integrated architectural designs harmoniously combine aesthetics and functionality. As a Category I consultant operating at the federal and city level in Ethiopia, we leverage our professionals' extensive expertise to deliver exceptional planning, design, supervision, and project management services. With a client-focused approach, we aim to understand each client's unique vision and bring it to life through our innovative, high-quality architectural solutions. Our award-winning designs showcase our commitment to excellence, utilizing state-of-the-art technologies and techniques. As an independent firm, we maintain objectivity and integrity, ensuring our work is aligned with clients' goals. Over our 15 years in business, we have established a reputation for outstanding service, transparency, and achieving successful project outcomes that exceed expectations. Our ultimate mission is to collaborate with clients to create enduring architectural masterpieces.</p>
        <img className=' w-[40%]' src="./assets/back-cover.jpg" alt="" />
      </div>

      <div className='my-[160px] max-w-[1300px] text-red-600 mx-auto px-5 flex flex-col justify-center items-center'>
        <h2 className="text-center text-4xl font-bold slide-in border-b-2 border-blue-700 inline pb-2">What our Clients Say About Us</h2>
        
        <div className='w-full my-14 flex flex-wrap justify-between items-center gap-y-8'>
          <div className="max-w-sm min-h-full bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
              We found mereb consult has a strong group with remarkable communication skill which is very important in design and supervision of construction.            </p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Dr Mezgebu Kassa Feleke (Fr.) Ethiopian center of Ethics President</h4>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400 ">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
We would love to work with them again.            </p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Dessie Alemu
              Director and CEO,Hyatt place Addis Ababa</h4>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
They project we completed with MEREB is probably one of our finest.            </p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Yonas Tadesse
              CEO,Ovid Group</h4>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
             We fill strongly that Mereb consulting will make an outstanding contribution to any project in which it is a part.    </p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Habtamu Mengiste
              Engineering Chief Executive officer
              Ovid group</h4>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
              Mereb consult refined approach make their work much more valuable to clients and also has a great way of keeping updated on any change they made.   </p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Mulat Gebrehiwot
              Deputy Manager
              Sunrise Real-estate</h4>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
              Your esteemed organization played remarkable role in the designing and supervision of master plan.</p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Dr.Hirut Kassew Wendim
              Addis Ababa City government culture,Arts & tourism bureau Head</h4>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
              Our company delighted and glad to express our appreciation for your service.</p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Birhane Woldu
              General Manager
              Legacy real-estate</h4>
          </div>
          

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
              We are glad we sought out MEREB for their services. They are top notch at what they do.</p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Birhanu Tiruneh
              Managing director,Elilta realestate</h4>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-lg shadow-md shadow-gray-400">
            <img className="h-12 w-12" src="./assets/icons/quote.png" alt="" />
            <p className="mt-2 mb-7 text-gray-600 text-left">
              We truly admire your design and construction consultation.Thank you.</p>
            <h4 className="font-medium text-left ml-2 text-[18px] text-blue-600">Azeb Tesfaye
              Manager
              Taza Apartments</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About