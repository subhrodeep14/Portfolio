import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className=' flex justify-center px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 ' ><span>{text}</span></button>
      
    </div>
  )
}

export default Button
