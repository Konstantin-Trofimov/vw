class VaccinationBlock extends HTMLElement {
    constructor() {
        super()
        this.render()
        
    }

    render() {
        this.innerHTML = `
        <div id="vaccination" class="vaccination block">
            <svg class="block-bg" viewBox="0 0 417 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 34.5V306V307L18.5 323.5H113.5L122 315H143L149 321.5H186.5L198 309.5H288L299.5 321.5H399.5L414 306L415 30L396 11.5H366L356.5 2H314.5L305 11.5H25L2 34.5Z"
                    fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.9"
                    stroke-width="3" />
                <path d="M323.31 6H351.5L347.69 10H319.5L323.31 6Z" fill="#223E9E" />
                <path d="M169.881 314H187.5L185.119 316H167.5L169.881 314Z" fill="#0E2D7B" />
                <path d="M173.881 310H191.5L189.119 312H171.5L173.881 310Z" fill="#0E2D7B" />
                <path d="M323.364 6H336.5L332.636 10H319.5L323.364 6Z" fill="#217AFF" />
                <path d="M170 314H178.5L176 316H167.5L170 314Z" fill="#217AFF" />
                <path d="M174 310H186.5L184 312H171.5L174 310Z" fill="#217AFF" />
            </svg>
            <div class="block-wrap">
                <div class="vaccination__header">
                    <div class="vaccination__title block-title">Москва (вакцинация)</div>
                    <div class="vaccination__select">
                        <svg class="block-bg" viewBox="0 0 208 33" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 0.5H0.5V1V22.64V32V32.5H1H14.3384H207H207.5V32V12.5V12.2609L207.314 12.1108L193.054 0.61079L192.916 0.5H192.74H1Z"
                                stroke="#217AFF" />
                        </svg>
                        <div class="vaccination__select-item">
                            <span class="vaccination__select-item-text">Филиалы (вакцинация)</span>
                            <svg class="vaccination__select-item-icon" viewBox="0 0 9 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5.5L0.749999 0.736861L0.749999 10.2631L9 5.5Z" fill="#217AFF" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="vaccination__diagram">
                    <div class="vaccination__diagram-info">
                        <div class="vaccination__diagram-value"></div>
                        <div class="vaccination__diagram-descr"> <span></span> <br> всего</div>
                    </div>
                    <div class="vaccination__diagram-wrap">
                        <img class="block-bg" src="./assets/img/main/grid-vaccination.svg" alt="grid">
                    </div>
                </div>

                <div class="vaccination__legend">
                    <div class="vaccination__legend-item">
                        <svg class="vaccination__legend-icon" width="15" height="15" viewBox="0 0 15 15"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.07104" y="2.12132" width="7" height="7"
                                transform="rotate(45 7.07104 2.12132)" fill="white" stroke="#217AFF"
                                stroke-width="3" />
                        </svg>
                        <div class="vaccination__legend-descr">Привившиеся</div>
                    </div>

                    <div class="vaccination__legend-item">
                        <svg class="vaccination__legend-icon" width="15" height="15" viewBox="0 0 15 15"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.07104" y="2.12132" width="7" height="7"
                                transform="rotate(45 7.07104 2.12132)" fill="white" stroke="#6C38FF"
                                stroke-width="3" />
                        </svg>
                        <div class="vaccination__legend-descr">Непривившиеся</div>
                    </div>

                    <div class="vaccination__legend-item">
                        <svg class="vaccination__legend-icon" width="15" height="15" viewBox="0 0 15 15"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.07104" y="2.12132" width="7" height="7"
                                transform="rotate(45 7.07104 2.12132)" fill="white" stroke="#A7EB17"
                                stroke-width="3" />
                        </svg>
                        <div class="vaccination__legend-descr">Непривившиеся, болели за 6 месяцев</div>
                    </div>

                    <div class="vaccination__legend-item">
                        <svg class="vaccination__legend-icon" width="15" height="15" viewBox="0 0 15 15"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.07104" y="2.12132" width="7" height="7"
                                transform="rotate(45 7.07104 2.12132)" fill="white" stroke="#FD6A6A"
                                stroke-width="3" />
                        </svg>
                        <div class="vaccination__legend-descr">Непривившиеся, болеют в данный момент</div>
                    </div>

                    <div class="vaccination__legend-item">
                        <svg class="vaccination__legend-icon" width="15" height="15" viewBox="0 0 15 15"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.07104" y="2.12132" width="7" height="7"
                                transform="rotate(45 7.07104 2.12132)" fill="white" stroke="#FB9B2B"
                                stroke-width="3" />
                        </svg>
                        <div class="vaccination__legend-descr">Непривившиеся, имеют мед. отвод</div>
                    </div>
                </div>

                <div class="calendar calendar_vaccination">
                    <div class="calendar__month">
                        <div class="calendar__month-value calendar__month-progress-bar__vaccination-value">
                        </div>
                        <div class="calendar__month-progress-bar">
                            <svg class="calendar__month-progress-bar__vaccination" width="100%"
                                height="100%" viewBox="0 0 100 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 0H0.5L11.5 12H15.5L4.5 0Z" fill="#FB9B2B" />
                                <path d="M10.5 0H6.5L17.5 12H21.5L10.5 0Z" fill="#FB9B2B" />
                                <path d="M16.5 0H12.5L23.5 12H27.5L16.5 0Z" fill="#FB9B2B" />
                                <path d="M22.5 0H18.5L29.5 12H33.5L22.5 0Z" fill="#FB9B2B" />
                                <path d="M28.5 0H24.5L35.5 12H39.5L28.5 0Z" fill="#FB9B2B" />
                                <path d="M34.5 0H30.5L41.5 12H45.5L34.5 0Z" fill="#FB9B2B" />
                                <path d="M40.5 0H36.5L47.5 12H51.5L40.5 0Z" fill="#FB9B2B" />
                                <path d="M46.5 0H42.5L53.5 12H57.5L46.5 0Z" fill="#FB9B2B" />
                                <path d="M52.5 0H48.5L59.5 12H63.5L52.5 0Z" fill="#FB9B2B" />
                                <path d="M58.5 0H54.5L65.5 12H69.5L58.5 0Z" fill="#FB9B2B" />
                                <path d="M64.5 0H60.5L71.5 12H75.5L64.5 0Z" fill="#FB9B2B" />
                                <path d="M70.5 0H66.5L77.5 12H81.5L70.5 0Z" fill="#FB9B2B" />
                                <path d="M76.5 0H72.5L83.5 12H87.5L76.5 0Z" fill="#FB9B2B" />
                                <path d="M82.5 0H78.5L89.5 12H93.5L82.5 0Z" fill="#FB9B2B" />
                                <path d="M88.5 0H84.5L95.5 12H99.5L88.5 0Z" fill="#FB9B2B" />
                            </svg>
                        </div>
                    </div>
                    <div class="calendar__year">
                        <div class="calendar__year-value calendar__year-progress-bar__vaccination-value">
                        </div>
                        <div class="calendar__year-progress-bar">
                            <svg class="calendar__year-progress-bar__vaccination" width="100%" height="100%"
                                viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 0H15.5L4.5 12H0.5L11.5 0Z" fill="#FB9B2B" />
                                <path d="M17.5 0H21.5L10.5 12H6.5L17.5 0Z" fill="#FB9B2B" />
                                <path d="M23.5 0H27.5L16.5 12H12.5L23.5 0Z" fill="#FB9B2B" />
                                <path d="M29.5 0H33.5L22.5 12H18.5L29.5 0Z" fill="#FB9B2B" />
                                <path d="M35.5 0H39.5L28.5 12H24.5L35.5 0Z" fill="#FB9B2B" />
                                <path d="M41.5 0H45.5L34.5 12H30.5L41.5 0Z" fill="#FB9B2B" />
                                <path d="M47.5 0H51.5L40.5 12H36.5L47.5 0Z" fill="#FB9B2B" />
                                <path d="M53.5 0H57.5L46.5 12H42.5L53.5 0Z" fill="#FB9B2B" />
                                <path d="M59.5 0H63.5L52.5 12H48.5L59.5 0Z" fill="#FB9B2B" />
                                <path d="M65.5 0H69.5L58.5 12H54.5L65.5 0Z" fill="#FB9B2B" />
                                <path d="M71.5 0H75.5L64.5 12H60.5L71.5 0Z" fill="#FB9B2B" />
                                <path d="M77.5 0H81.5L70.5 12H66.5L77.5 0Z" fill="#FB9B2B" />
                                <path d="M83.5 0H87.5L76.5 12H72.5L83.5 0Z" fill="#FB9B2B" />
                                <path d="M89.5 0H93.5L82.5 12H78.5L89.5 0Z" fill="#FB9B2B" />
                                <path d="M95.5 0H99.5L88.5 12H84.5L95.5 0Z" fill="#FB9B2B" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
   
}

customElements.define('vaccination-block', VaccinationBlock)