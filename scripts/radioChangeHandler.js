import { updateCurrentItem } from "./currentItemState.js"

export const handleRadioChange = (event) => {
    const {value, name } = event.target.closest(`input[type="radio"]`)
    updateCurrentItem(name, value)
}

