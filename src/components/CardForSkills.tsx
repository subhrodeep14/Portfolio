import React from 'react'

const CardForSkills = ({text,image}) => {
  return (
    <div className='p-2 w-48 h-60  border-none bg-zinc-800 text-white flex flex-col justify-center items-center gap-7 rounded-lg hover:bg-zinc-600 hover:w-52 hover:h-60 hover:cursor-pointer'>
      <div className='flex justify-center align-middle items-center w-36 h-36 mt-9'>
        <img src={image} alt="" />
      </div>
      <div className='flex justify-center items-center mb-8 font-semibold text-2xl'>
        {text}
      </div>
    </div>
  )
}

export default CardForSkills
