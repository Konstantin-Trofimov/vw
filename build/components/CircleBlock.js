


class CircleBlock extends HTMLElement {
    constructor() {
        super()
        this.render()
        
    }

    render() {
        this.innerHTML = `
         <div class="circle-block"> 

        <div class="circle-block__first">
            <svg class="circle-first__icon" width="12.82vw" height="7.813vw"
                viewBox="0 0 222 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_2008:703" fill="white">
                    <path
                        d="M221.478 18.002C149.603 -6.06025 71.8385 -5.99896 0.00233459 18.1765L39.9481 136.873C85.9319 121.398 135.711 121.359 181.719 136.761L221.478 18.002Z" />
                </mask>
                <path
                    d="M221.478 18.002C149.603 -6.06025 71.8385 -5.99896 0.00233459 18.1765L39.9481 136.873C85.9319 121.398 135.711 121.359 181.719 136.761L221.478 18.002Z"
                    fill="#112054" />
                <path
                    d="M221.478 18.002C149.603 -6.06025 71.8385 -5.99896 0.00233459 18.1765L39.9481 136.873C85.9319 121.398 135.711 121.359 181.719 136.761L221.478 18.002Z"
                    fill="url(#paint0_linear_2008:703)" />
                <path
                    d="M221.478 18.002C149.603 -6.06025 71.8385 -5.99896 0.00233459 18.1765L39.9481 136.873C85.9319 121.398 135.711 121.359 181.719 136.761L221.478 18.002Z"
                    stroke="#217AFF" stroke-width="2" mask="url(#path-1-inside-1_2008:703)" />
                <defs>
                    <linearGradient id="paint0_linear_2008:703" x1="-16.9742" y1="-39.2903"
                        x2="111" y2="696" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#217AFF" stop-opacity="0.23" />
                        <stop offset="0.182292" stop-color="#217AFF" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        
            <div id="all_branches" class="circle-block__first-clicked-aria"></div>
        
            <span class="circle-block__link">Все филиалы</span>
        </div>
        
        <div class="circle-block__second ">
            <svg class="circle-second__icon scale-element" width="15.625vw" height="7.813vw"
                viewBox="0 0 275 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_2008:659" fill="white">
                    <path
                        d="M274.891 337.737C276.727 264.397 255.405 192.342 213.954 131.811C172.503 71.2804 113.031 25.3511 43.9871 0.549023L0.860931 120.603C44.6682 136.34 82.4023 165.481 108.702 203.887C135.002 242.293 148.531 288.01 147.366 334.544L274.891 337.737Z" />
                </mask>
                <path
                    d="M274.891 337.737C276.727 264.397 255.405 192.342 213.954 131.811C172.503 71.2804 113.031 25.3511 43.9871 0.549023L0.860931 120.603C44.6682 136.34 82.4023 165.481 108.702 203.887C135.002 242.293 148.531 288.01 147.366 334.544L274.891 337.737Z"
                    fill="#112054" stroke="#4198FF" stroke-opacity="0.2" stroke-width="2"
                    mask="url(#path-1-inside-1_2008:659)" />
            </svg>
        
        
            <div class="cirlce-block__contains">
                <div class="cirlce-block__wrap">
                    <svg class="circle-block__icon" width="1.042vw" height="1.042vw">
                        <use href="../assets/img/sprite.svg#star-icon"></use>
                    </svg>
                    <span class="circle-block__value circle-block__value_rate"></span>
                </div>
                <p class="circle-block__text">
                    Рейтинг Вуза по <br />
                    QS WUR
                </p>
            </div>
        </div>
        
        <div class="circle-block__third">
            <!-- <svg class="circle-third__icon">
        <use href="@/assets/img/sprite.svg#third-icon"></use>
        </svg> -->
        
            <svg class="circle-third__icon" viewBox="0 0 296 339" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_2008:692" fill="white">
                    <path
                        d="M295.693 6.01061C292.664 80.0062 267.319 151.354 222.99 210.679C178.66 270.004 117.42 314.53 47.3168 338.405L0.342694 200.478C42.6137 186.082 79.5404 159.234 106.27 123.462C133 87.6905 148.282 44.669 150.109 0.0511056L295.693 6.01061Z" />
                </mask>
                <path class="staff-bg"
                    d="M295.693 6.01061C292.664 80.0062 267.319 151.354 222.99 210.679C178.66 270.004 117.42 314.53 47.3168 338.405L0.342694 200.478C42.6137 186.082 79.5404 159.234 106.27 123.462C133 87.6905 148.282 44.669 150.109 0.0511056L295.693 6.01061Z"
                    fill="#112054" stroke="#217AFF" stroke-width="2"
                    mask="url(#path-1-inside-1_2008:692)" />
            </svg>
        
            <div id="staff" class="circle-block__third-clicked-aria"></div>
        
            <div class="circle-block__wrapper">
                <div class="cirlce-block__contains ">
                    <div class="cirlce-block__wrap">
                        <span class="circle-block__value circle-block__value_teachers"></span>
                        <!-- <svg class="circle-block__icon" width="0.781vw" height="0.781vw">
            <use href="../assets/img/sprite.svg#icon1"></use>
          </svg> -->
                    </div>
                    <p class="circle-block__text">Преподавателей</p>
                </div>
        
                <div class="cirlce-block__contains">
                    <p class="circle-block__text">Кадры в <br>г. Москве</p>
                </div>
        
                <div class="cirlce-block__contains">
                    <div class="cirlce-block__wrap">
                        <span class="circle-block__value circle-block__value_scientists"></span>
                        <!-- <svg class="circle-block__icon down" width="0.781vw" height="0.781vw">
                <use href="../assets/img/sprite.svg#icon1"></use>
            </svg> -->
                        <!-- <svg class="circle-block__icon" width="0.781vw" height="0.781vw">
           <use href="../assets/img/sprite.svg#icon2"></use>
         </svg> -->
                    </div>
                    <p class="circle-block__text">
                        научных <br />
                        работников
                    </p>
                </div>
            </div>
        </div>
        
        <div class="circle-block__fourth">
            <svg class="circle-fourth__icon" viewBox="0 0 217 139" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_2008:700" fill="white">
                    <path
                        d="M0.168753 120.201C70.2192 144.21 146.102 145.248 216.783 123.164L179.186 2.83241C134.11 16.9161 85.7172 16.254 41.0437 0.942454L0.168753 120.201Z" />
                </mask>
                <path
                    d="M0.168753 120.201C70.2192 144.21 146.102 145.248 216.783 123.164L179.186 2.83241C134.11 16.9161 85.7172 16.254 41.0437 0.942454L0.168753 120.201Z"
                    fill="#112054" stroke="#217AFF" stroke-opacity="0.4" stroke-width="2"
                    mask="url(#path-1-inside-1_2008:700)" />
            </svg>
        
            <div class="cirlce-block__contains">
                <span class="circle-block__value circle-block__value_score"></span>
                <p class="circle-block__text">средний балл</p>
            </div>
        </div>
        
        <div class="circle-block__fifth">
            <svg class="circle-block__fifth circle-fifth_icon" viewBox="0 0 272 320" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <svg y="10">
                    <mask id="path-1-inside-1_2008:693" fill="white">
                        <path
                            d="M226.753 319.889C162.143 295.727 106.142 252.96 65.8229 196.99C25.5041 141.019 2.67579 74.3562 0.221052 5.41956L127.705 0.880016C129.263 44.6192 143.747 86.9159 169.329 122.428C194.91 157.94 230.442 185.075 271.436 200.406L226.753 319.889Z" />
                    </mask>
                    <path class="plan-bg"
                        d="M226.753 319.889C162.143 295.727 106.142 252.96 65.8229 196.99C25.5041 141.019 2.67579 74.3562 0.221052 5.41956L127.705 0.880016C129.263 44.6192 143.747 86.9159 169.329 122.428C194.91 157.94 230.442 185.075 271.436 200.406L226.753 319.889Z"
                        fill="#112054" stroke="#217AFF" stroke-opacity="0.9" stroke-width="6"
                        mask="url(#path-1-inside-1_2008:693)" />
                </svg>
        
            </svg>
        
        
            <div id="plan" class="circle-block__fifth-clicked-aria"></div>
        
        
            <div class="cirlce-block__wrapper">
                <div class="cirlce-block__contains ">
                    <span class="circle-block__value circle-block__value_publications"></span>
                    <p class="circle-block__text">
                        кол-во <br />
                        публикаций
                    </p>
                </div>
        
                <div class="cirlce-block__contains">
                    <span class="circle-block__value circle-block__value_progress"></span>
                    <p class="circle-block__text">
                        Выполнение <br />
                        плана, %
                    </p>
                </div>
        
                <div class="cirlce-block__contains">
                    <span
                        class="circle-block__value circle-block__value_contracts small"></span>
                    <p class="circle-block__text">
                        заключенные <br />
                        договора
                    </p>
                </div>
            </div>
        </div>
        
        <div id="finance" class="circle-block__sixth">
            <svg class="circle-sixth__icon" viewBox="0 0 295 350" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_2008:701" fill="white">
                    <path
                        d="M0 350C6.63807e-06 274.069 23.1735 199.947 66.4239 137.538C109.674 75.1291 170.941 27.4062 242.038 0.746616L294.492 140.631C251.871 156.613 215.143 185.222 189.215 222.634C163.288 260.047 149.396 304.481 149.396 350H0Z" />
                </mask>
                <path
                    d="M0 350C6.63807e-06 274.069 23.1735 199.947 66.4239 137.538C109.674 75.1291 170.941 27.4062 242.038 0.746616L294.492 140.631C251.871 156.613 215.143 185.222 189.215 222.634C163.288 260.047 149.396 304.481 149.396 350H0Z"
                    fill="#112054" stroke="#217AFF" stroke-opacity="0.4" stroke-width="2"
                    mask="url(#path-1-inside-1_2008:701)" />
            </svg>
        
        
            <div class="cirlce-block__wrapper">
                <div class="cirlce-block__contains">
                    <div class="cirlce-block__wrap">
                        <span
                            class="circle-block__value circle-block__value_budget"><span></span></span>
        
                        <!-- <svg class="circle-block__icon circle-block__icon__top" width="0.781vw" height="0.781vw">
            <use href="../assets/img/sprite.svg#icon1"></use>
          </svg> -->
        
                        <!-- <svg class="circle-block__icon circle-block__icon__down" width="0.781vw" height="0.781vw">
           <use href="../assets/img/sprite.svg#icon2"></use>
         </svg> -->
                    </div>
                    <p class="circle-block__text">Денежные <br />Средства, млрд.</p>
                </div>
        
                <div class="cirlce-block__contains">
                    <div class="cirlce-block__wrap">
                        <span
                            class="circle-block__value circle-block__value_cash"><span></span></span>
        
                        <!-- <svg class="circle-block__icon circle-block__icon__top" width="0.781vw" height="0.781vw">
            <use href="../assets/img/sprite.svg#icon1"></use>
          </svg> -->
        
                        <!-- <svg class="circle-block__icon circle-block__icon__down" width="0.781vw" height="0.781vw">
           <use href="../assets/img/sprite.svg#icon2"></use>
         </svg> -->
                    </div>
                    <p class="circle-block__text">Касса, млн.</p>
                </div>
            </div>
        </div>
        
        <div class="circle-block__middle">
            <span class="circle-block__value circle-block__value_students"></span>
            <p>ОБучающихся</p>
        </div>
        <div class="circle__parts">
            <div class="circle__part-top">
                <div class="circle__part-text">
                    <span class="span_84 performance-diagram-absolute-value"></span>
                    <span class='span_text'>Абсолютная <br /> успеваемость</span>
                </div>
            </div>
            <div class="circle__part-bottom">
                <div class="circle__part-text">
                    <span class="performance-diagram-quality-value"></span>
                    <span>Качественная <br> успеваемость</span>
                </div>
            </div>
        </div>
        </div>
        `
    }
   
}

customElements.define('circle-block', CircleBlock)