import React from 'react'

const Header = ({ category, title}) => {
  return (
    <div className="mb-5">
      <p className='text-xl font-extrabold
      tracking-tight text-slate-900'>{title}</p>
    </div>
  )
}

export default Header