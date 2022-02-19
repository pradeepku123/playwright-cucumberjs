const { Given, When, Then } = require("@cucumber/cucumber");

// import expect for Assertion

const { expect } = require("@playwright/test");

const url = "https://localhost:3000";

Given("a user has navigated to the homepage", async function () {
  console.log("Given");
});

When(
  "the user adds {string} to the todo list using the webUI",
  async function (item) {
    console.log("When");
  }
);

Then("card {string} should be displayed on the webUI", async function (item) {
  console.log("Then");
});
