import { MetalOptions } from "./MetalOptions.js";
import { handleRadioChange } from "./radioChangeHandler.js";

const render = async () => {

    const metalOptions = await MetalOptions()

    const html = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${metalOptions}
            </section>
        </article>
    `
    document.querySelector("body").innerHTML = html
    document.querySelector(".choices").addEventListener("change", handleRadioChange)
}

render()
