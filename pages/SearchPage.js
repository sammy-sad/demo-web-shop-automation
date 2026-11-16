class SearchPage {
  constructor(page) {
    this.page = page;

    this.searchBox = page.locator('#small-searchterms');
    this.searchButton = page.locator('.search-box-button');
  }

  async search(searchWord) {
    await this.searchBox.fill(searchWord);
    await this.searchButton.click();
  }
}

module.exports = { SearchPage };