import { FullRosterPage } from './app.po';

describe('full-roster App', () => {
  let page: FullRosterPage;

  beforeEach(() => {
    page = new FullRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
