let currentItem = {
    style: null,
    size: null,
    metal: null,
    timestamp: null
}


export const updateCurrentItem = (key, value) => {
    currentItem[key] = value
    console.log(currentItem)
}

const createOrder = async (item) => {
    item.timestamp = new Date().toISOString()

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    }
    const response = await fetch("http://localhost:8088/orders", options)

    if (response.ok) {
        const orderEvent = new CustomEvent("newOrder")
        document.dispatchEvent(orderEvent)
    }
}

export const handleCreateOrder = () => {createOrder(currentItem)}