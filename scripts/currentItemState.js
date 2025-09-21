
let currentItem = {
    styleId: null,
    sizeId: null,
    metalId: null,
    timestamp: null,
    type: "1"
}


export const updateCurrentItem = (key, value) => {
    currentItem[key] = value
    console.log(currentItem)
    document.dispatchEvent(new CustomEvent("optionSelect"))

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
        Object.keys(currentItem).forEach((key) => currentItem[key] = null)
    }
}

export const handleCreateOrder = () => {createOrder(currentItem)}

export const getTransientState = () => {
    return currentItem
}