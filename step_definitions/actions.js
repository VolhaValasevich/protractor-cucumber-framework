"use strict";
const {When} = require('cucumber');
const helper = require('./util/elementHelper');
const logger = require("./util/logger.js").logger;
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^I open "([^"]*)" url$/, (url) => {
    logger.action(`When I open "${url}" url`);
    return helper.getUrl(url);
});

When(/^I click "([^"]*)"$/, (alias) => {
    logger.action(`When I click "${alias}"`);
    return helper.click(alias);
});

When(/^I click link "([^"]*)"$/, (linktext) => {
    logger.action(`When I click link "${linktext}"`);
    return helper.clickLink(linktext);
});

When(/^I drag "([^"]*)" to "([^"]*)"$/, (element, target) => {
    logger.action(`When I drag "${element}" to "${target}"`);
    return helper.dragAndDrop(element, target);
});

When(/^I wait until "([^"]*)" is present$/, (alias) => {
    logger.action(`When I wait until "${alias}" is present`);
    return helper.waitUntilPresent(alias);
});

When(/^I wait until "([^"]*)" is clickable$/, (alias) => {
    logger.action(`When I wait until "${alias}" is clickable`);
    return helper.waitUntilClickable(alias);
});