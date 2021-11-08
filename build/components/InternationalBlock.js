


class InternationalBlock extends HTMLElement {
    constructor() {
        super()
        this.render()

    }



    render() {
        this.innerHTML = `
        <div class="international block">
            <svg class="block-bg" viewBox="0 0 417 290" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M415 34.5V271V272L398.5 288.5H303.5L295 280H274L268 286.5H230.5L219 274.5H129L117.5 286.5H17.5L3 271L2 30L21 11.5H51L60.5 2H102.5L112 11.5H392L415 34.5Z"
                    fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.9"
                    stroke-width="3" />
                <path d="M100.69 5H72.5L76.3095 9H104.5L100.69 5Z" fill="#217AFF" fill-opacity="0.2" />
                <path d="M247.119 279H229.5L231.881 281H249.5L247.119 279Z" fill="#217AFF"
                    fill-opacity="0.2" />
                <path d="M243.119 275H225.5L227.881 277H245.5L243.119 275Z" fill="#217AFF"
                    fill-opacity="0.2" />
                <path d="M100.636 5H87.5L91.3636 9H104.5L100.636 5Z" fill="#217AFF" />
                <path d="M247 279H238.5L241 281H249.5L247 279Z" fill="#217AFF" />
                <path d="M243 275H230.5L233 277H245.5L243 275Z" fill="#217AFF" />
            </svg>

            <div class="block-wrap">
                <div class="international__title block-title">Международная деятельность</div>
                <div class="international__body">
                    <div class="international__globus">
                        <div id="myearth" class="earth-container"></div> 
                     
                    </div>
                    <div class="international__info">
                        <div class="international__item">
                            <div class="international__item-wrap">
                                <svg class="international__divider" viewBox="0 0 78 1" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M0 0.5H78" stroke="#21CAFF"
                                        stroke-dasharray="1 3" />
                                </svg>

                                <svg class="international__icon international__icon_rect"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="7.77832" y="1.07109" width="9.48525" height="9.48525"
                                        transform="rotate(45 7.77832 1.07109)" stroke="#217AFF" />
                                    <rect opacity="0.5" x="7.77832" y="5.33453" width="3.45581"
                                        height="3.45581" transform="rotate(45 7.77832 5.33453)"
                                        fill="#217AFF" />
                                </svg>

                                <div class="international__value international__value_foreign-students">
                                </div>
                            </div>

                            <div class="international__descr">иностранных студентов</div>
                        </div>

                        <div class="international__item">
                            <div class="international__item-wrap">
                                <svg class="international__divider international__divider"
                                    viewBox="0 0 78 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M0 0.5H78" stroke="#21CAFF"
                                        stroke-dasharray="1 3" />
                                </svg>

                                <svg class="international__icon international__icon_triangle"
                                    viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.80254 7.50053L1.2236 7.90906L1.80254 8.31759L9.16618 13.5137L9.95446 14.07L9.95446 13.1052L9.95446 2.71291L9.95446 1.74813L9.16618 2.30438L1.80254 7.50053Z"
                                        stroke="#217AFF" />
                                    <path opacity="0.5"
                                        d="M5.09082 7.90906L8.09082 6.17701L8.09082 9.64111L5.09082 7.90906Z"
                                        fill="#217AFF" />
                                </svg>

                                <div class="international__value international__value_nonresident-students">
                                </div>
                            </div>

                            <div class="international__descr">иногородних студентов</div>
                        </div>

                        <div class="international__item">
                            <div class="international__item-wrap">
                                <svg class="international__divider" viewBox="0 0 78 1" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M0 0.5H78" stroke="#21CAFF"
                                        stroke-dasharray="1 3" />
                                </svg>

                                <svg class="international__icon international__icon_round"
                                    viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5.5" cy="5.5" r="5" stroke="#217AFF" />
                                    <circle opacity="0.5" cx="5.5" cy="5.5" r="2.5" fill="#217AFF" />
                                </svg>

                                <div class="international__value international__value_partners"></div>
                            </div>

                            <div class="international__descr">Партнеров</div>

                        </div>
                    </div>
                </div>

                <div class="calendar calendar_international">
                    <div class="calendar__month">
                        <div
                            class="calendar__month-value calendar__month-progress-bar__international-value">
                        </div>
                        <div class="calendar__month-progress-bar">
                            <svg class="calendar__month-progress-bar__international" width="100%"
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
                        <div class="calendar__year-value calendar__year-progress-bar__international-value">
                        </div>
                        <div class="calendar__year-progress-bar">
                            <svg class="calendar__year-progress-bar__international" width="100%"
                                height="100%" viewBox="0 0 100 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
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


customElements.define('international-block', InternationalBlock)