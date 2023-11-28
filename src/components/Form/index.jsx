import React, { useEffect, useRef, useState } from "react"
import { get_options } from "../../core/api/get_options"

import "./styles.css"

function Form() {
    const categoryEl = useRef()
    const amountEl = useRef()

    const [categories, setCategories] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        const getQuestions = async () => {
            const getCategories = await get_options()
            setCategories(getCategories)
        }
        getQuestions()
    }, [])

    return (
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
    )
}

export default Form
