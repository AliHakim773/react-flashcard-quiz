import React, { useState } from "react"

import "./styles.css"

function FlashCard({ flashCard }) {
    const [flip, setFlip] = useState(false)
    return (
        <div
            className={`card ${flip ? "flip" : ""}`}
            onClick={() => {
                setFlip(!flip)
            }}>
            <div className='front'>
                {flashCard.question}
                <div className='flashcard-options'>
                    {flashCard?.options.map((option, i) => (
                        <div key={i} className='flashcard-option'>
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            <div className='back'>{flashCard.answer}</div>
        </div>
    )
}

export default FlashCard
