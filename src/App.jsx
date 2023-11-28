import { useEffect, useRef, useState } from "react"

import FlashCardList from "./components/FlashCradList"

import { get_questions } from "./core/api/get_answers"
import { get_options } from "./core/api/get_options"

import "./styles/index.css"

function App() {
    const categoryEl = useRef()
    const amountEl = useRef()

    const [flashCards, setFlashCards] = useState([])
    const [categories, setCategories] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        const getQuestions = async () => {
            const result = await get_questions()
            setFlashCards(result)
            const getCategories = await get_options()
            setCategories(getCategories)
        }
        getQuestions()
    }, [])

    return (
        <div className='app'>
            <form className='header' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='category'>Category</label>
                    <select id='category' ref={categoryEl}>
                        {categories?.map((category) => {
                            return (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>Number of questions</label>
                    <input
                        type='number'
                        id='amount'
                        min='1'
                        step='1'
                        defaultValue={10}
                        ref={amountEl}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn'>Generate</button>
                </div>
            </form>
            <div className='container'>
                <FlashCardList flashCards={flashCards} />
            </div>
        </div>
    )
}

export default App
