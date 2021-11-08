import { insertToPage, numDataOutput } from './helpers.js'


function financeDataOutput(data) {
    insertToPage('finance__total-value', numDataOutput(data.total));
    
    insertToPage('finance__diagram-value_budget-resources', numDataOutput(data.budgetResources));
    insertToPage('finance__diagram-value_other-resources', numDataOutput(data.otherResources));
    insertToPage('finance__diagram-value_wage-fund', numDataOutput(data.wageFund));
    insertToPage('finance__diagram-value_land-tax', numDataOutput(data.landTax));
    insertToPage('finance__diagram-value_property-tax', numDataOutput(data.propertyTax));
}

export default financeDataOutput