export const OrderDisplay = async () => {
const response = await fetch(`http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size`)

let html = ``
if (response.ok) {
    const orders = await response.json();

    if (orders.length > 0) {
    orders.forEach(order => {
        const id = order.id
        const total = order.metal.price + order.style.price + order.size.price
        const price = total.toLocaleString("en-US", { style: "currency", currency: "USD"})

        html += `<div class="order">
            <p>Order #${id} cost ${price}</p>
        </div>`

        
    });

    }
}

return html
}