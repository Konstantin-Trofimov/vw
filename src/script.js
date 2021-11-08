
import performanceDataOutput from './data/performance.json'
import generalData from './data/generalData.json'
import financeData from './data/financeData.json'
import vaccinationData from './data/vaccinationData.json'
import internationalData from './data/internationalData.json'
import publicationsData from './data/publicationsData.json'
import staffData from './data/staffData.json'
import scienceData from './data/scienceData.json'
import performanceData from './data/performance.json'

import { setMonth } from './utils/helpers'


import performanceDiagram from './utils/performanceDiagram'
import generalDataOutput from './utils/generalDataOutput'
import financeDataOutput from './utils/financeDataOutput'
import internationalDataOutput from './utils/internationalDataOutput'

import vaccinationDataOutput from './utils/vaccinationDataOutput'
import scienceProgressbarDataOutput from './utils/scienceProgressbarDataOutput'
import publicationsDataOutput from './utils/publicationsDataOutput'
import studentsEmploymentDataOutput from './utils/studentsEmploymentDataOutput'
import studentsCategoriesDiagram from './utils/studentsCategoriesDiagram'
import teachingLoadDataOutput from './utils/teachingLoadDataOutput'
import studentsCategoryDataOutput from './utils/studentsCategoryDataOutput'
import calendar from './utils/calendar'




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


