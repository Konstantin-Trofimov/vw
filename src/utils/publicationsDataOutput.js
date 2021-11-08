function publicationsDataOutput(data, category) {
    const diagram = Array.from(document.querySelectorAll(`.wos rect`));

    const max = Math.max(...data[category]);

    diagram.map((i, index) => {
        let value = (data[category][index] / max) * 100;

        i.setAttribute('height', `${value}%`);
        i.setAttribute('y', `${100 - value}%`);
    });

    document.querySelector('.science__diagram-value').textContent = max;
}

export default  publicationsDataOutput