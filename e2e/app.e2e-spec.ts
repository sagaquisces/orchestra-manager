import { OrchestraManagerPage } from './app.po';

describe('orchestra-manager App', () => {
  let page: OrchestraManagerPage;

  beforeEach(() => {
    page = new OrchestraManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
