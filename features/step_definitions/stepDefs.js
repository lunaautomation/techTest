const assert = require('assert');
const { Given, Then } = require('@cucumber/cucumber');
const restHelper = require('../utils/restClient')
const apiUrl = "https://api.punkapi.com/v2/"

Given("I call the punk api with beer id {int}", async function (beerId) {
    const response = await restHelper.getRequest(`${apiUrl}beers/${beerId}`);
    this.context['response'] = response;    
});

Then("I expect a {int} status response", async function (expectedResponseCode) {
    assert.strictEqual(this.context['response'].status, expectedResponseCode);
});

Then("The malt is {string}", async function (maltType) {
    assert.deepStrictEqual(this.context['response'].data[0].ingredients.malt[0].name, maltType);
});

Then("The malt value is {float} and the unit is {string}", async function (maltValue, unitOfMeasurement) {
    assert.deepStrictEqual(this.context['response'].data[0].ingredients.malt[0].amount.value, maltValue);
    assert.deepStrictEqual(this.context['response'].data[0].ingredients.malt[0].amount.unit, unitOfMeasurement);    
});
