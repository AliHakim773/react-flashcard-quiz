export const decode_string = (str) => {
    const textArea = document.createElement("textarea")
    textArea.innerHTML = str
    return textArea.value
}
