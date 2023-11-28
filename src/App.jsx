import { useEffect, useState } from "react"
import FlashCardList from "./components/FlashCradList"

import "./styles/index.css"
import { get_questions } from "./core/api/get_answers"
import axios from "axios"

function App() {
    const [flashCards, setFlashCards] = useState([])

    useEffect(() => {
        const getQuestions = async () => {
            const result = await get_questions()
            setFlashCards(result)
        }
        getQuestions()
    }, [])

    return (
        <div className='app'>
            <FlashCardList flashCards={flashCards} />
        </div>
    )
}

export default App
