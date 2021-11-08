class HeaderBlock extends HTMLElement {
    constructor() {
        super()
        this.render()
        
    }

    render() {
        this.innerHTML = `
            <header class="header">
                <form action="/" class="header__search">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" class="header__search-bg">
                        <use href="./assets/img/sprite.svg#search-bg-icon"></use>
                    </svg>

                    <div class="header__search-contains">
                        <button type="submit" class="header__search-submit">
                            <svg width="0.885vw" height="1.8vh">
                                <use href="./assets/img/sprite.svg#search-icon"></use>
                            </svg>
                        </button>
                        <input type="search" class="header__search-input" placeholder="Поиск" />
                    </div>
                </form>

            <button class="header__link" id="rec_click">
                <svg class="header__link-icon" width="1.042vw" height="3.2vh" fill="none">
                    <use href="./assets/img/sprite.svg#user-icon"></use>
                </svg>

                <span class="header__link-text header__link-text_provost">ректор</span>

                <svg class="header__link-bg" fill="none">
                    <use href="./assets/img/sprite.svg#link-icon"></use>
                </svg>
            </button>

            <svg fill="none" xmlns="http://www.w3.org/2000/svg" class="header__bg" width="4.531vw" height="30.104vw">
                <use href="./assets/img/sprite.svg#header-bg-icon"></use>
            </svg>
        </header>
        `
    }
   
}

customElements.define('header-block', HeaderBlock)