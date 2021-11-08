class FinanceBlock extends HTMLElement {
    constructor() {
        super()
        this.render()
        
    }

    render() {
        this.innerHTML = `
        <div id="finance" class="finance block">
            <svg class="block-bg" viewBox="0 0 437 429" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.5 34.5V410V411L18 427.5H113L121.5 419H142.5L148.5 425.5H186L197.5 413.5H307.5L319 424.5H419L433.5 410L434.5 30L415.5 11.5H385.5L376 2H334L324.5 11.5H24.5L1.5 34.5Z"
                    fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.9"
                    stroke-width="3" />
                <path d="M339.81 5H368L364.19 9H336L339.81 5Z" fill="#223E9E" />
                <path d="M169.381 418H187L184.619 420H167L169.381 418Z" fill="#0E2D7B" />
                <path d="M173.381 414H191L188.619 416H171L173.381 414Z" fill="#0E2D7B" />
                <path d="M339.864 5H353L349.136 9H336L339.864 5Z" fill="#217AFF" />
                <path d="M169.5 418H178L175.5 420H167L169.5 418Z" fill="#217AFF" />
                <path d="M173.5 414H186L183.5 416H171L173.5 414Z" fill="#217AFF" />
            </svg>

            <div class="block-wrap block-wrap">
                <div class="finance__header">
                    <div class="finance__title block-title">Финансы</div>
                    <div class="finance__total">
                        <div class="finance__total-wrap">
                            <div class="finance__total-value"></div>
                            <span>руб.</span>
                        </div>
                        <div class="finance__total-descr">Основные средства на балансе</div>
                    </div>
                </div>

                <div class="finance__body">
                    <img class="block-bg" src="./assets/img/main/grid-finance.svg" alt="grid">
                    <div class="finance__body-item finance__body-item_wage-fund">
                        <div class="finance__diagram">
                            <svg class="finance__diagram-data" viewBox="0 0 126 125" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="62.8975" cy="62.5" r="34" stroke="#217AFF" />
                                <path
                                    d="M107.092 106.694C115.832 97.9534 121.785 86.817 124.197 74.6931C126.608 62.5693 125.37 50.0027 120.64 38.5823C115.909 27.1619 107.899 17.4007 97.6206 10.5331C87.3425 3.66556 75.2588 -1.47407e-07 62.8975 0L62.8975 19.8203C71.3387 19.8203 79.5904 22.3234 86.609 27.0131C93.6277 31.7028 99.098 38.3685 102.328 46.1672C105.559 53.9659 106.404 62.5473 104.757 70.8264C103.11 79.1054 99.0454 86.7102 93.0766 92.6791L107.092 106.694Z"
                                    fill="#2BD6FB" />
                                <path
                                    d="M62.8975 5C53.4415 5 44.1315 7.33203 35.7922 11.7895C27.4528 16.247 20.3414 22.6924 15.088 30.5547C9.83453 38.417 6.60118 47.4536 5.67434 56.864C4.7475 66.2744 6.15576 75.7682 9.77438 84.5043C13.393 93.2404 19.1103 100.949 26.4198 106.948C33.7294 112.947 42.4055 117.05 51.6798 118.895C60.954 120.74 70.5401 120.269 79.5888 117.524C88.6376 114.779 96.8697 109.845 103.556 103.159L91.3347 90.9372C86.6581 95.6137 80.9004 99.0648 74.5716 100.985C68.2428 102.904 61.5382 103.234 55.0516 101.944C48.5651 100.653 42.4969 97.7832 37.3845 93.5876C32.2721 89.392 28.2734 84.0003 25.7425 77.8901C23.2116 71.7799 22.2266 65.1399 22.8748 58.5581C23.5231 51.9764 25.7845 45.656 29.4589 40.157C33.1332 34.658 38.107 30.15 43.9396 27.0324C49.7723 23.9148 56.2839 22.2837 62.8975 22.2837V5Z"
                                    fill="#217AFF" />
                                <rect x="104.571" y="23.571" width="7" height="7"
                                    transform="rotate(-90 104.571 23.571)" fill="white" stroke="#2BD6FB"
                                    stroke-width="3" />
                                <path
                                    d="M18.787 105.785L18.9387 98.787L25.937 98.9387L25.7854 105.937L18.787 105.785Z"
                                    fill="white" stroke="#2E81FE" stroke-width="3" />
                            </svg>

                            <div class="finance__diagram-value finance__diagram-value_budget-resources">
                            </div>
                            <div class="finance__diagram-value finance__diagram-value_other-resources">
                            </div>

                            <div class="finance__diagram-center">
                                <div class="finance__diagram-text">Фонд оплаты труда</div>
                            </div>
                        </div>
                        <div class="finance__legend finance__legend_wage-fund">
                            <div class="finance__legend-item">
                                <svg class="finance__legend-mark" viewBox="0 0 15 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.12132" y="8" width="7" height="7"
                                        transform="rotate(-45 2.12132 8)" stroke="#2BD6FB"
                                        stroke-width="3" />
                                </svg>
                                <div class="finance__legend-descr">Из средств бюджета</div>
                            </div>

                            <div class="finance__legend-item">
                                <svg class="finance__legend-mark" width="15" height="16" viewBox="0 0 15 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.12132" y="8" width="7" height="7"
                                        transform="rotate(-45 2.12132 8)" stroke="#217AFF"
                                        stroke-width="3" />
                                </svg>

                                <div class="finance__legend-descr">Из средств от иной приносящей доход
                                    деятельности</div>
                            </div>
                        </div>
                    </div>
                    <div class="finance__body-item finance__body-item_сosts">
                        <div class="finance__diagram">
                            <svg class="finance__diagram-data" viewBox="0 0 130 131" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="64.8975" cy="65.5" r="34" stroke="#FD6A6A" />
                                <path
                                    d="M109.092 21.3058C97.3706 9.58482 81.4735 3.00002 64.8975 3L64.8975 22.8203C76.2168 22.8203 87.0726 27.3169 95.0766 35.3209L109.092 21.3058Z"
                                    fill="#FFC01D" />
                                <path
                                    d="M112.119 95.9138C119.073 85.118 122.117 72.2656 120.745 59.4979C119.372 46.7303 113.667 34.8182 104.578 25.7464L96.3157 34.0243C103.512 41.207 108.029 50.6386 109.116 60.7477C110.202 70.8568 107.792 81.0329 102.286 89.5807L112.119 95.9138Z"
                                    fill="#FB9B2B" />
                                <path
                                    d="M64.8975 8C54.925 8 45.124 10.5936 36.4568 15.5262C27.7896 20.4588 20.5543 27.5607 15.4614 36.1347C10.3684 44.7086 7.59291 54.4597 7.40741 64.4304C7.22191 74.4012 9.63277 84.2487 14.4033 93.0062C19.1738 101.764 26.1399 109.13 34.6176 114.381C43.0953 119.633 52.7931 122.589 62.7586 122.96C72.7242 123.331 82.6149 121.104 91.4596 116.497C100.304 111.89 107.799 105.062 113.207 96.6839L98.6858 87.3104C94.9032 93.1705 89.6614 97.946 83.4754 101.168C77.2893 104.39 70.3716 105.948 63.4015 105.688C56.4315 105.429 49.6487 103.361 43.7193 99.6882C37.7899 96.0152 32.9177 90.8632 29.5812 84.7382C26.2446 78.6131 24.5584 71.7256 24.6881 64.7519C24.8179 57.7782 26.7591 50.9582 30.3212 44.9615C33.8833 38.9648 38.9437 33.9976 45.0057 30.5477C51.0676 27.0978 57.9226 25.2837 64.8975 25.2837V8Z"
                                    fill="#FD6A6A" />
                                <rect x="87.3743" y="13.6751" width="7" height="7"
                                    transform="rotate(-115.824 87.3743 13.6751)" fill="white"
                                    stroke="#FFC01D" stroke-width="3" />
                                <path
                                    d="M23.4808 26.4784L23.6637 19.4808L30.6613 19.6637L30.4784 26.6613L23.4808 26.4784Z"
                                    fill="white" stroke="#FD6A6A" stroke-width="3" />
                                <rect x="114.27" y="91.6378" width="7" height="7"
                                    transform="rotate(-114.55 114.27 91.6378)" fill="white" stroke="#FB9B2B"
                                    stroke-width="3" />
                            </svg>

                            <div class="finance__diagram-value finance__diagram-value_land-tax"></div>
                            <div class="finance__diagram-value finance__diagram-value_property-tax"></div>
                            <div class="finance__diagram-value finance__diagram-value_wage-fund"></div>

                            <div class="finance__diagram-center">
                                <div class="finance__diagram-text">Затраты</div>
                            </div>
                        </div>
                        <div class="finance__legend finance__legend_сosts">
                            <div class="finance__legend-item">
                                <svg class="finance__legend-mark" viewBox="0 0 15 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.12132" y="8" width="7" height="7"
                                        transform="rotate(-45 2.12132 8)" stroke="#FD6A6A"
                                        stroke-width="3" />
                                </svg>
                                <div class="finance__legend-descr">Фонд оплаты труда</div>
                            </div>

                            <div class="finance__legend-item">
                                <svg class="finance__legend-mark" viewBox="0 0 15 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.12132" y="8" width="7" height="7"
                                        transform="rotate(-45 2.12132 8)" stroke="#FB9B2B"
                                        stroke-width="3" />
                                </svg>

                                <div class="finance__legend-descr">Земельный налог</div>
                            </div>

                            <div class="finance__legend-item">
                                <svg class="finance__legend-mark" viewBox="0 0 15 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.12132" y="8" width="7" height="7"
                                        transform="rotate(-45 2.12132 8)" stroke="#FFC01D"
                                        stroke-width="3" />
                                </svg>
                                <div class="finance__legend-descr">Имущественный налог</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="calendar">
                    <div class="calendar__month">
                        <div class="calendar__month-value calendar__month-progress-bar__finance-value">
                        </div>
                        <div class="calendar__month-progress-bar">
                            <svg class="calendar__month-progress-bar__finance" width="100%" height="100%"
                                viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div class="calendar__year-value calendar__year-progress-bar__finance-value"></div>
                        <div class="calendar__year-progress-bar">
                            <svg class="calendar__year-progress-bar__finance" width="100%" height="100%"
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

customElements.define('finance-block', FinanceBlock)

