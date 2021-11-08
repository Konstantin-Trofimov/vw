

class FooterBlock extends HTMLElement {
    constructor() {
        super()
        this.render()
        
    }

    render() {
        this.innerHTML = `
        <footer class="footer">
            <svg class="footer__img">
                <use href="./assets/img/sprite.svg#footer-bg-icon"></use>
            </svg>

            <a href="/" class="footer__logo">
                <img src="./assets/img/logo.svg" alt="" />
            </a>

            <div class="footer__btns">
                <div class="footer__btns-item">
                    <button class="footer__btns-btn">
                        <svg class="footer__btns-icon" width="9.844vw" height="3.385vw">
                            <use href="./assets/img/sprite.svg#footer-btn1"></use>
                        </svg>

                        <span class="footer__btns-text">Проверки</span>

                        <span class="footer__btns-val">0</span>
                    </button>
                </div>

                <div class="footer__btns-item">
                    <button class="footer__btns-btn btn--large">
                        <svg class="footer__btns-icon" width="10.677vw" height="3.438vw">
                            <use href="./assets/img/sprite.svg#footer-btn2"></use>
                        </svg>

                        <span class="footer__btns-text">Трансляции экзаменов</span>
                    </button>
                </div>
            </div>
        </footer>
        `
    }
   
}

customElements.define('footer-block', FooterBlock)

