const TMobilePO = require('./TMobilePO.js');
const logger = require("./logger.js").logger;
const EC = protractor.ExpectedConditions;

class ElementHelper {
    getPageObjectElement(alias) {
        const selector = TMobilePO.elements[alias];
        logger.info(`Searching for element ${selector}`);
        return element(by.css(selector));
    }

    getUrl(url) {
        logger.info("Going to " + url);
        return browser.get(url);
    }

    click(alias) {
        logger.info("Clicking on " + alias);
        return this.getPageObjectElement(alias).click();
    }

    clickLink(linktext) {
        logger.info("Clicking on link " + linktext);
        return element(by.linkText(linktext)).click();
    }

    dragAndDrop(element, target) {
        logger.info(`Dragging ${element} to ${target}`);
        return browser.actions().dragAndDrop(this.getPageObjectElement(element), this.getPageObjectElement(target)).mouseUp().perform();
    }

    waitUntilPresent(alias) {
        logger.info(`Waiting until ${alias} is present`);
        const element = this.getPageObjectElement(alias);
        return browser.wait(EC.presenceOf(element), 10 * 1000);
    }

    waitUntilClickable(alias) {
        logger.info(`Waiting until ${alias} is clickable`);
        const element = this.getPageObjectElement(alias);
        return browser.wait(EC.elementToBeClickable(element), 10 * 1000);
    }

    getText(alias) {
        logger.info("Getting text from " + alias);
        return this.getPageObjectElement(alias).getText();
    }
}

module.exports = new ElementHelper();