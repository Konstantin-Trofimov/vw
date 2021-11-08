import { progressLength, setProgressBar, insertToPage } from './helpers.js'


function studentsEmploymentDataOutput(data) {

    const studentsEmploymentProgressbar = Array.from(document.querySelectorAll('.students__employment-diagram path')).reverse();

    const studentsEmploymentProgressLength = progressLength(studentsEmploymentProgressbar, data);

    setProgressBar(studentsEmploymentProgressbar, studentsEmploymentProgressLength, '#FB9B2B');

    insertToPage('students__employment-value', data + '%')
}

export default studentsEmploymentDataOutput