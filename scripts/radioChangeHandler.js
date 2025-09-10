import { updateCurrentItem } from "./currentItemState.js"

export const handleRadioChange = (event) => {
    const {id, name } = event.target.closest(`input[type="radio"]`)
    updateCurrentItem(id, name)
}

