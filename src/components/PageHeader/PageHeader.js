import React from 'react'
import './PageHeader.css'

const PageHeader = ({ title, description }) => {
  return(
    <div className='pageHeaderContainer'>
      <h1 className="pageTitle">{title}</h1>
      <span className="pageDescription">{description}</span>
    </div>
  )
}

export default PageHeader