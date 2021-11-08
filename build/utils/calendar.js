
import { insertToPage} from './helpers.js'


function calendar(dateOfUpdate, isDouble, ...selectors) {
    const array = dateOfUpdate.toString().split('.');
    
    const date = new Date();
    const currentMonth = +array[1];
    const year = new Date().getFullYear();
    const minOpacity = 0.2;
    const maxOpacity = 1;
    const monthProgressBar = Array.from(document.querySelectorAll(`.${selectors[0]} path`));
    let yearProgressBar = [];


    const addZeroBeforeValue = val => val < 10 ? '0' + val : val;

    const month = () => addZeroBeforeValue(currentMonth);
    
    const day = () => addZeroBeforeValue(+array[0]);
    
    const yearRatio = () => {
        const dayFirst = new Date(date.getFullYear(), 0, 0);
        const diff = new Date() - dayFirst;
        const day = 1000 * 60 * 60 * 24;
        const dayNum = Math.floor(diff / day);
        const ratio =  Math.floor((dayNum / 365) * 100); 
        
        return ratio;
    } 

    function setCalendarProgressBar(progressBar, length, val) {
        for (let i = 0; i < length; i++) {
            progressBar[i].setAttribute('fill-opacity', val);
        }
    }

    function setMonthProgressBar() {
        const dayLast = new Date(year, currentMonth, 0).getDate();
        const ratio = 15 / dayLast;
        const progressLength =  Math.round(+array[0] * ratio); 
        
        setCalendarProgressBar(monthProgressBar, progressLength, maxOpacity);
    }

    if (isDouble) {
        yearProgressBar = Array.from(document.querySelectorAll(`.${selectors[1]} path`));

        function setYearProgressBar() {
            const progressLength = Math.round((100 - yearRatio()) * 0.15);
    
            setCalendarProgressBar(yearProgressBar, progressLength, minOpacity);
        }

        setCalendarProgressBar(yearProgressBar, 15, maxOpacity);
        insertToPage(`${selectors[1]}-value`, `${yearRatio()}% год`);
        setYearProgressBar();
    }

    setCalendarProgressBar(monthProgressBar, 15, minOpacity);
    setMonthProgressBar();
    insertToPage(`${selectors[0]}-value`, `${day()}.${month()}.${year}`);
}




export default  calendar