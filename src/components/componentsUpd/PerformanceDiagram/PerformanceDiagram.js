import template from './PerformanceDiagram.htm'
import style from './PerformanceDiagram.css'

class PerformanceDiagram extends HTMLElementExtended {
  constructor() {
    super(template, style)
    this.animationTime = 3200
    this.render()
  }

  get dataUrl () {
    return this.getAttribute('data-url')
  }

  async render () {
    const { absolute, quality } = await this.getData(this.dataUrl)
    
    this.setBar(absolute, '.absolute-progress-bar', '#FB9B2B', false)
    this.setBar(quality, '.quality-progress-bar', '#217AFF', true)  
  }

  setBar(data, selector, color, isReverse = true) {
    const bar = Array.from(this.shadowRoot.querySelectorAll(selector))
    isReverse ? bar.reverse() : bar
    const active = Math.round(bar.length / 100 * data)

    setTimeout(() => {
      this.setProgressBar(bar, active, color)
    }, this.animationTime)
  }
}

customElements.define('performance-diagram', PerformanceDiagram)