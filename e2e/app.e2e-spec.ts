import { Mc2Page } from './app.po';

describe('mc2 App', function() {
  let page: Mc2Page;

  beforeEach(() => {
    page = new Mc2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
