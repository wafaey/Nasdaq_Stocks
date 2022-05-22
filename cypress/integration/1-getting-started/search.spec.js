describe("Nasdaq Stocks", () => {
  it("I can search for stock", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input[type='search']").type("aaa");
    cy.contains("Search results");
    cy.contains("AAA");
  });
});
