class BackgroundPage{
    // Navigate to the given URL
    enterURL(url) {
        cy.visit(url);
    }
}
const background = new BackgroundPage();
export default background;