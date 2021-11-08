class ScienceBlock extends HTMLElement {
    constructor() {
        super()
        this.render()

    }

    render() {
        this.innerHTML = `
        <div id="science" class="science block">
            <svg class="block-bg" viewBox="0 0 417 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 34.5V356V357L18.5 373.5H113.5L122 365H143L149 371.5H186.5L198 359.5H288L299.5 371.5H399.5L414 356L415 30L396 11.5H276L266.5 2H224.5L215 11.5H25L2 34.5Z"
                    fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.9"
                    stroke-width="3" />
                <path d="M232.81 7H261L257.19 11H229L232.81 7Z" fill="#0E2D7B" />
                <path d="M165.881 354H183.5L181.119 356H163.5L165.881 354Z" fill="#0E2D7B" />
                <path d="M169.881 350H187.5L185.119 352H167.5L169.881 350Z" fill="#0E2D7B" />
                <path d="M232.864 7H246L242.136 11H229L232.864 7Z" fill="#217AFF" />
                <path d="M166 354H174.5L172 356H163.5L166 354Z" fill="#217AFF" />
                <path d="M170 350H182.5L180 352H167.5L170 350Z" fill="#217AFF" />
            </svg>
            <div class="block-wrap">
                <div class="science__info">
                    <div>
                        <div class="science__title block-title">Научная деятельность</div>
                        <div class="science__plan">
                            <div class="science__plan-header">Выполнение плана</div>
                            <div class="science__plan-ratio"></div>
                            <svg class="science__plan-progressbar" viewBox="0 0 163 23" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="science__plan-progressbar-item"
                                    d="M6.69088 0.0908813H-2.86102e-05L18.4 23H25.0909L6.69088 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M16.5091 0.0908813H9.81821L28.2182 23H34.9091L16.5091 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M26.3273 0.0908813H19.6364L38.0364 23H44.7273L26.3273 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M36.1455 0.0908813H29.4546L47.8546 23H54.5455L36.1455 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M45.9636 0.0908813H39.2727L57.6727 23H64.3636L45.9636 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M55.7818 0.0908813H49.0909L67.4909 23H74.1818L55.7818 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M65.6 0.0908813H58.9091L77.3091 23H84L65.6 0.0908813Z" fill="#A7EB17"
                                    fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M75.4182 0.0908813H68.7273L87.1273 23H93.8182L75.4182 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M85.2364 0.0908813H78.5454L96.9454 23H103.636L85.2364 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M95.0545 0.0908813H88.3636L106.764 23H113.455L95.0545 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M104.873 0.0908813H98.1818L116.582 23H123.273L104.873 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M114.691 0.0908813H108L126.4 23H133.091L114.691 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M124.509 0.0908813H117.818L136.218 23H142.909L124.509 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M134.327 0.0908813H127.636L146.036 23H152.727L134.327 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                                <path class="science__plan-progressbar-item"
                                    d="M144.145 0.0908813H137.455L155.855 23H162.545L144.145 0.0908813Z"
                                    fill="#A7EB17" fill-opacity="0.2" />
                            </svg>
                            <div class="science__plan-sum">
                                <div class="science__plan-value"></div>
                                <span>тыс.</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="science__legend">
                            <div class="science__legend-item science__legend-item_fact">
                                <div class="science__legend-descr">Поступления от НИР за текущий год</div>
                                <div class="science__legend-sum">
                                    <div
                                        class="science__legend-value science__legend-value_current-receipts">
                                    </div>
                                    <span>тыс.</span>
                                </div>
                            </div>
                            <div class="science__legend-item science__legend-item_planned">
                                <div class="science__legend-descr">Ожидаемые поступления от НИР в текущем
                                    году</div>
                                <div class="science__legend-sum">
                                    <div
                                        class="science__legend-value science__legend-value_expected-receipts">
                                    </div>
                                    <span>тыс.</span>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
                <svg class="science__divider" viewBox="0 0 347 2" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.7" d="M0 1H347" stroke="#217AFF" stroke-dasharray="1 3" />
                </svg>
            
                <div class="science__data">
                    <div class="science__list">
                        <div class="science__list-item science__list-item_active">
                            <svg class="science__list-item-bg" viewBox="0 0 142 33" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.5 22.64V22.8453L0.644258 22.9914L9.8887 32.3514L10.0355 32.5H10.2444H141H141.5V32V8.2V7.99471L141.356 7.84865L134.245 0.648649L134.098 0.5H133.889H1H0.5V1V22.64Z"
                                    stroke="#217AFF" />
                            </svg>
                            <div class="science__list-item-wrap">
                                <svg class="science__list-item-icon" viewBox="0 0 10 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 10.3971L8 6.5L1.25 2.60289L1.25 10.3971Z"
                                        stroke="#217AFF" stroke-width="2" />
                                </svg>
                                <span class="science__list-item-text">Публикации WoS</span>
                            </div>
                        </div>
            
                        <div class="science__list-item">
                            <svg class="science__list-item-bg" viewBox="0 0 142 33" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.5 22.64V22.8453L0.644258 22.9914L9.8887 32.3514L10.0355 32.5H10.2444H141H141.5V32V8.2V7.99471L141.356 7.84865L134.245 0.648649L134.098 0.5H133.889H1H0.5V1V22.64Z"
                                    stroke="#217AFF" />
                            </svg>
                            <div class="science__list-item-wrap">
                                <svg class="science__list-item-icon" viewBox="0 0 10 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 10.3971L8 6.5L1.25 2.60289L1.25 10.3971Z"
                                        stroke="#217AFF" stroke-width="2" />
                                </svg>
                                <span class="science__list-item-text">Публикации Scopus</span>
                            </div>
                        </div>
            
                        <div class="science__list-item">
                            <svg class="science__list-item-bg" viewBox="0 0 142 33" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.5 22.64V22.8453L0.644258 22.9914L9.8887 32.3514L10.0355 32.5H10.2444H141H141.5V32V8.2V7.99471L141.356 7.84865L134.245 0.648649L134.098 0.5H133.889H1H0.5V1V22.64Z"
                                    stroke="#217AFF" />
                            </svg>
                            <div class="science__list-item-wrap">
                                <svg class="science__list-item-icon" viewBox="0 0 10 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 10.3971L8 6.5L1.25 2.60289L1.25 10.3971Z"
                                        stroke="#217AFF" stroke-width="2" />
                                </svg>
                                <span class="science__list-item-text">Публикации Q1</span>
                            </div>
                        </div>
            
                        <div class="science__list-item">
                            <svg class="science__list-item-bg" viewBox="0 0 142 33" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.5 22.64V22.8453L0.644258 22.9914L9.8887 32.3514L10.0355 32.5H10.2444H141H141.5V32V8.2V7.99471L141.356 7.84865L134.245 0.648649L134.098 0.5H133.889H1H0.5V1V22.64Z"
                                    stroke="#217AFF" />
                            </svg>
                            <div class="science__list-item-wrap">
                                <svg class="science__list-item-icon" viewBox="0 0 10 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 10.3971L8 6.5L1.25 2.60289L1.25 10.3971Z"
                                        stroke="#217AFF" stroke-width="2" />
                                </svg>
                                <span class="science__list-item-text">Публикации Q2</span>
                            </div>
                        </div>
                    </div>
                    <div class="science__data-container">
                        <div class="science__diagram">
                            <svg width="100%" height="100%" viewBox="0 0 208 73" fill="none"
                                xmlns="http://www.w3.org/2000/svg" overflow="visible">
                                <rect x="4" y="67.9999" width="100%" height="1" fill="#B2CEF6" />
                                <rect x="3.56934" y="69" width="64" height="1"
                                    transform="rotate(-90.1599 3.56934 69.0019)" fill="#B2CEF6" />
            
                                <svg class="wos" higth="100%" width="11%" y="-5" overflow="visible">
                                    <rect x="18" y="30%" width="100%" height="70%" fill="#217AFF" />
                                </svg>
            
                                <svg class="wos" higth="100%" width="11%" y="-5" overflow="visible">
                                    <rect x="50" y="30%" width="100%" height="70%" fill="#217AFF" />
                                </svg>
            
                                <svg class="wos" higth="100%" width="11%" y="-5" overflow="visible">
                                    <rect x="80" y="30%" width="100%" height="70%" fill="#217AFF" />
                                </svg>
            
                                <svg class="wos" higth="100%" width="11%" y="-5" overflow="visible">
                                    <rect x="113" y="30%" width="100%" height="70%" fill="#217AFF" />
                                </svg>
            
                                <svg class="wos" higth="100%" width="11%" y="-5" overflow="visible">
                                    <rect x="145" y="30%" width="100%" height="70%" fill="#217AFF" />
                                </svg>
            
                                <svg class="wos" higth="100%" width="11%" y="-5" overflow="visible">
                                    <rect x="176" y="30%" width="100%" height="70%" fill="#217AFF" />
                                </svg>
            
                                <rect x="25.7071" y="68.5356" width="4" height="4"
                                    transform="rotate(-45 25.7071 68.5356)" fill="white" stroke="#B2CEF6" />
                                <rect x="0.707107" y="3.53554" width="4" height="4"
                                    transform="rotate(-45 0.707107 3.53554)" fill="white"
                                    stroke="#B2CEF6" />
                                <rect x="57.7071" y="68.5356" width="4" height="4"
                                    transform="rotate(-45 57.7071 68.5356)" fill="white" stroke="#B2CEF6" />
                                <rect x="87.7071" y="68.5356" width="4" height="4"
                                    transform="rotate(-45 87.7071 68.5356)" fill="white" stroke="#B2CEF6" />
                                <rect x="120.707" y="68.5356" width="4" height="4"
                                    transform="rotate(-45 120.707 68.5356)" fill="white" stroke="#B2CEF6" />
                                <rect x="152.707" y="68.5356" width="4" height="4"
                                    transform="rotate(-45 152.707 68.5356)" fill="white" stroke="#B2CEF6" />
                                <rect x="184.707" y="68.5356" width="4" height="4"
                                    transform="rotate(-45 184.707 68.5356)" fill="white" stroke="#B2CEF6" />
                            </svg>
            
                            <div class="science__diagram-value"></div>
            
                            <div class="science__diagram-month">
                                <svg class="science__diagram-month-bg" viewBox="0 0 80 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_2008:6125)">
                                        <path
                                            d="M3.49705 3.51352L1.99769 5.01416L2.00238 16.0142L3.00281 17.0137L5.00366 19.0129L66.0037 18.9869L67.503 17.4862L69.0024 15.9856L68.9977 4.9856L67.497 3.48624L65.9964 1.98688L4.99641 2.01288L3.49705 3.51352Z"
                                            fill="#112054" />
                                        <path
                                            d="M1.49769 5.01437L1.49761 4.80727L1.64399 4.66076L3.14335 3.16012L4.64271 1.65948L4.78909 1.51297L4.9962 1.51288L65.9962 1.48688L66.2033 1.48679L66.3498 1.63317L67.8504 3.13253L69.3511 4.63189L69.4976 4.77828L69.4977 4.98538L69.5024 15.9854L69.5025 16.1925L69.3561 16.339L67.8567 17.8396L66.3574 19.3403L66.211 19.4868L66.0039 19.4869L5.00387 19.5129L4.79677 19.513L4.65026 19.3666L2.64941 17.3674L1.64898 16.3679L1.50247 16.2215L1.50238 16.0144L1.49769 5.01437Z"
                                            stroke="#217AFF" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_2008:6125" x="0.996094" y="0.985168"
                                            width="78.0081" height="29.0294" filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha" />
                                            <feOffset dx="5" dy="6" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feColorMatrix type="matrix"
                                                values="0 0 0 0 0.0897222 0 0 0 0 0.241933 0 0 0 0 0.633333 0 0 0 0.12 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                result="effect1_dropShadow_2008:6125" />
                                            <feBlend mode="normal" in="SourceGraphic"
                                                in2="effect1_dropShadow_2008:6125" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <div class="science__diagram-month-text">октябрьчё</div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="calendar calendar_science">
                    <div class="calendar__month">
                        <div class="calendar__month-value calendar__month-progress-bar__science-value"></div>
                        <div class="calendar__month-progress-bar">
                            <svg class="calendar__month-progress-bar__science" width="100%" height="100%"
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
                        <div class="calendar__year-value calendar__year-progress-bar__science-value"></div>
                        <div class="calendar__year-progress-bar">
                            <svg class="calendar__year-progress-bar__science" width="100%" height="100%"
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
        `
    }

}

customElements.define('science-block', ScienceBlock)