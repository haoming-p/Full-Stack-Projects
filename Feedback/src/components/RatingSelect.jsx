import React from 'react'
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({select}) {
    let [selected, setSelected] = useState(10)
    let {feedbackEdit} = useContext(FeedbackContext)

    useEffect(()=>{
        setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])

    let handleChange = (e) =>{
        setSelected(+e.currentTarget.value)
        //e.target: the element that triggered the event.
        //e.currentTarget: the element to which the event handler is attached  
        select(+e.currentTarget.value)
    }
    
    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                <input
                    type='radio'
                    id={`num${i + 1}`}
                    name='rating'
                    value={i + 1}
                    onChange={handleChange}
                    checked={selected === i + 1}
                />
                <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect
