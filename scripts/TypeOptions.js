import { getTransientState } from "./currentItemState.js"

export const TypeOptions = async () => {

    const currentType = Number(getTransientState().type)

    const response = await fetch("http://localhost:8088/types")
    const types = await response.json()

    let html = `
        <div>
    `

    types.forEach((type) => {
        html += `<input type="radio" name="type" value=${type.multiplier} ${type.multiplier === currentType ? "checked" : ""}>${type.type}`
    })

    html += `</div>`

    return html
}