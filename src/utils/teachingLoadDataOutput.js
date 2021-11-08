import { progressLength, setProgressBar, insertToPage} from './helpers'

function teachingLoadDataOutput(data) {
    const teachingLoadProgressbar = Array.from(document.querySelectorAll('.students__teaching-load-progressbar span'));

    const teachingLoadProgressLength = progressLength(teachingLoadProgressbar, data.ratio);

    function setProgressBarteachingLoad (progressBar, length, val) {
        for (let i = 0; i < length; i++) {
            progressBar[i].style.backgroundColor = val;
        }
    }  

    setProgressBarteachingLoad(teachingLoadProgressbar, teachingLoadProgressLength, '#1A5FC7');
    insertToPage('spanstudents__teaching-load-value', data.hours);
    insertToPage('students__teaching-load-ratio', data.ratio + '%');
}

export default teachingLoadDataOutput