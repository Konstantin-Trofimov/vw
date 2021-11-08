function generalDataOutput(data) {
    for (let key in data) {
        document.querySelector(`.circle-block__value_${key}`).textContent = data[key];
    }
}

export default generalDataOutput