import axios from "axios"

export const get_questions = async () => {
    try {
        const result = await axios
            .get("https://opentdb.com/api.php?amount=10")
            .then((res) => {
                const items = res.data.results.map((questionItem, index) => {
                    const answer = questionItem.correct_answer
                    const options = [...questionItem.incorrect_answers, answer]
                    const result = {
                        id: `${index}-${Date.now()}`,
                        question: questionItem.question,
                        answer,
                        options: options.sort(() => Math.random() - 0.5),
                    }
                    return result
                })
                return items
            })
        return result
    } catch (err) {
        return err
    }
}
