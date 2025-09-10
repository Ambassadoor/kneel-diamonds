let currentItem = {
    styleId: null,
    sizeId: null,
    metalId: null,
    timestamp: null
}

export const updateCurrentItem = (key, value) => {
    currentItem[key] === value
}