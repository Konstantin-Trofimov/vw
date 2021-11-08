function vaccinationDataOutput(data) {

    function sumData() {
        const result = [data.vaccinated, data.unvaccinated, data.recovered, data.sick, data.unsuitable];
        const sum = result.reduce((a, b) => a + b)

        return sum;
    } 

    const categoryRatio = category => Math.ceil((category / sumData()) * 100);

    const setLine = (value, color) => {
        return  `
            <svg width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <svg class="vaccination__graphiс-data" width="${categoryRatio(value + 1)}" x="0" y="0" >
                <rect class="vaccination__graphiс-row" fill=${color} x="0" y="0" transform="translate(-5)"/>
                <text class="vaccination__graphiс-value" x="100%" y="60%"  text-anchor="middle" dy="0.3em" transform="translate(5)">
                    ${value}
                </text>
            </svg>
        </svg>`
    }
            
    function output (data) {
        const element = document.createElement('div');

        element.classList.add('vaccination__graphiс');

        element.innerHTML = `

            ${setLine(data.vaccinated,'#217AFF')}
            ${setLine(data.unvaccinated, '#6C38FF')}
            ${setLine(data.recovered, '#A7EB17')}
            ${setLine(data.unsuitable, '#FB9B2B' )}
            ${setLine(data.sick, '#FD6A6A')}
       
        `;

        document.querySelector('.vaccination__diagram-wrap').append(element);
    }

    output(data);
    document.querySelector('.vaccination__diagram-value').textContent = data.total;
    setVaccinationtDescription(data.total)
}

function setVaccinationtDescription(data) {
    const description = document.querySelector('.vaccination__diagram-descr span');

    const getlastNum = () => {
        let array = data.toString().split('');

        return +array[array.length - 1]
    } 

    const lastNum = getlastNum()

    let str = 'челове';

    if (lastNum === 2 || lastNum === 3 || lastNum === 4) {
        str += 'ка'
    } 
    else {
        str += 'к'
    }

    description.textContent = str;
}



export default vaccinationDataOutput