import React, { useEffect } from 'react'
import { IoLocation, IoCall, IoMail } from 'react-icons/io5';
import '../styles.css';



function Contact() {

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
                  <h1 className="text-5xl font-bold slide-in">Contact Us</h1>
              </div>
          </div>

            <div className='max-w-[1300px] px-6 my-14 mx-auto block md:flex flex-wrap justify-center items-center '>
              <div className='w-full md:w-1/2 mb-28'>
                <p className='font-semibold text-gray-500 text-center md:text-left text-xl'>Write to us or contact us using the phone number below, and we'll respond to you as quickly as possible.</p>
                <div className='flex gap-28 mt-12 flex-wrap justify-start'>
                      <div className='flex text-2xl font-semibold'><IoLocation className='mr-2' /> <span className='text-red-600 text-left'>Address <br /><span className='text-lg text-gray-500 font-normal'>MERCY PLAZA 9th floor office 902, Addis Ababa <br /> <span><a className='mt-4 text-blue-600 flex gap-2' href="https://maps.google.com/maps/dir//Mereb+Consulting+Architects+and+Engineers+Addis+Ababa+1080/@9.0202064,38.8138652,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x164b85796f99d381:0xdf7754bb60fdcc52" target='_blank'><img className='h-10' src="./assets/icons/plus-code.png" alt="" />6GXW2RC7+2G</a></span></span></span></div>
                      <div className='flex text-2xl font-semibold'><IoCall className='mr-2' /> <span className='text-red-600 text-left'> Call US <br /><span className='text-lg text-gray-500 font-normal'>+2519116601688 <br />+2511118684465</span></span></div>
                      <div className='flex text-2xl font-semibold'><IoMail className='mr-2' /> <span className='text-red-600 text-left'>Email US <br /><span className='text-lg text-gray-500 font-normal'>Mereb.consult@gmail.com <br />hahub@yahoo.com</span></span></div>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                  <div className="flex justify-center items-center flex-wrap gap-10 ">
                      <form className="w-[500px] bg-white p-6 rounded-lg shadow-md">
                          <input
                              className="w-full p-2 mx-2 my-3 bg-gray-100 border-none"
                              type="text"
                              name="Name of sender"
                              placeholder="Full Name"
                          />

                          <input
                              className="w-full p-2 mx-2 my-3 bg-gray-100 border-none"
                              type="email"
                              name="email"
                              placeholder="Email"
                          />
                          <input
                              className="w-full p-2 mx-2 my-3 bg-gray-100 border-none"
                              type="email"
                              name="email"
                              placeholder="Phone Number"
                          />
                          <input
                              className="w-full p-2 mx-2 my-3 bg-gray-100 border-none"
                              type="email"
                              name="email"
                              placeholder="Subject"
                          />

                          <textarea
                              className="w-full p-2 mx-2 my-3 bg-gray-100 border-none"
                              name="message"
                              placeholder="Your Message"
                              cols={30}
                              rows={10}
                          ></textarea>

                          <button
                              className="bg-blue-900 text-white px-3 py-2 font-medium rounded-sm hover:bg-blue-800 my-0 mx-auto"
                              type="submit"
                          >
                              Send Request
                          </button>
                      </form>
                  </div>
              </div>
            </div>
        <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.47667500309!2d38.81129027490917!3d9.020206391040777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85796f99d381%3A0xdf7754bb60fdcc52!2sMereb%20Consulting%20Architects%20and%20Engineers!5e0!3m2!1sen!2set!4v1693509565693!5m2!1sen!2set" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Contact