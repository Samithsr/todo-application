import React from 'react'
import './TaskCard.css'
import Tag from './Tag'
import DeleteIcon from '../delete.svg'

const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
      <div className='task_card_tags'>
        {
          tags.map((tag, index,) => <Tag key={index} tagName={tag} selected={true}/>)
        }

      </div>
      <div className='task_delete' onClick={() =>handleDelete(index)}>
        <img src={DeleteIcon}  className='delete_icon' alt="" />
      </div>
      </div>
      
    </article>
  )
}

export default TaskCard