


class TopNavBlock extends HTMLElement {
    constructor() {
        super()
        this.render()
        
    }

    render() {
        this.innerHTML = `
        <div class="topnav">
            <ul class="layout-link layout-link_home">
                <li class="layout-link__item">
                    <svg width="2.708vw" height="2.708vw" viewBox="0 0 52 52" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M51.5 38V38.2071L51.3536 38.3536L38.3536 51.3536L38.2071 51.5H38H1H0.5V51V11V10.7929L0.646446 10.6464L10.6464 0.646447L10.7929 0.5H11H51H51.5V1V38Z"
                            stroke="#217AFF" stroke-opacity="0.4" />
                        <path
                            d="M32.6657 17C35.2923 18.9086 37 22.0048 37 25.5C37 31.299 32.299 36 26.5 36C20.701 36 16 31.299 16 25.5C16 22.0048 17.7077 18.9086 20.3343 17"
                            stroke="#217AFF" stroke-width="2" />
                        <path d="M26.5 13V27" stroke="#217AFF" stroke-width="2" />
                    </svg>
                </li>
                <li class="layout-link__item">
                    <svg width="2.708vw" height="2.708vw" viewBox="0 0 52 52" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M51.5 38V38.2071L51.3536 38.3536L38.3536 51.3536L38.2071 51.5H38H1H0.5V51V11V10.7929L0.646446 10.6464L10.6464 0.646447L10.7929 0.5H11H51H51.5V1V38Z"
                            stroke="#217AFF" stroke-opacity="0.4" />
                        <path
                            d="M32.6657 17C35.2923 18.9086 37 22.0048 37 25.5C37 31.299 32.299 36 26.5 36C20.701 36 16 31.299 16 25.5C16 22.0048 17.7077 18.9086 20.3343 17"
                            stroke="#217AFF" stroke-width="2" />
                        <path d="M26.5 13V27" stroke="#217AFF" stroke-width="2" />
                    </svg>
                </li>
            </ul>


            <a class="topnav__btn topnav__btn_portraits" href="#">
                <svg class="topnav__btn-border" viewBox="0 0 92 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.5 38V38.2942L0.757179 38.4371L24.1572 51.4371L24.2704 51.5H24.4H91H91.5V51V11V10.6997L91.2349 10.5586L72.4437 0.558609L72.3335 0.5H72.2088H1H0.5V1V38Z"
                        fill="black" fill-opacity="0.1" stroke="#FB9B2B" />
                </svg>
                <p class="topnav__btn-text">Портреты</p>
            </a>

            <a class="topnav__btn topnav__btn_priority" href="#">
                <svg class="topnav__btn-border" viewBox="0 0 156 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M155.5 38V38.3634L155.154 38.4756L115.114 51.4756L115.039 51.5H114.96H0.999985H0.499985V51V11V10.6366L0.845581 10.5244L31.6456 0.524438L31.7209 0.5H31.8H155H155.5V1V38Z"
                        fill="black" fill-opacity="0.1" stroke="#FB9B2B" />
                </svg>
                <p class="topnav__btn-text">ПРИОРИТЕТ 2030</p>
            </a>
        </div>
        `
    }
   
}

customElements.define('top-nav-block', TopNavBlock)