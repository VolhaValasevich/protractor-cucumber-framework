"use strict";
const {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const elementHelper = require('./util/stepFunctions.js');

Then(/^"([^"]*)" should( not)? be visible$/, async (alias, notArg) => {
    let element = elementHelper.getPageObjectElement(alias);
    let result = await element.isPresent();
    return expect(result).to.be.equal(!notArg);
});

Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (alias, notArg, expectedNumber) => {
    let element = elementHelper.getPageObjectElement(alias);
    let result = await element.count();
    expectedNumber = parseInt(expectedNumber);
    if (notArg) {
        return expect(result).to.not.equal(expectedNumber);
    }
    else {
        return expect(result).to.equal(expectedNumber);
    }
});

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
    let element = elementHelper.getPageObjectElement(alias);
    let elementText = await element.getText();
    if (notArg) {
        return expect(elementText.indexOf(textToContain)).to.equal(-1);
    } else {
        return expect(elementText.indexOf(textToContain)).to.not.equal(-1);
    }
});

Then(/^Text of "([^"]*)" should( not)? equal "([^"]*)"$/, async (alias, notArg, text) => {
    let element = elementHelper.getPageObjectElement(alias);
    let elementText = await element.getText();
    if (notArg) {
        return expect(elementText).to.not.equal(text);
    } else {
        return expect(elementText).to.equal(text);
    }
});

Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    let pageTitle = await browser.getTitle();
    if (notArg) {
        return expect(pageTitle).to.not.equal(text);
    }
    else {
        return expect(pageTitle).to.be.equal(text);
    }
});