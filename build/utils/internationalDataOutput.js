import { insertToPage, numDataOutput } from './helpers.js'


function internationalDataOutput(data) {
    insertToPage('international__value_foreign-students', numDataOutput(data.foreignStudents));
    insertToPage('international__value_nonresident-students', numDataOutput(data.nonresidentStudents));
    insertToPage('international__value_partners', data.partners);
}



export default internationalDataOutput