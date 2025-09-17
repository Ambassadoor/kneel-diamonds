import { createOrderButton } from "./CreateOrderButton.js";
import { MetalOptions } from "./MetalOptions.js";
import { SizeOptions} from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";
import { handleCreateOrder } from "./currentItemState.js";
import { handleRadioChange } from "./radioChangeHandler.js";
import { OrderDisplay } from "./OrderDisplay.js";

const render = async () => {

    const metalOptions = await MetalOptions()
    const sizeOptions = await SizeOptions();
    const styleOptions = await StyleOptions()
    const orderButton = createOrderButton();
    const orderDisplay = await OrderDisplay();

    const html = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${metalOptions}
            </section>
            <section class="choices__sizes options">
                ${sizeOptions}
            </section>
            <section class="choices__styles options">
                ${styleOptions}
            </section>
        </article>
        <article class="order">
            ${orderButton}
        
        </article>
        <article class="customerOrders">
            <h2>Custom Jewelry Orders</h2>
            ${orderDisplay}
        </article>
    `
    document.querySelector("body").innerHTML = html
    document.querySelector(".choices").addEventListener("change", handleRadioChange)
    document.querySelector("#order_button").addEventListener("click", handleCreateOrder )
    document.addEventListener("newOrder", () => {
        console.log("New Order Created")
        render()
    })
}

render()
