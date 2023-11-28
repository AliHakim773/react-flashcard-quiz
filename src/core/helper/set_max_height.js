export const setMaxHeight = (elem1, elem2) => {
    const frontHeight = elem1.getBoundingClientRect().height
    const backHeight = elem2.getBoundingClientRect().height
    return Math.max(frontHeight, backHeight, 100)
}
