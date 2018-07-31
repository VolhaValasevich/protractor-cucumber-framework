"use strict";
const {After, Then, Status} = require('cucumber');
const expect = require('chai').expect;
const logger = require("./util/logger.js").logger;
const helper = require('./util/elementHelper');

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
    logger.finish("Checking text of " + alias);
    let elementText = await helper.getText(alias);
    if (notArg) {
        return expect(elementText.indexOf(textToContain)).to.equal(-1);
    } else {
        return expect(elementText.indexOf(textToContain)).to.not.equal(-1);
    }
});

Then(/^Text of "([^"]*)" should( not)? equal "([^"]*)"$/, async (alias, notArg, text) => {
    logger.finish("Checking text of " + alias);
    let elementText = await helper.getText(alias);
    if (notArg) {
        return expect(elementText).to.not.equal(text);
    } else {
        return expect(elementText).to.equal(text);
    }
});

Then(/^Page title should( not)? contain "([^"]*)"$/, async (notArg, text) => {
    logger.finish("Checking page title to contain " + text);
    let pageTitle = await helper.getTitle();
    if (notArg) {
        return expect(pageTitle.indexOf(text)).to.equal(-1);
    } else {
        return expect(pageTitle.indexOf(text)).to.not.equal(-1);
    }
});

After((testCase) => {
    if (testCase.result.status === Status.FAILED) {
        logger.fail("Test failed!");
    }
});