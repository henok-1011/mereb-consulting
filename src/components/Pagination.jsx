import React from 'react'

function Pagination({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='flex flex-wrap justify-center mt-9'>
            {pages.map((page, index) => {
                return <div> <a href="#"><button className={`${page == currentPage && 'font-semibold border-none bg-red-500 text-white'} w-10 h-10 font-medium text-base leading-none mx-2 rounded-md cursor-pointer transition duration-300 bg-transparent text-gray-800 border border-gray-500 hover:text-gray-600 hover:border-gray-100`} key={index} onClick={() => { setCurrentPage(page) }}>{page}</button></a> </div>
            })}
        </div>
    )
}

export default Pagination