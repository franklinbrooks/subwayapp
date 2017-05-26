import { SubwayPage } from './app.po';

describe('subway App', function() {
  let page: SubwayPage;

  beforeEach(() => {
    page = new SubwayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
