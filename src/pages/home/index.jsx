import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { get_questions } from "../../core/api/get_answers"
import FlashCardList from "../../components/FlashCradList"
import Form from "../../components/Form"
import { extractParamsSlice } from "../../core/redux/params/paramsSlice"

function Home() {
    const paramsState = useSelector(extractParamsSlice)

    const [flashCards, setFlashCards] = useState([])

    useEffect(() => {
        const getQuestions = async () => {
            const result = await get_questions(
                paramsState.amount,
                paramsState.category
            )
            setFlashCards(result)
        }
        getQuestions()
    }, [paramsState])
    return (
        <>
            <Form />
            <div className='container'>
                <FlashCardList flashCards={flashCards} />
            </div>
        </>
    )
}

export default Home
