export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let html = `
        <div class="styles">
            <h2>Styles</h2>
    `

    styles.forEach((style) => {
        html += `
            <input type="radio" id=${style.id} name="style" value=${style.style}>${style.style}
        `
    })


    html += `</div>`

    return html
}