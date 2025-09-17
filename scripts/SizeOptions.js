export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let html = `
            <h2>Sizes</h2>
    `

    sizes.forEach((size) => {
        html += `
        <div>
            <input type="radio" name="sizeId" value=${size.id}>${size.carets}
        </div>
        `
    })


    return html
}