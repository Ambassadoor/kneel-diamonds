export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let html = `
            <h2>Styles</h2>
    `

    styles.forEach((style) => {
        html += `
        <div>
            <input type="radio" name="styleId" value=${style.id}>${style.style}
        </div>`
    })


    return html
}