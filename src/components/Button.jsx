import React from 'react'

const Button = ({margin,bgColor, color, size, text, borderRadius , clicked}) => {
  return (
   <button
     onClick={clicked}
     type='button'
     style={{backgroundColor: bgColor, color, borderRadius , margin}}
     className={`text-${size} p-3 hover:drop-shadow-xl`} 
   >
      {text}
   </button>
  )
}

export default Button