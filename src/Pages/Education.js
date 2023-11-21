import React from 'react'
import {EduList} from "../Helper/eduList" //因為EduList非default所以要加{}
import EduItem from "../Component/EduItem"
import '../Styles/Education.css'

function Education() {
  return (
    <div className='edu'>
        <h1 className='title'>Education</h1>
        <div className='eduList'>
            {EduList.map((eduItem, key) => {
            return (
            <EduItem
                key={key} //不加會出錯
                year={eduItem.year} 
                img={eduItem.image} 
                school={eduItem.school} 
                title={eduItem.title}/>)
                })}
        </div>
    </div>
  )
}

export default Education