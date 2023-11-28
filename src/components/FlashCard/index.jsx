import React from "react"

function FlashCard({ flashCard }) {
    console.log(flashCard)
    return <div>{flashCard.question}</div>
}

export default FlashCard
