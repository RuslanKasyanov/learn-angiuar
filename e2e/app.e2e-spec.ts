import { LernAngularPage } from './app.po';

describe('lern-angular App', function() {
  let page: LernAngularPage;

  beforeEach(() => {
    page = new LernAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
