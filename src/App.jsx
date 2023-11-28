import { useState } from "react"
import "./styles/index.css"
import FlashCardList from "./components/FlashCradList"

function App() {
    const [flashCards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
    return (
        <div className='app'>
            <FlashCardList flashCards={flashCards} />
        </div>
    )
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: "what is 2 + 2",
        answer: "4",
        options: ["2", "3", "4", "5"],
    },
    {
        id: 2,
        question: "Question 2",
        answer: "answer",
        options: ["answer", "answer 1", "answer 2", "answer 3"],
    },
    {
        id: 3,
        question: "Question 3",
        answer: "answer",
        options: ["answer", "answer 1", "answer 2", "answer 3"],
    },
]

export default App
