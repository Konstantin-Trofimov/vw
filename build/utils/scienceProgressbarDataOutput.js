import { progressLength, setProgressBar, insertToPage, numDataOutput } from './helpers.js'


function scienceProgressbarDataOutput(data) {
    const progress = ((data.plan.currentReceipts / data.plan.currentPlan) * 100).toFixed(2);

    const scienceProgressbar = Array.from(document.querySelectorAll('.science__plan-progressbar-item'));
    const scienceProgressbarLength = progressLength(scienceProgressbar, progress);
    
    function setProgressBar(progressBar, length, val) {
        for (let i = 0; i < length; i++) {
            progressBar[i].setAttribute('fill-opacity', val)
        }
    } 

    setProgressBar(scienceProgressbar, scienceProgressbarLength, 1)

    insertToPage('science__plan-ratio', progress + '%');
    insertToPage('science__plan-value', numDataOutput(data.plan.currentPlan) );
    insertToPage('science__legend-value_current-receipts', numDataOutput(data.plan.currentReceipts));
    insertToPage('science__legend-value_expected-receipts', numDataOutput(data.plan.expectedReceipts));
}


export default scienceProgressbarDataOutput