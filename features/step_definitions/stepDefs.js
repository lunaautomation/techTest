const assert = require('assert');
const { Given, Then } = require('@cucumber/cucumber');

Given(/^I call the punk api with beer id (\d+)$/, function (beerId) {
    console.log(beerId + " beerID")
    //assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Then(/^I expect a (\d+) response status$/, function (expectedResponseCode) {
    console.log(expectedResponseCode + " response code expect")
    //assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Then(/$The malt is .* $/, function (maltType) {
    console.log(maltType + " maltType")
    //assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Then(/^The malt value is \d+ and the unit is .* $/, function (maltValue, unitOfMeasurement) {
    console.log(maltValue + " Here " + unitOfMeasurement)
    //assert.strictEqual(this.actualAnswer, expectedAnswer);
});
