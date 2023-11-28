import { decode_string } from "../helper/decode_string"
import axios from "axios"

export const get_questions = async (amount, category) => {
    try {
        const result = await axios
            .get("https://opentdb.com/api.php", {
                params: {
                    amount: amount,
                    category: category,
                },
            })
            .then((res) => {
                const items = res.data.results.map((questionItem, index) => {
                    const answer = decode_string(questionItem.correct_answer)
                    const options = [
                        ...questionItem.incorrect_answers.map((a) =>
                            decode_string(a)
                        ),
                        answer,
                    ]
                    const result = {
                        id: `${index}-${Date.now()}`,
                        question: decode_string(questionItem.question),
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
