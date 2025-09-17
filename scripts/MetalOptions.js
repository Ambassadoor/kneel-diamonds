export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let html = `
            <h2>Metals</h2>
    `

    metals.forEach((metal) => {
        html += `<div>
        <input type="radio" name="metalId" value=${metal.id}>${metal.metal}
        </div>`
    })


    return html

}