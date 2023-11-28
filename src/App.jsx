import { useEffect, useRef, useState } from "react"

import FlashCardList from "./components/FlashCradList"

import { get_questions } from "./core/api/get_answers"

import "./styles/index.css"
import { get_options } from "./core/api/get_options"

function App() {
    const categoryEl = useRef()

    const [flashCards, setFlashCards] = useState([])
    const [categories, setCategories] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        const getQuestions = async () => {
            const result = await get_questions()
            setFlashCards(result)
            const categories = await get_options()
            setCategories(categories)
        }
        getQuestions()
    }, [])

    return (
        <div className='app'>
            <form className='header' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='category'>Category</label>
                    <select id='category' ref={categoryEl}></select>
                </div>
            </form>
            <div className='container'>
                <FlashCardList flashCards={flashCards} />
            </div>
        </div>
    )
}

export default App
