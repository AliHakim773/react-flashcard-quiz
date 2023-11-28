import React, { useEffect, useRef, useState } from "react"

import "./styles.css"

function FlashCard({ flashCard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState("initail")

    const frontEl = useRef()
    const backEl = useRef()

    const setMaxHeight = () => {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        return Math.max(frontHeight, backHeight, 100)
    }
    
    useEffect(() => {
        setHeight(setMaxHeight())
    }, [flashCard.answer, flashCard.answer, flashCard.answer])
    useEffect(() => {
        window.addEventListener("resize", setMaxHeight)
        return () => window.removeEventListener("resize", setMaxHeight)
    }, [])

    return (
        <div
            className={`card ${flip ? "flip" : ""}`}
            style={{ height: height }}
            onClick={() => {
                setFlip(!flip)
            }}>
            <div className='front' ref={frontEl}>
                {flashCard.question}
                <div className='flashcard-options'>
                    {flashCard?.options.map((option, i) => (
                        <div key={i} className='flashcard-option'>
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            <div className='back' ref={backEl}>
                {flashCard.answer}
            </div>
        </div>
    )
}

export default FlashCard
