import { numDataOutput, insertToPage } from './helpers.js'

function studentsCategoriesDiagram(data) {
    insertToPage('students__diagram-info__value_bachelors', numDataOutput(data.bachelors));
    insertToPage('students__diagram-info__value_specialists', numDataOutput(data.specialists));
    insertToPage('students__diagram-info__value_magisters', numDataOutput(data.magisters));
}

export default  studentsCategoriesDiagram