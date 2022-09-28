import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://example.cypress.io/");
});

Then("I should see a search bar", () => {
  cy.get("div")
  .should(
    "contain",
    "Kitchen Sink"
  );

  assert.deepEqual({}, {});
});