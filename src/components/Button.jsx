import React from 'react'

const Button = ({children,className}) => {
  return (
    <>
     <button className={`${className} bg-[#FF5A3C] text-white font-nunito`}>{children}</button> 
    </>
  )
}

export default Button
