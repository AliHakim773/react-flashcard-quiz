import React, { useEffect, useRef, useState } from "react"
import { setMaxHeight } from "../../core/helper/set_max_height"

import "./styles.css"

function FlashCard({ flashCard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState("initail")

    const frontEl = useRef()
    const backEl = useRef()

    useEffect(() => {
        setHeight(setMaxHeight(frontEl.current, backEl.current))
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
