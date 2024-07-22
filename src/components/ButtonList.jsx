import React from 'react'

const buttons = ["All", "JavaScript","Java","Music","Live","Shorts","Blogs","Trending","Programming"]
const ButtonList = () => {
  return (
    <div className='lg:flex gap-4 grid md:grid-cols-5 grid-cols-3 sm:grid-cols-4'>
      {
        buttons.map((item,index) => {
            return  <button key={index} className='bg-gray-200 px-4 font-medium py-1 rounded-lg'>{item}</button>

        })
      }
    </div>
  )
}

export default ButtonList
