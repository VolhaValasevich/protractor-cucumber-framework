class TMobilePO {

    constructor() {
        this.elements = {
            "Price Slider": "input.slider-range",
            "First Slider Tick": "div.item-alt-one",
            "Second Slider Tick": "div.second-tick",
            "Third Slider Tick": "div.third-tick",
            "Fourth Slider Tick": "div.price-slider-container",
            "Monthly Price": "div.price-container.active div.price",
            "Military Plans Button": "a[data-analytics-id='WEB-26806-military-available -buttonCta']",
            "Verify Military Status Button": "a[aria-label='Click to verify military status.']"
        }
    }
}

module.exports = new TMobilePO();