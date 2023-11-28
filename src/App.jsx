import { useEffect, useRef, useState } from "react"

import FlashCardList from "./components/FlashCradList"

import { get_questions } from "./core/api/get_answers"

import "./styles/index.css"
import Form from "./components/Form"

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
            <Form />
            <div className='container'>
                <FlashCardList flashCards={flashCards} />
            </div>
        </div>
    )
}

export default App
