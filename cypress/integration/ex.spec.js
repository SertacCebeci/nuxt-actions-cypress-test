/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("displays two todo items by default", () => {
    cy.get("[data-cy=todo]").as("todo");

    cy.get("@todo")
      .children()
      .should("have.length", 3);

    cy.get("@todo")
      .children()
      .first()
      .should("have.text", "take grocery");
  });
});
