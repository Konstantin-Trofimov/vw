
import performanceDataOutput from './data/performance.json.proxy.js'
import generalData from './data/generalData.json.proxy.js'
import financeData from './data/financeData.json.proxy.js'
import vaccinationData from './data/vaccinationData.json.proxy.js'
import internationalData from './data/internationalData.json.proxy.js'
import publicationsData from './data/publicationsData.json.proxy.js'
import staffData from './data/staffData.json.proxy.js'
import scienceData from './data/scienceData.json.proxy.js'
import performanceData from './data/performance.json.proxy.js'

import { setMonth } from './utils/helpers.js'


import performanceDiagram from './utils/performanceDiagram.js'
import generalDataOutput from './utils/generalDataOutput.js'
import financeDataOutput from './utils/financeDataOutput.js'
import internationalDataOutput from './utils/internationalDataOutput.js'

import vaccinationDataOutput from './utils/vaccinationDataOutput.js'
import scienceProgressbarDataOutput from './utils/scienceProgressbarDataOutput.js'
import publicationsDataOutput from './utils/publicationsDataOutput.js'
import studentsEmploymentDataOutput from './utils/studentsEmploymentDataOutput.js'
import studentsCategoriesDiagram from './utils/studentsCategoriesDiagram.js'
import teachingLoadDataOutput from './utils/teachingLoadDataOutput.js'
import studentsCategoryDataOutput from './utils/studentsCategoryDataOutput.js'
import calendar from './utils/calendar.js'




document.addEventListener('DOMContentLoaded', () => {
    performanceDiagram(performanceData.absolute, performanceData.quality);
    generalDataOutput(generalData);
    financeDataOutput(financeData);
    internationalDataOutput(internationalData);
   
    vaccinationDataOutput(vaccinationData);
    scienceProgressbarDataOutput(scienceData[0]);
    publicationsDataOutput(publicationsData, 'wos');
    studentsEmploymentDataOutput(staffData.employment)
    teachingLoadDataOutput(staffData.load);
    studentsCategoryDataOutput(staffData.categories)
    studentsCategoriesDiagram(staffData.categories.groups)

    calendar(financeData.date , true, 'calendar__month-progress-bar__finance', 'calendar__year-progress-bar__finance');
    calendar(publicationsData.date, true,'calendar__month-progress-bar__science', 'calendar__year-progress-bar__science');
    calendar( vaccinationData.date , true,'calendar__month-progress-bar__vaccination', 'calendar__year-progress-bar__vaccination');
    calendar( internationalData.date , true,'calendar__month-progress-bar__international', 'calendar__year-progress-bar__international');
    calendar(staffData.date , false, 'calendar__month-progress-bar__students');

    setMonth(staffData.date, 'students__diagram-month-text');  
    setMonth(publicationsData.date, 'science__diagram-month-text');  

    
   
    


})


