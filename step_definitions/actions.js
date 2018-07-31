"use strict";
const {When} = require('cucumber');
const helper = require('./util/elementHelper');
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^I open "([^"]*)" url$/, (url) => {
    return helper.getUrl(url);
});

When(/^I click "([^"]*)"$/, (alias) => {
    return helper.click(alias);
});

When(/^I click link "([^"]*)"$/, (linktext) => {
    return helper.clickLink(linktext);
});

When(/^I drag "([^"]*)" to "([^"]*)"$/, (element, target) => {
    return helper.dragAndDrop(element, target);
});

When(/^I wait until "([^"]*)" is present$/, (alias) => {
    return helper.waitUntilPresent(alias);
});

When(/^I wait until "([^"]*)" is clickable$/, (alias) => {
    return helper.waitUntilClickable(alias);
});