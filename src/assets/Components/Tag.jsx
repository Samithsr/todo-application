import React from 'react'
import './Tag.css'

const Tag = ({tagName,select, selected}) => {
  
    const tagstyle = {
      HTML : {backgroundColor: "#fda821"},
      CSS : {backgroundColor: "#15d4c8"},
      JavaScript :{backgroundColor: "#ffd12c"},
      React : {backgroundColor: "#4cdafc"},
      Default : {backgroundColor: "#f9f9f9"},
    }
  
  return (
    <button type='button'  className='tag'
    style={selected ? tagstyle[tagName]: tagstyle.Default}
    onClick={()=>select(tagName)}>{tagName} </button>
  )
}

export default Tag 