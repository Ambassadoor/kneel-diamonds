export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let html = `
        <div class="sizes">
            <h2>Sizes</h2>
    `

    sizes.forEach((size) => {
        html += `
            <input type="radio" name="size" value=${size.id}>${size.carets}
        `
    })


    html += `</div>`

    return html
}