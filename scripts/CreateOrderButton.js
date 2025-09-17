export const createOrderButton = () => {

    const button = `<button type="submit" value="createOrder" >Create Custom Order</button>`

    return button
}

export const handleCreateOrder = async (order) => {
    
    const postOptions = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(order)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    if (response.ok) {
        const newOrderEvent = new CustomEvent("newOrder")
        document.dispatchEvent(newOrderEvent)
    }
}