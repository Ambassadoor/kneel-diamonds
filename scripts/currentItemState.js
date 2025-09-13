let currentItem = {
    style: null,
    size: null,
    metal: null,
    timestamp: null
}

export const updateCurrentItem = (key, value) => {
    currentItem[key] = value
}