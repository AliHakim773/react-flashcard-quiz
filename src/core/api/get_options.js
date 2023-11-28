import { decode_string } from "../helper/decode_string"
import axios from "axios"

export const get_options = async () => {
    try {
        const result = await axios
            .get("https://opentdb.com/api_category.php")
            .then((res) => {
                return res.data.trivia_categories
            })
        return result
    } catch (err) {
        return err
    }
}
