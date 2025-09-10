
export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let html = `
        <div id="metalOptions">
            <h2>Metals</h2>
    `

    metals.forEach((metal) => {
        html += `
            <input type="radio" id=${metal.id} name="metal" value=${metal.metal}/>${metal.metal}
        `
    })

    html += `</div>`

    return html

}