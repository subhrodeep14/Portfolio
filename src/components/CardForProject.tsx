import React from 'react'




const Cards = ({ techs, text, pageLink, gitLink, description, image }) => {

  return (
    <div className='p-5 w-1/3 h-2/3 rounded-xl bg-zinc-800'>

      <div className=''>
        <div className=''>
          <img src={image} alt="" />
        </div>
        <div className='flex justify-center items-center mt-3 text-blue-500'>
          <h1 className='text-3xl font-bold text-center'>{text}</h1>
        </div>
      </div>

      <div className=' mt-3 p-4 '>
        <div className='flex justify-start h-8'>

          {techs.map((tech, index) => (
            <h4 key={index} className='px-2 py-1 flex justify-center items-center font-semibold bg-zinc-200 text-blue-700  border rounded-md mr-3'>{tech}</h4>

          ))}

        </div>
        <div className='flex justify-start items-start mt-3'>
          <p className='inline-block'>{description}</p>
        </div>
      </div>
      <div className='flex justify-center items-center font-medium'>
        <button>
          <a href={pageLink} target='_blank' className='bg-blue-400 hover:bg-blue-500 text-zinc-900 px-4 py-2 rounded-lg m-3'>Live Link</a>
        </button>
        <button>
          <a href={gitLink} target='_blank' className='bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg m-3'>Github</a>
        </button>
      </div>

    </div>
  )
}

export default Cards
