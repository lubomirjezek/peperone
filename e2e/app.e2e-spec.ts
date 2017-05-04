import { PepePage } from './app.po';

describe('pepe App', () => {
  let page: PepePage;

  beforeEach(() => {
    page = new PepePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
